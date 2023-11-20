// adapters/auth/AuthService.ts
import { checkLoginSignal, loginSignal, registerSignal } from "./authSignlas"
import AuthApi from "./AuthApi"

const AuthService = {
  async login(username: string, password: string): Promise<void> {
    const success = await AuthApi.login(username, password)
    loginSignal.value = success
  },

  async register(username: string, password: string): Promise<void> {
    const success = await AuthApi.register(username, password)
    registerSignal.value = success
  },

  async checkLogin(): Promise<void> {
    const loggedIn = await AuthApi.checkLogin()
    checkLoginSignal.value = loggedIn
  },
}

export default AuthService
