import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-300 to-blue-200 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-teal-600 mb-4 italic">Welcome to Helpdesk System</h1>
        <p className="text-gray-600 mb-6">Quick access to common actions:</p>

        {/* Use a vertical flex column and gap for spacing */}
        <div className="flex flex-col gap-3">
          <Link to="/sign-up">
            <Button className="w-full bg-teal-500">Sign Up</Button>
          </Link>

          <Link to="/sign-in">
            <Button className="w-full bg-blue-500">Sign In</Button>
          </Link>

          <Link to="/forgot-password">
            <Button className="w-full bg-yellow-400 text-black">Forgot Password</Button>
          </Link>

          <Link to="/user/profile">
            <Button className="w-full bg-gray-600">View Profile</Button>
          </Link>

          <Link to="/user">
            <Button className="w-full bg-black text-white">Go to Dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
