import axios from "../../../infrastructure/axios"

export async function checkLogin() {
  try {
    const response = await axios.get("/api/v1/auth/check", {
      withCredentials: true,
    })

    if (response.status === 200) {
      return true // User is logged in
    } else {
      return false // User is not logged in
    }
  } catch (error) {
    console.error("Error checking login:", error)
    return false // Assume user is not logged in on error
  }
}
