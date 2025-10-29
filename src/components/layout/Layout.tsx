import Header from './Header';
import Footer from './Footer';
import FloatingActions from './FloatingActions';
import BackToTop from '@/components/ui/BackToTop';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content" className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
      <FloatingActions />
      <BackToTop />
    </div>
  );
};

export default Layout;
