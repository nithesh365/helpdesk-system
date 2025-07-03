import { Pencil } from "lucide-react"

export default function UserProfile() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="bg-teal-300 p-6  pb-50 rounded-lg flex justify-between">
        <div className="bg-white p-6 rounded-lg shadow-md w-[40%] text-black relative">
          <div className="absolute top-3 right-3">
            <Pencil size={18} className="text-black cursor-pointer" />
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-4xl mb-4">
              <span className="text-black">👤</span>
            </div>
            <p><strong>Username</strong></p>
            <p>Contact Number</p>
            <p>Email</p>
            <p>Department</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md w-[45%] text-black">
          <h3 className="text-lg font-semibold mb-2">Give Your Feedback</h3>
          <p className="bg-gray-400 px-4 py-2 mb-3">[Lorem Ipsum]</p>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-gray-500 text-2xl">★</span>
            ))}
          </div>
          <button className="bg-teal-400 text-black font-semibold py-2 px-4 rounded">
            Submit Feedback
          </button>
        </div>
      </div>
    </>
  )
}