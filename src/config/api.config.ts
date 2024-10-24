const API_CONFIG = {
  BASE_URL: "http://localhost:8080/api",
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
