import { Link } from "react-router-dom"
import Navbar from "../common/NavBar"

export default function SignUpSuccess() {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <main className="flex h-full w-full flex-col items-center">
        <h1>Register Success</h1>
        <Link to="/">Login</Link>
      </main>
    </div>
  )
}
