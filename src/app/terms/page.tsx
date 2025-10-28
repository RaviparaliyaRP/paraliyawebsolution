import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Paraliya Web Solution',
  description: 'Terms of Service for Paraliya Web Solution. Read our terms and conditions for using our web development services.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="pt-8">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-600">
          <a href="/" className="hover:text-accent-purple transition-colors duration-200">
            Home
          </a>
          <span className="mx-2">›</span>
          <span className="text-gray-900 font-medium">Terms of Service</span>
        </nav>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-8">
          Terms of Service
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-sm text-gray-500 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <p>
            Welcome to Paraliya Web Solution. These Terms of Service govern your use of our website and services. By accessing our website or using our services, you agree to be bound by these terms.
          </p>

          <h2 className="text-2xl font-display font-bold text-gray-900 mt-8 mb-4">
            Services
          </h2>
          <p>
            Paraliya Web Solution provides web development services including but not limited to:
          </p>
          <ul>
            <li>Website design and development</li>
            <li>E-commerce solutions</li>
            <li>Custom web applications</li>
            <li>Website maintenance and support</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-gray-900 mt-8 mb-4">
            Payment Terms
          </h2>
          <p>
            Payment terms are as follows:
          </p>
          <ul>
            <li>50% advance payment required to start the project</li>
            <li>Remaining 50% due before project delivery</li>
            <li>Payment methods: Bank transfer, UPI, or as agreed</li>
            <li>Late payments may incur additional charges</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-gray-900 mt-8 mb-4">
            Project Timeline
          </h2>
          <p>
            Project timelines are estimates and may vary based on:
          </p>
          <ul>
            <li>Project complexity and scope</li>
            <li>Client feedback and approval times</li>
            <li>Content and material availability</li>
            <li>Technical requirements and third-party integrations</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-gray-900 mt-8 mb-4">
            Intellectual Property
          </h2>
          <p>
            Upon full payment, clients receive ownership of the final delivered work. However, we retain the right to:
          </p>
          <ul>
            <li>Showcase the work in our portfolio</li>
            <li>Use general methodologies and techniques</li>
            <li>Retain ownership of our proprietary tools and frameworks</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-gray-900 mt-8 mb-4">
            Limitation of Liability
          </h2>
          <p>
            Our liability is limited to the amount paid for our services. We are not responsible for indirect damages, lost profits, or consequential damages.
          </p>

          <h2 className="text-2xl font-display font-bold text-gray-900 mt-8 mb-4">
            Contact Information
          </h2>
          <p>
            For questions about these Terms of Service, contact us at:
          </p>
          <ul>
            <li>Email: paraliyaravi80@gmail.com</li>
            <li>Phone: +91 9898463251</li>
            <li>Address: Ahmedabad, Gujarat, India</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
