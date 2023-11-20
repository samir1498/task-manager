import { Link } from "react-router-dom"
import Navbar from "../common/NavBar"

export default function SignUpSuccess() {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <main className="flex h-full w-full flex-col items-center">
        <div className="flex h-full flex-col items-center justify-center">
          <h1>Register Success</h1>
          <Link to="/" className="text-xl text-blue-600 underline">
            Login
          </Link>
        </div>
      </main>
    </div>
  )
}
