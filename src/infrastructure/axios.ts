import axios from "axios"

// Create an instance of Axios with a base URL
const apiInstance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
})

export default apiInstance
