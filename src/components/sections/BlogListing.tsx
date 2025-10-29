'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';

const BlogListing = () => {
  // Sample blog posts - in a real app, this would come from a CMS or API
  const blogPosts = [
    {
      id: 'web-development-trends-2024',
      title: 'Top Web Development Trends to Watch in 2024',
      excerpt: 'Discover the latest trends shaping the web development landscape, from AI integration to progressive web apps and beyond.',
      content: `The web development industry is constantly evolving, and 2024 brings exciting new trends that will shape how we build and interact with websites. Here are the key trends every developer and business owner should know about.

## 1. AI-Powered Development Tools

Artificial Intelligence is revolutionizing how we write code. Tools like GitHub Copilot and ChatGPT are helping developers write better code faster, while AI-powered design tools are making it easier to create stunning user interfaces.

## 2. Progressive Web Apps (PWAs)

PWAs continue to gain traction as they offer native app-like experiences through web browsers. They're faster, more reliable, and work offline, making them perfect for businesses looking to improve user engagement.

## 3. Serverless Architecture

Serverless computing is becoming mainstream, allowing developers to focus on code rather than infrastructure management. This trend is particularly beneficial for startups and small businesses looking to scale efficiently.

## 4. Enhanced Cybersecurity

With increasing cyber threats, security-first development is no longer optional. Modern web applications must be built with robust security measures from the ground up.

## 5. Voice User Interfaces

Voice search and voice commands are becoming more prevalent, requiring websites to be optimized for voice interactions.

## Conclusion

Staying updated with these trends is crucial for businesses looking to maintain a competitive edge online. At Paraliya Web Solution, we incorporate these latest technologies to deliver cutting-edge solutions for our clients.`,
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

## 2. Mobile Responsiveness

With over 50% of online shopping happening on mobile devices, your e-commerce site must provide an excellent mobile experience.

## 3. Secure Payment Gateway

Security is paramount in e-commerce. Integrate trusted payment gateways like Razorpay, Stripe, or PayPal to ensure secure transactions.

## 4. Product Reviews and Ratings

Customer reviews build trust and help other shoppers make informed decisions. They also improve your SEO rankings.

## 5. Inventory Management

Real-time inventory tracking prevents overselling and helps you manage stock levels effectively.

## 6. Fast Loading Speed

Page speed directly impacts conversion rates. Optimize images, use CDNs, and implement caching to ensure fast loading times.

## Conclusion

These features form the foundation of a successful e-commerce website. At Paraliya Web Solution, we ensure all our e-commerce projects include these essential elements and more.`,
      author: 'Ravi Paraliya',
      publishedAt: '2024-01-10',
      readTime: '4 min read',
      category: 'E-commerce',
      tags: ['E-commerce', 'Features', 'UX', 'Conversion'],
      featured: false,
    },
    {
      id: 'seo-basics-small-business',
      title: 'SEO Basics Every Small Business Should Know',
      excerpt: 'Search Engine Optimization doesn\'t have to be complicated. Learn the fundamental SEO strategies that can help your small business get found online.',
      content: `Search Engine Optimization (SEO) is crucial for small businesses looking to increase their online visibility. While SEO can seem complex, understanding the basics can significantly improve your website's search rankings.

## 1. Keyword Research

Start by identifying the terms your potential customers are searching for. Use tools like Google Keyword Planner or Ubersuggest to find relevant keywords for your business.

## 2. On-Page Optimization

Optimize your website's content, meta titles, descriptions, and headers with your target keywords. Ensure your content is valuable and answers user queries.

## 3. Local SEO

For local businesses, optimizing for local search is essential. Claim your Google My Business listing and ensure your NAP (Name, Address, Phone) information is consistent across all platforms.

## 4. Quality Content Creation

Regularly publish high-quality, relevant content that provides value to your audience. Blog posts, guides, and FAQs can help establish your expertise.

## 5. Technical SEO

Ensure your website loads quickly, is mobile-friendly, and has a clean URL structure. These technical factors significantly impact your search rankings.

## 6. Link Building

Earn backlinks from reputable websites in your industry. Quality backlinks signal to search engines that your content is valuable and trustworthy.

## Conclusion

SEO is a long-term strategy that requires patience and consistency. By focusing on these basics, small businesses can improve their online visibility and attract more customers.`,
      author: 'Shreekant Paraliya',
      publishedAt: '2024-01-05',
      readTime: '6 min read',
      category: 'SEO',
      tags: ['SEO', 'Small Business', 'Marketing', 'Google'],
      featured: false,
    },
    {
      id: 'website-security-best-practices',
      title: 'Website Security Best Practices for 2024',
      excerpt: 'Protect your website and users with these essential security measures. Learn about the latest threats and how to defend against them.',
      content: `Website security is more important than ever in 2024. With cyber attacks becoming increasingly sophisticated, implementing robust security measures is crucial for protecting your business and customers.

## 1. SSL Certificates

Ensure your website uses HTTPS with a valid SSL certificate. This encrypts data transmission between your server and users' browsers.

## 2. Regular Updates

Keep your CMS, plugins, and themes updated. Security patches are regularly released to address vulnerabilities.

## 3. Strong Authentication

Implement two-factor authentication (2FA) for admin accounts and encourage users to use strong, unique passwords.

## 4. Regular Backups

Maintain regular, automated backups of your website. Store backups in multiple locations, including off-site storage.

## 5. Web Application Firewall (WAF)

A WAF helps filter malicious traffic and protect against common attacks like SQL injection and cross-site scripting.

## 6. Security Monitoring

Implement security monitoring tools to detect and respond to threats quickly. Regular security audits can identify potential vulnerabilities.

## 7. User Permissions

Limit user access based on roles and responsibilities. Not everyone needs admin-level access to your website.

## Conclusion

Website security is an ongoing process, not a one-time setup. By implementing these best practices, you can significantly reduce your risk of security breaches.`,
      author: 'Ravi Paraliya',
      publishedAt: '2023-12-28',
      readTime: '7 min read',
      category: 'Security',
      tags: ['Security', 'Best Practices', 'Cybersecurity', 'Protection'],
      featured: false,
    },
  ];

  const categories = ['All', 'Web Development', 'E-commerce', 'SEO', 'Security'];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights in web development
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === 'All' ? 'default' : 'secondary'}
              size="md"
              className="cursor-pointer hover:bg-accent-purple hover:text-white transition-colors duration-200"
            >
              {category}
            </Badge>
          ))}
        </motion.div>

        {/* Featured Post */}
        {blogPosts.find(post => post.featured) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <Badge variant="default" size="lg">Featured Post</Badge>
            </div>
            {(() => {
              const featuredPost = blogPosts.find(post => post.featured)!;
              return (
                <Card variant="elevated" className="overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Content */}
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge variant="default" size="sm">
                          {featuredPost.category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(featuredPost.publishedAt).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 mb-4">
                        {featuredPost.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-accent-purple to-accent-blue rounded-full flex items-center justify-center text-white font-semibold">
                            {featuredPost.author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{featuredPost.author}</div>
                            <div className="text-sm text-gray-500">Author</div>
                          </div>
                        </div>
                        
                        <Link
                          href={`/blog/${featuredPost.id}`}
                          className="inline-flex items-center text-accent-purple hover:text-accent-blue font-semibold transition-colors duration-200 group"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </div>
                    </div>
                    
                    {/* Visual */}
                    <div className="bg-gradient-to-br from-accent-purple/10 to-accent-blue/10 p-8 lg:p-12 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-accent-purple to-accent-blue rounded-3xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-3xl font-bold text-white">
                            {featuredPost.title.charAt(0)}
                          </span>
                        </div>
                        <div className="space-y-2">
                          {featuredPost.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" size="sm" className="mr-2">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })()}
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="elevated" hover className="h-full">
                <div className="p-6 flex flex-col h-full">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="default" size="sm">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500 space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 leading-relaxed flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Author & Date */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  
                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-accent-purple hover:text-accent-blue font-semibold text-sm mt-4 transition-colors duration-200 group"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 group">
            Load More Posts
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogListing;
