import { FormEvent, useState } from "react"
import Navbar from "../common/NavBar"
import { useNavigate } from "react-router-dom"
import AuthService from "../../adapters/auth/AuthService"
import { registerError } from "../../core/domain/auth"

export default function RegisterAdapter() {
  const [username, setUsername] = useState("samir")
  const [password, setPassword] = useState("samir")

  const navigate = useNavigate()

  const handleLogin = async () => {
    await AuthService.register(username, password)
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    console.log("register")

    await handleLogin()
    if (registerError.value === "") {
      navigate("../register-success")
    }
  }
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <main className="flex h-full w-full flex-col items-center">
        <form
          className="mt-24 flex flex-col justify-start gap-2 rounded-xl border border-black p-2 px-20 shadow-xl"
          onSubmit={handleSubmit}
        >
          <span className="p-4 text-center text-4xl font-bold">Register</span>
          <div className="flex flex-col">
            <label htmlFor="username" className="font-bold">
              Username:
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="border-b border-black outline-gray-400"
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="font-bold">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="border-b border-black outline-gray-400"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <div className="flex flex-col">
              {registerError.value !== "" && (
                <span className="pt-2 text-xs text-red-500">
                  {registerError.value}
                </span>
              )}
            </div>
          </div>
          <input
            type="submit"
            value="Register"
            className="mb-4 mt-4 self-center rounded-xl border border-black bg-gray-800 p-4 py-2 text-white hover:bg-white hover:text-black focus:bg-white focus:text-black"
          />
        </form>
      </main>
    </div>
  )
}
