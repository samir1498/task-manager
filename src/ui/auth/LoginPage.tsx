import { FormEvent, useState } from "react"
import Navbar from "../common/NavBar"
import { Link, useNavigate } from "react-router-dom"
import AuthService from "../../adapters/auth/AuthService"
import { LoginError } from "../../core/domain/auth"

export default function Home() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleLogin = async () => {
    await AuthService.login(username, password)
    // Handle UI updates or navigation based on login success or failure
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    console.log("logging in")

    await handleLogin()
    if (LoginError.value === "") {
      navigate("tasks")
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
          <span className="p-4 text-center text-4xl font-bold">Login</span>
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
              {LoginError.value !== "" && (
                <span className="pt-2 text-xs text-red-500">
                  {LoginError.value}
                </span>
              )}
            </div>
            <span className="w-full pt-2 text-center">
              <Link
                to="register"
                className="w-full text-center text-sm text-blue-600 underline visited:text-purple-600"
              >
                register?
              </Link>
            </span>
          </div>
          <input
            type="submit"
            value="Login"
            className="mb-4 mt-4 self-center rounded-xl border border-black bg-gray-800 p-4 py-2 text-white hover:bg-white hover:text-black focus:bg-white focus:text-black"
          />
        </form>
      </main>
    </div>
  )
}
