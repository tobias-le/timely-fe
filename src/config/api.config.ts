const API_CONFIG = {
  BASE_URL: process.env.BACKEND_API_URL || "http://localhost:8080/api", // Use environment variable or default
  ENDPOINTS: {
    EMPLOYEES: "/employees",
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
