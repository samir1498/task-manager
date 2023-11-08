import { Link, useLocation } from "react-router-dom" // If you are using React Router

function Navbar() {
  const location = useLocation()
  const isHomePage = location.pathname === "/"
  return (
    <nav className="bg-gray-600 p-4">
      <div className="active container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white">
          Todo App
        </Link>
        <div className="space-x-4">
          {!isHomePage && (
            <Link
              to="/"
              className="text-white transition-all hover:text-xl hover:text-gray-500"
            >
              Home
            </Link>
          )}
          <Link
            to="/tasks"
            className="text-white transition-all hover:text-xl hover:text-gray-500"
          >
            Tasks
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
