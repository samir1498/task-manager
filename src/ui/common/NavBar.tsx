import { Link, useLocation, useNavigate } from "react-router-dom" // If you are using React Router

function Navbar() {
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  const navigate = useNavigate()

  async function handleLogout() {
    // Assuming you have an API endpoint for login in the backend
    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })

      if (response.ok) {
        // Login successful, you may redirect or handle it based on your application flow
        console.log("Logout successful")
        navigate("/")
      } else if (response.status === 401) {
        // Handle authentication failure
        console.error("Logout failed")
      }
    } catch (error) {
      console.error("Error during login:", error)
    }
  }
  return (
    <nav className="border-b border-black p-4 shadow-md">
      <div className="active container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          Todo App
        </Link>
        <div className="space-x-4">
          {!isHomePage && (
            <button
              type="button"
              className="rounded-xl border border-black bg-gray-800 p-4 py-2 text-white hover:bg-white hover:text-black focus:bg-white focus:text-black"
              onClick={handleLogout}
            >
              Log out
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
