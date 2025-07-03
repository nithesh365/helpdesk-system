import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-400">
      <div className="bg-teal-200 p-10 w-full max-w-lg px-20 text-center">
        <h1 className="text-2xl font-bold italic mb-10">Helpdesk System</h1>
        <form className="space-y-4">
          <Input placeholder="Username" className='bg-white text-black border-black border-[1px] rounded-none' />
          <Input type="password" placeholder="Password" className='bg-white text-black border-black border-[1px] rounded-none' />
          <Button className="px-15 bg-green-500 my-5">Sign In</Button>
          <div className="flex justify-between text-sm pt-2">
            <a href="/forgot-password" className="text-red-600">Forgot password</a>
            <a href="/sign-up" className="text-black">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  )
}