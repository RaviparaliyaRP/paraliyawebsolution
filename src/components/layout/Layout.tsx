import Header from './Header';
import Footer from './Footer';
import FloatingActions from './FloatingActions';
import RecentActivityFeed from '@/components/ui/RecentActivityFeed';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
      <FloatingActions />
      <RecentActivityFeed />
    </div>
  );
};

export default Layout;
