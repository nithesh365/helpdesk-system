import { ReactNode } from "react"
import {
  LayoutDashboard,
  Ticket,
  TicketCheck,
  ChevronRight,
  Bell,
  User,
  LogOut,
} from "lucide-react"
import { Outlet } from "react-router-dom"

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-teal-400 px-6 py-3 flex justify-between items-center">
        <h1 className="text-white font-bold italic text-2xl">Helpdesk</h1>
        <div className="flex space-x-4 items-center">
          <span className="bg-black text-white text-xs px-2 py-0.5 rounded">BM</span>
          <span className="bg-white text-black text-xs px-2 py-0.5 rounded">BI</span>
          <Bell className="text-black" />
          <a href="/user/profile">
            <User className="text-black" />
          </a>
          <LogOut className="text-black cursor-pointer" />
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="bg-gray-600 text-black w-64 p-4 space-y-6 font-semibold">
          <a href="/user" className="flex items-center space-x-2">
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </a>
          <a href="/user/new-ticket" className="flex items-center space-x-2">
            <Ticket size={18} />
            <span>New Ticket</span>
          </a>
          <a href="/user/my-tickets" className="flex items-center space-x-2">
            <TicketCheck size={18} />
            <span>My Ticket</span>
          </a>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white p-6 text-black">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-teal-400 text-black text-center py-2 text-sm font-medium">
        Footer Area
      </footer>
    </div>
  )
}