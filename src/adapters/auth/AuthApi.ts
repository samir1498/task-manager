// adapters/auth/AuthApi.ts
import { LoginError } from "../../core/domain/auth"
import axios from "../../infrastructure/axios"

const AuthApi = {
  async login(username: string, password: string): Promise<boolean> {
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
      if (response.status === 403) {
        LoginError.value = "Check your username or password."
      }

      return response.status === 200
    } catch (error) {
      console.error("Error during login:", error)
      LoginError.value = "Somthing went worng."
      return false
    }
  },

  async register(username: string, password: string): Promise<boolean> {
    try {
      const response = await axios.post(
        "/auth/register",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )

      return response.status === 200
    } catch (error) {
      console.error("Error during registration:", error)
      return false
    }
  },
}

export default AuthApi
