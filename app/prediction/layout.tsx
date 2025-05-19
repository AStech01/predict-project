import Header from '@/components/layout/header';
import Navigation from '@/components/layout/navigation';
import WelcomeBanner from '@/components/layout/welcome-banner';

export default function PredictionFeed({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {/* <Navigation /> */}
      <main>
        <WelcomeBanner />
        {children}
      </main>
    </>
  );
}
