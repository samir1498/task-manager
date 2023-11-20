import { LoginError } from "../../../state/authSignlas"
import axios from "../../../infrastructure/axios"

export async function handleLogin(username: string, password: string) {
  LoginError.value = ""
  if (username === "" || password === "") {
    // set login error signal
    return
  }
  // Assuming you have an API endpoint for login in the backend
  try {
    const response = await axios.post(
      "/auth/login",
      {
        username,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
    )

    if (response.status === 200) {
      // Login successful, you may redirect or handle it based on your application flow
      console.log("Login successful")
      return true
    } else if (response.status === 401) {
      // TODO:set login error sifgnal
      console.error("Login failed")
      LoginError.value = "Unauthorized access. Please check your credentials."
    }
  } catch (error) {
    console.error("Error during login:", error)
    LoginError.value = "Error during login please try again."
    return
  }
}
