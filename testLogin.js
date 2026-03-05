// Test script để kiểm tra kết nối API login
// Chạy: node testLogin.js

const axios = require('axios');

const API_BASE_URL = 'http://localhost:8080';

async function testLogin() {
  console.log('🧪 Testing Login API...\n');
  
  const testCases = [
    {
      name: 'Admin Login',
      credentials: {
        email: 'admin@vuatro.com',
        password: '123456'
      }
    },
    {
      name: 'User Login',
      credentials: {
        email: 'lenguyenquangt@gmail.com',
        password: '123456'
      }
    }
  ];

  for (const testCase of testCases) {
    try {
      console.log(`📝 Test: ${testCase.name}`);
      console.log(`   Email: ${testCase.credentials.email}`);
      
      const response = await axios.post(
        `${API_BASE_URL}/api/auth/login`,
        testCase.credentials,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      console.log(`   ✅ Success!`);
      console.log(`   Status: ${response.data.status}`);
      console.log(`   Role: ${response.data.role}`);
      console.log(`   Message: ${response.data.message}`);
      console.log(`   Token: ${response.data.token.substring(0, 50)}...`);
      console.log('');
      
    } catch (error) {
      console.log(`   ❌ Failed!`);
      if (error.response) {
        console.log(`   Status: ${error.response.status}`);
        console.log(`   Message: ${error.response.data?.message || 'Unknown error'}`);
      } else {
        console.log(`   Error: ${error.message}`);
      }
      console.log('');
    }
  }
}

testLogin();
