import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

// Sample blog posts data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 'web-development-trends-2024',
    title: 'Top Web Development Trends to Watch in 2024',
    excerpt: 'Discover the latest trends shaping the web development landscape, from AI integration to progressive web apps and beyond.',
    content: `The web development industry is constantly evolving, and 2024 brings exciting new trends that will shape how we build and interact with websites. Here are the key trends every developer and business owner should know about.

## 1. AI-Powered Development Tools

Artificial Intelligence is revolutionizing how we write code. Tools like GitHub Copilot and ChatGPT are helping developers write better code faster, while AI-powered design tools are making it easier to create stunning user interfaces.

### Benefits of AI in Development:
- Faster code generation
- Improved code quality
- Automated testing
- Enhanced debugging capabilities

## 2. Progressive Web Apps (PWAs)

PWAs continue to gain traction as they offer native app-like experiences through web browsers. They're faster, more reliable, and work offline, making them perfect for businesses looking to improve user engagement.

### Key PWA Features:
- Offline functionality
- Push notifications
- App-like interface
- Fast loading times

## 3. Serverless Architecture

Serverless computing is becoming mainstream, allowing developers to focus on code rather than infrastructure management. This trend is particularly beneficial for startups and small businesses looking to scale efficiently.

### Advantages of Serverless:
- Reduced operational costs
- Automatic scaling
- Faster deployment
- Better resource utilization

## 4. Enhanced Cybersecurity

With increasing cyber threats, security-first development is no longer optional. Modern web applications must be built with robust security measures from the ground up.

### Essential Security Measures:
- SSL certificates
- Regular security audits
- Two-factor authentication
- Data encryption

## 5. Voice User Interfaces

Voice search and voice commands are becoming more prevalent, requiring websites to be optimized for voice interactions.

## Conclusion

Staying updated with these trends is crucial for businesses looking to maintain a competitive edge online. At Paraliya Web Solution, we incorporate these latest technologies to deliver cutting-edge solutions for our clients.

Ready to modernize your website with these latest trends? [Contact us today](/contact) for a free consultation.`,
    author: 'Ravi Paraliya',
    publishedAt: '2024-01-15',
    readTime: '5 min read',
    category: 'Web Development',
    tags: ['Trends', 'Technology', 'AI', 'PWA'],
    featured: true,
  },
  {
    id: 'ecommerce-website-essentials',
    title: 'Essential Features Every E-commerce Website Needs',
    excerpt: 'Building a successful online store requires more than just listing products. Learn about the must-have features that drive conversions.',
    content: `Creating a successful e-commerce website involves much more than simply displaying products online. To compete in today's digital marketplace, your online store needs specific features that enhance user experience and drive conversions.

## 1. User-Friendly Navigation

Clear, intuitive navigation is crucial for helping customers find what they're looking for quickly. Implement breadcrumbs, search functionality, and well-organized categories.

### Navigation Best Practices:
- Clear menu structure
- Search bar with filters
- Breadcrumb navigation
- Category organization

## 2. Mobile Responsiveness

With over 50% of online shopping happening on mobile devices, your e-commerce site must provide an excellent mobile experience.

### Mobile Optimization Tips:
- Responsive design
- Touch-friendly buttons
- Fast loading on mobile
- Mobile payment options

## 3. Secure Payment Gateway

Security is paramount in e-commerce. Integrate trusted payment gateways like Razorpay, Stripe, or PayPal to ensure secure transactions.

### Payment Security Features:
- SSL encryption
- PCI compliance
- Multiple payment options
- Fraud detection

## 4. Product Reviews and Ratings

Customer reviews build trust and help other shoppers make informed decisions. They also improve your SEO rankings.

### Review System Benefits:
- Increased trust
- Better SEO
- Higher conversion rates
- Customer feedback

## 5. Inventory Management

Real-time inventory tracking prevents overselling and helps you manage stock levels effectively.

### Inventory Features:
- Real-time stock updates
- Low stock alerts
- Automated reordering
- Multi-location tracking

## 6. Fast Loading Speed

Page speed directly impacts conversion rates. Optimize images, use CDNs, and implement caching to ensure fast loading times.

### Speed Optimization:
- Image compression
- CDN implementation
- Browser caching
- Code minification

## Conclusion

These features form the foundation of a successful e-commerce website. At Paraliya Web Solution, we ensure all our e-commerce projects include these essential elements and more.

Ready to launch your online store? [Get in touch with us](/contact) to discuss your e-commerce project.`,
    author: 'Ravi Paraliya',
    publishedAt: '2024-01-10',
    readTime: '4 min read',
    category: 'E-commerce',
    tags: ['E-commerce', 'Features', 'UX', 'Conversion'],
    featured: false,
  },
  // Add other blog posts here...
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find(p => p.id === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Paraliya Web Solution Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.id === params.slug);

  if (!post) {
    notFound();
  }

  // Convert markdown-style content to HTML (simplified)
  const formatContent = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        if (paragraph.startsWith('## ')) {
          return (
            <h2 key={index} className="text-2xl font-display font-bold text-gray-900 mt-8 mb-4">
              {paragraph.replace('## ', '')}
            </h2>
          );
        }
        if (paragraph.startsWith('### ')) {
          return (
            <h3 key={index} className="text-xl font-display font-semibold text-gray-900 mt-6 mb-3">
              {paragraph.replace('### ', '')}
            </h3>
          );
        }
        if (paragraph.startsWith('- ')) {
          const items = paragraph.split('\n').filter(line => line.startsWith('- '));
          return (
            <ul key={index} className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              {items.map((item, i) => (
                <li key={i}>{item.replace('- ', '')}</li>
              ))}
            </ul>
          );
        }
        if (paragraph.includes('[') && paragraph.includes('](')) {
          // Simple markdown link parsing
          const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
          const formattedParagraph = paragraph.replace(linkRegex, '<a href="$2" class="text-accent-purple hover:text-accent-blue font-medium">$1</a>');
          return (
            <p key={index} className="text-gray-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: formattedParagraph }} />
          );
        }
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-6">
            {paragraph}
          </p>
        );
      });
  };

  return (
    <div className="pt-8">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-600 mb-8">
          <a href="/" className="hover:text-accent-purple transition-colors duration-200">
            Home
          </a>
          <span className="mx-2">›</span>
          <a href="/blog" className="hover:text-accent-purple transition-colors duration-200">
            Blog
          </a>
          <span className="mx-2">›</span>
          <span className="text-gray-900 font-medium">{post.title}</span>
        </nav>

        {/* Back to Blog */}
        <Link
          href="/blog"
          className="inline-flex items-center text-accent-purple hover:text-accent-blue font-medium transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <Badge variant="default" size="md">
              {post.category}
            </Badge>
            <div className="flex items-center text-sm text-gray-500 space-x-4">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Author & Share */}
          <div className="flex items-center justify-between py-6 border-t border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-purple to-accent-blue rounded-full flex items-center justify-center text-white font-semibold">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{post.author}</div>
                <div className="text-sm text-gray-500">Author</div>
              </div>
            </div>

            <Button variant="outline" size="sm" className="group">
              <Share2 className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
              Share
            </Button>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {formatContent(post.content)}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" size="md">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-gradient-to-br from-accent-purple/10 to-accent-blue/10 rounded-2xl text-center">
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help bring your ideas to life with modern web solutions.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Get Free Consultation
            </Button>
          </Link>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-8">
            Related Posts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="group block"
                >
                  <div className="bg-gray-50 rounded-xl p-6 group-hover:bg-gray-100 transition-colors duration-200">
                    <Badge variant="default" size="sm" className="mb-3">
                      {relatedPost.category}
                    </Badge>
                    <h4 className="text-lg font-display font-semibold text-gray-900 mb-2 group-hover:text-accent-purple transition-colors duration-200">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center text-xs text-gray-500 mt-3 space-x-3">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{relatedPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}
