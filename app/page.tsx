import AuthLayout from '@/components/layout/auth-layout';
import LoginForm from '@/app/login/page';
import SignUpForm from '@/app/signup/page'

export default function Home() {
  return (
    <AuthLayout>
      <LoginForm />
      {/* <SignUpForm/> */}
    </AuthLayout>

  );
}