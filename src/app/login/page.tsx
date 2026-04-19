import { LoginForm } from '@/components/auth/login-form'

export const metadata = {
  title: 'Log in — TaskFlow',
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
