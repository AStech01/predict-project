import AuthLayout from '@/components/layout/auth-layout'; // adjust as needed

export default function SignUpLayout({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}
