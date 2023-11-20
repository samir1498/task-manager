// adapters/auth/AuthApi.ts
import axios from "../../infrastructure/axios"

const AuthApi = {
  async login(username: string, password: string): Promise<boolean> {
    try {
      const response = await axios.post("/auth/login", {
        username,
        password,
      })

      return response.status === 200
    } catch (error) {
      console.error("Error during login:", error)
      return false
    }
  },

  async register(username: string, password: string): Promise<boolean> {
    try {
      const response = await axios.post("/auth/register", {
        username,
        password,
      })

      return response.status === 200
    } catch (error) {
      console.error("Error during registration:", error)
      return false
    }
  },

  async checkLogin(): Promise<boolean> {
    try {
      const response = await axios.get("/auth/check")

      return response.status === 200
    } catch (error) {
      console.error("Error checking login status:", error)
      return false
    }
  },
}

export default AuthApi
