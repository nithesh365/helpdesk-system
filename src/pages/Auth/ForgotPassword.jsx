import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-400">
      <div className="bg-teal-200 p-8 w-full max-w-lg px-20 text-center">
        <p className="my-10">Don’t worry, Enter your email below and we will send you a link to change password.</p>
        <form  className="space-y-4 mb-4 flex flex-col items-center">
          <Input type="email" placeholder="Email" className='bg-white mb-10 text-black border-black border-[1px] rounded-none' />
          <Button className="px-15 block bg-green-500">Submit</Button>
        </form>
          <a href="/sign-in">
            <Button variant="secondary" className="px-15 mb-10 bg-blue-600 text-white hover:bg-gray-800">Sign In</Button>
          </a>
      </div>
    </div>
  )
}