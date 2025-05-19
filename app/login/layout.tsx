import AuthLayout from '@/components/layout/auth-layout'; // adjust as needed

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}
