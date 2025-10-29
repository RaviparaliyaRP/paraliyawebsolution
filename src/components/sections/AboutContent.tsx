'use client';

import { motion } from 'framer-motion';
import { Users, Eye, Zap, Headphones, Linkedin, Github, Mail } from 'lucide-react';
import Image from 'next/image';
import Card from '@/components/ui/Card';
import CredentialsSection from '@/components/sections/CredentialsSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import TechnologyStack from '@/components/sections/TechnologyStack';

const AboutContent = () => {
  const reasons = [
    {
      icon: Users,
      title: 'Client-Focused Approach',
      description: 'Your success is our success. We take time to understand your business goals, target audience, and unique challenges. Every solution we create is tailored to your specific needs, not a one-size-fits-all template.',
    },
    {
      icon: Eye,
      title: 'Transparent Process',
      description: 'No hidden costs or surprises. From initial consultation to final launch, we maintain clear communication. You\'ll know exactly what to expect, when to expect it, and what you\'re paying for. Regular updates keep you in the loop throughout the project.',
    },
    {
      icon: Zap,
      title: 'Modern Technology',
      description: 'We stay updated with the latest web technologies and industry best practices. Your website will be built with modern frameworks that ensure fast loading times, robust security, and scalability for future growth.',
    },
    {
      icon: Headphones,
      title: 'Ongoing Support',
      description: 'Our relationship doesn\'t end at launch. We provide comprehensive documentation, training, and ongoing support to ensure your website continues to perform optimally. Need updates? We\'re just a call away.',
    },
  ];

  const team = [
    {
      name: 'Ravi Paraliya',
      role: 'Founder & Lead Developer',
      bio: 'Full-stack developer with expertise in modern web technologies. Passionate about creating efficient, user-friendly solutions that help businesses grow.',
      avatar: 'RP',
      image: '/images/team/ravi.jpg',
      social: {
        linkedin: 'https://www.linkedin.com/in/raviparaliyarp',
        github: '#',
        email: 'paraliyaravi80@gmail.com',
      },
    },
    {
      name: 'Shreekant Paraliya',
      role: 'UI/UX Designer',
      bio: 'Creative designer focused on crafting intuitive and visually appealing user experiences. Skilled in translating ideas into seamless interfaces that balance aesthetics and functionality.',
      avatar: 'SP',
      image: '/images/team/shreekant.jpg',
      social: {
        linkedin: '#',
        github: '#',
        email: '#',
      },
    },
  ];

  return (
    <div className="space-y-20 lg:space-y-24">
      {/* Company Story */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
                Building Digital Solutions Since 2022
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Paraliya Web Solution was founded with a simple mission: help businesses thrive online 
                  with affordable, high-quality web solutions.
                </p>
                <p>
                  We're a team of passionate developers, designers, and digital strategists based in Ahmedabad. 
                  We believe every business deserves a powerful online presence, regardless of size or budget.
                </p>
                <p>
                  Our approach combines technical excellence with business understanding. We don't just build 
                  websites – we create digital assets that drive real results for our clients.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple via-accent-blue to-purple-600 rounded-3xl transform rotate-3 opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue via-accent-purple to-blue-600 rounded-3xl transform -rotate-3 opacity-30"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-accent-purple to-accent-blue rounded-3xl flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      <span className="text-2xl font-bold">PWS</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Since 2022</h3>
                    <p className="text-white/80">Building Digital Excellence</p>
                    <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-2xl font-bold">50+</div>
                        <div className="text-white/80">Projects</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">100%</div>
                        <div className="text-white/80">Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're more than just developers — we're your digital partners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card variant="elevated" hover className="p-8 h-full">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-purple to-accent-blue rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                          {reason.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <ComparisonSection />

      {/* Credentials & Recognition Section */}
      <CredentialsSection />

      {/* Team Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The people behind your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="elevated" hover className="p-8 text-center">
                  {/* Profile Photo */}
                  <div className="w-24 h-24 mx-auto mb-6 relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover rounded-full border-4 border-gray-100 shadow-lg"
                    />
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent-purple font-medium mb-4">
                    {member.role}
                  </p>

                  {/* Bio */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    {member.social.linkedin !== '#' && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-accent-purple hover:text-white transition-colors duration-200"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.github !== '#' && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-accent-purple hover:text-white transition-colors duration-200"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.email !== '#' && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-accent-purple hover:text-white transition-colors duration-200"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <TechnologyStack />
    </div>
  );
};

export default AboutContent;
