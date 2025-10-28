import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Paraliya Web Solution',
  description: 'Privacy Policy for Paraliya Web Solution. Learn how we collect, use, and protect your personal information.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="pt-8">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-600">
          <a href="/" className="hover:text-accent-purple transition-colors duration-200">
            Home
          </a>
          <span className="mx-2">›</span>
          <span className="text-gray-900 font-medium">Privacy Policy</span>
        </nav>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-sm text-gray-500 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <p>
            At Paraliya Web Solution, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-display font-bold text-gray-900 mt-8 mb-4">
            Information We Collect
          </h2>
          <p>
            We collect information you provide directly to us, such as when you:
          </p>
          <ul>
            <li>Fill out our contact form</li>
            <li>Subscribe to our newsletter</li>
            <li>Request a consultation</li>
            <li>Communicate with us via email or phone</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-gray-900 mt-8 mb-4">
            How We Use Your Information
          </h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you information about our services</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-gray-900 mt-8 mb-4">
            Information Sharing
          </h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with:
          </p>
          <ul>
            <li>Service providers who assist us in operating our website</li>
            <li>Legal authorities when required by law</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-gray-900 mt-8 mb-4">
            Data Security
          </h2>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-display font-bold text-gray-900 mt-8 mb-4">
            Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
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
