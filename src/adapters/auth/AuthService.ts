// adapters/auth/AuthService.ts
import { LoginError, registerError } from "../../core/domain/auth"
import AuthApi from "./AuthApi"

const AuthService = {
  async login(username: string, password: string): Promise<void> {
    try {
      await AuthApi.login(username, password)
    } catch (error) {
      LoginError.value = "Somthing went wrong please try again."
      console.log("LoginError", error)
    }
  },

  async register(username: string, password: string): Promise<void> {
    const success = await AuthApi.register(username, password)
    if (!success) {
      registerError.value = "somthing went wrong try again."
    }
  },
}

export default AuthService
