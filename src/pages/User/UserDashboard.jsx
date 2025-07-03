
export default function Dashboard() {
  return (
    <>
      <div className="flex space-x-6">
        <div className="bg-blue-500 text-white shadow-lg px-6 py-6 rounded-xl text-center w-48">
          <h3 className="text-lg font-semibold">Total Tickets</h3>
          <p className="text-4xl font-bold mt-2">12</p>
        </div>
        <div className="bg-green-400 text-white shadow-lg px-6 py-6 rounded-xl text-center w-48">
          <h3 className="text-lg font-semibold">Total Solved</h3>
          <p className="text-4xl font-bold mt-2">8</p>
        </div>
        <div className="bg-red-400 text-white shadow-lg px-6 py-6 rounded-xl text-center w-48">
          <h3 className="text-lg font-semibold">Total Awaiting Approval</h3>
          <p className="text-4xl font-bold mt-2">2</p>
        </div>
        <div className="bg-yellow-300 text-white shadow-lg px-6 py-6 rounded-xl text-center w-48">
          <h3 className="text-lg font-semibold">Total in Progress</h3>
          <p className="text-4xl font-bold mt-2">2</p>
        </div>
      </div>
    </>
  )
}