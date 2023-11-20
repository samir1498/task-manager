import axios from "axios"

// Determine the base URL based on the environment
const baseURL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_BASE_URL_DEV
    : import.meta.env.VITE_API_BASE_URL_PROD
// Create an instance of Axios with a base URL
const apiInstance = axios.create({
  baseURL,
})

export default apiInstance
