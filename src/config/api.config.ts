const API_CONFIG = {
  BASE_URL: process.env.BACKEND_API_URL || "http://localhost:8080", // Ensure this is correct
  ENDPOINTS: {
    EMPLOYEES: "/api/employees",
    ATTENDANCE_SUMMARY: "/api/attendance/summary", // Ensure this matches your backend
    ATTENDANCE_DETAILS: "/api/attendance/details", // Add other endpoints as needed
    // Add other endpoints here as needed
  },
  // You can add other API-related configurations here
  TIMEOUT: 5000,
  HEADERS: {
    "Content-Type": "application/json",
    // Add any default headers here
  },
};

export default API_CONFIG;
