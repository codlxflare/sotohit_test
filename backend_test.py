#!/usr/bin/env python3
"""
Backend API Testing Script
Tests the basic functionality of the Apple Store backend API
"""

import requests
import json
import sys
from datetime import datetime

# Get backend URL from environment
BACKEND_URL = "https://elegant-gadgets.preview.emergentagent.com"
API_BASE = f"{BACKEND_URL}/api"

def test_root_endpoint():
    """Test GET /api/ endpoint"""
    print("🧪 Testing GET /api/ (root endpoint)...")
    try:
        response = requests.get(f"{API_BASE}/", timeout=10)
        print(f"   Status Code: {response.status_code}")
        print(f"   Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if "message" in data and data["message"] == "Hello World":
                print("   ✅ Root endpoint working correctly")
                return True
            else:
                print("   ❌ Unexpected response format")
                return False
        else:
            print(f"   ❌ Expected 200, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"   ❌ Request failed: {e}")
        return False
    except json.JSONDecodeError as e:
        print(f"   ❌ Invalid JSON response: {e}")
        return False

def test_create_status():
    """Test POST /api/status endpoint"""
    print("\n🧪 Testing POST /api/status (create status)...")
    
    test_data = {
        "client_name": "Test Client Premium"
    }
    
    try:
        response = requests.post(
            f"{API_BASE}/status", 
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        print(f"   Status Code: {response.status_code}")
        print(f"   Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            required_fields = ["id", "client_name", "timestamp"]
            
            if all(field in data for field in required_fields):
                if data["client_name"] == test_data["client_name"]:
                    print("   ✅ Status creation working correctly")
                    return True, data["id"]
                else:
                    print("   ❌ Client name mismatch")
                    return False, None
            else:
                print(f"   ❌ Missing required fields. Expected: {required_fields}")
                return False, None
        else:
            print(f"   ❌ Expected 200, got {response.status_code}")
            return False, None
            
    except requests.exceptions.RequestException as e:
        print(f"   ❌ Request failed: {e}")
        return False, None
    except json.JSONDecodeError as e:
        print(f"   ❌ Invalid JSON response: {e}")
        return False, None

def test_get_status_list():
    """Test GET /api/status endpoint"""
    print("\n🧪 Testing GET /api/status (get status list)...")
    try:
        response = requests.get(f"{API_BASE}/status", timeout=10)
        print(f"   Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"   Response: Found {len(data)} status records")
            
            if isinstance(data, list):
                if len(data) > 0:
                    # Check first record structure
                    first_record = data[0]
                    required_fields = ["id", "client_name", "timestamp"]
                    
                    if all(field in first_record for field in required_fields):
                        print("   ✅ Status list retrieval working correctly")
                        return True
                    else:
                        print(f"   ❌ Invalid record structure. Missing fields: {[f for f in required_fields if f not in first_record]}")
                        return False
                else:
                    print("   ✅ Status list endpoint working (empty list)")
                    return True
            else:
                print("   ❌ Expected list response")
                return False
        else:
            print(f"   ❌ Expected 200, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"   ❌ Request failed: {e}")
        return False
    except json.JSONDecodeError as e:
        print(f"   ❌ Invalid JSON response: {e}")
        return False

def test_cors_headers():
    """Test CORS configuration"""
    print("\n🧪 Testing CORS configuration...")
    try:
        # Test preflight request
        response = requests.options(
            f"{API_BASE}/status",
            headers={
                "Origin": "http://localhost:3000",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type"
            },
            timeout=10
        )
        
        print(f"   Preflight Status Code: {response.status_code}")
        
        cors_headers = {
            "Access-Control-Allow-Origin": response.headers.get("Access-Control-Allow-Origin"),
            "Access-Control-Allow-Methods": response.headers.get("Access-Control-Allow-Methods"),
            "Access-Control-Allow-Headers": response.headers.get("Access-Control-Allow-Headers")
        }
        
        print(f"   CORS Headers: {cors_headers}")
        
        if response.status_code in [200, 204]:
            if cors_headers["Access-Control-Allow-Origin"]:
                print("   ✅ CORS configuration working")
                return True
            else:
                print("   ❌ Missing CORS headers")
                return False
        else:
            print(f"   ❌ Preflight request failed with status {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"   ❌ CORS test failed: {e}")
        return False

def test_mongodb_connection():
    """Test MongoDB connection by creating and retrieving data"""
    print("\n🧪 Testing MongoDB connection...")
    
    # Create a test record
    test_data = {
        "client_name": f"MongoDB Test {datetime.now().strftime('%H:%M:%S')}"
    }
    
    try:
        # Create record
        create_response = requests.post(
            f"{API_BASE}/status", 
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if create_response.status_code != 200:
            print(f"   ❌ Failed to create test record: {create_response.status_code}")
            return False
        
        created_record = create_response.json()
        record_id = created_record["id"]
        
        # Retrieve records to verify persistence
        get_response = requests.get(f"{API_BASE}/status", timeout=10)
        
        if get_response.status_code != 200:
            print(f"   ❌ Failed to retrieve records: {get_response.status_code}")
            return False
        
        records = get_response.json()
        
        # Check if our record exists
        found_record = None
        for record in records:
            if record["id"] == record_id:
                found_record = record
                break
        
        if found_record:
            print(f"   ✅ MongoDB connection working - record persisted successfully")
            print(f"   Created record ID: {record_id}")
            return True
        else:
            print(f"   ❌ Record not found in database - persistence failed")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"   ❌ MongoDB test failed: {e}")
        return False
    except json.JSONDecodeError as e:
        print(f"   ❌ Invalid JSON response: {e}")
        return False

def main():
    """Run all backend tests"""
    print("🚀 Starting Backend API Tests")
    print(f"Backend URL: {BACKEND_URL}")
    print(f"API Base: {API_BASE}")
    print("=" * 60)
    
    test_results = []
    
    # Test 1: Root endpoint
    test_results.append(("Root Endpoint", test_root_endpoint()))
    
    # Test 2: Create status
    create_success, record_id = test_create_status()
    test_results.append(("Create Status", create_success))
    
    # Test 3: Get status list
    test_results.append(("Get Status List", test_get_status_list()))
    
    # Test 4: CORS configuration
    test_results.append(("CORS Configuration", test_cors_headers()))
    
    # Test 5: MongoDB connection
    test_results.append(("MongoDB Connection", test_mongodb_connection()))
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    
    passed = 0
    failed = 0
    
    for test_name, result in test_results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name:<20} {status}")
        if result:
            passed += 1
        else:
            failed += 1
    
    print(f"\nTotal Tests: {len(test_results)}")
    print(f"Passed: {passed}")
    print(f"Failed: {failed}")
    
    if failed == 0:
        print("\n🎉 All tests passed! Backend API is working correctly.")
        return 0
    else:
        print(f"\n⚠️  {failed} test(s) failed. Please check the issues above.")
        return 1

if __name__ == "__main__":
    sys.exit(main())