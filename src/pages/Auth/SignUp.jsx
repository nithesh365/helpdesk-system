import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-400">
      <div className="bg-teal-200 p-8 w-full max-w-lg px-20 text-center">
        <h1 className="text-2xl font-bold italic mb-1">Helpdesk System</h1>
        <p className="mb-4">Sign up here</p>
        <form className="space-y-4">
          <Input placeholder="Username" className='bg-white text-black border-black border-[1px] rounded-none ' />
          <Input type="password" placeholder="Password" className='bg-white text-black border-black border-[1px] rounded-none '/>
          <Input type="email" placeholder="Email"  className='bg-white text-black border-black border-[1px] rounded-none'/>
          <Button className="px-10 bg-blue-600">Sign Up</Button>
          <div className="flex justify-between text-sm pt-2">
            <a href="/forgot-password" className="text-red-600">Forgot password</a>
            <a href="/sign-in" className="text-black">Sign In</a>
          </div>
        </form>
      </div>
    </div>
  )
}