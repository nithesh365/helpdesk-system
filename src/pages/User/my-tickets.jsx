
const ticketData = [
  {
    id: "T001",
    subject: "Internet Not Working",
    date: "2025-07-01",
    status: "In Progress",
  },
  {
    id: "T002",
    subject: "Software Installation",
    date: "2025-06-30",
    status: "Solved",
  },
  {
    id: "T003",
    subject: "Printer Issue",
    date: "2025-06-28",
    status: "Awaiting Approval",
  },
]

export default function MyTickets() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">My Tickets</h2>

      <div className="bg-white text-black rounded-lg shadow-md overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-teal-400 text-black">
            <tr>
              <th className="py-3 px-4">Ticket ID</th>
              <th className="py-3 px-4">Subject</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {ticketData.map((ticket) => (
              <tr key={ticket.id} className="border-b border-gray-300 hover:bg-gray-100">
                <td className="py-3 px-4 font-medium">{ticket.id}</td>
                <td className="py-3 px-4">{ticket.subject}</td>
                <td className="py-3 px-4">{ticket.date}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded text-sm font-medium ${
                      ticket.status === "Solved"
                        ? "bg-green-300"
                        : ticket.status === "In Progress"
                        ? "bg-yellow-300"
                        : "bg-red-300"
                    }`}
                  >
                    {ticket.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
