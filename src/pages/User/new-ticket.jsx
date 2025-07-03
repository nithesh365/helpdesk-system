import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function NewTicket() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Create New Ticket</h2>

      <form className="bg-white text-black p-6 rounded-lg shadow-md max-w-xl space-y-4">
        <div>
          <label className="block font-semibold text-sm mb-1">Username</label>
          <Input placeholder="Enter your username" className="border border-gray-400" />
        </div>

        <div>
          <label className="block font-semibold text-sm mb-1">Email</label>
          <Input type="email" placeholder="Enter your email" className="border border-gray-400" />
        </div>

        <div>
          <label className="block font-semibold text-sm mb-1">Phone Number</label>
          <Input type="tel" placeholder="Enter your phone number" className="border border-gray-400" />
        </div>

        <div>
          <label className="block font-semibold text-sm mb-1">Department</label>
          <Input placeholder="Enter your department" className="border border-gray-400" />
        </div>

        <div>
          <label className="block font-semibold text-sm mb-1">Subject</label>
          <Input placeholder="Enter the subject" className="border border-gray-400" />
        </div>

        <div>
          <label className="block font-semibold text-sm mb-1">Message</label>
          <Textarea rows={4} placeholder="Describe your issue..." className="border border-gray-400" />
        </div>

        <div className="flex justify-end">
          <Button className="bg-teal-500 px-6">Submit Ticket</Button>
        </div>
      </form>
    </>
  )
}
