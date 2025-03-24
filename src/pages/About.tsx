
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "CEO & Founder",
      bio: "Alex has over 15 years of experience in digital marketing and brand strategy, helping businesses of all sizes achieve their growth objectives.",
      image: "./darko.jpeg"
    },
    {
      name: "Sophia Williams",
      role: "Creative Director",
      bio: "With a background in design and advertising, Sophia leads our creative team in developing compelling visual identities and marketing materials.",
      image: "./darko.jpeg"
    },
    {
      name: "Daniel Martinez",
      role: "Marketing Strategist",
      bio: "Daniel specializes in developing comprehensive marketing strategies that drive results. His analytical approach ensures optimal ROI for all campaigns.",
      image: "./darko.jpeg"
    },
    {
      name: "Emma Chen",
      role: "Digital Content Manager",
      bio: "Emma oversees our content creation and distribution, ensuring that every piece of content serves strategic objectives while engaging target audiences.",
      image: "./darko.jpeg"
    }
  ];

  // Company values
  const values = [
    {
      title: "Excellence",
      description: "We're committed to delivering the highest quality work in everything we do, exceeding expectations and setting new standards."
    },
    {
      title: "Innovation",
      description: "We continuously explore new approaches, technologies, and ideas to provide innovative solutions that drive real results."
    },
    {
      title: "Integrity",
      description: "We build relationships on trust, honesty, and transparency, ensuring our clients receive ethical and truthful counsel."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork, both internally and with our clients, to create truly remarkable outcomes."
    },
    {
      title: "Results-Driven",
      description: "We focus on measurable results and tangible outcomes that contribute directly to our clients' business objectives."
    },
    {
      title: "Adaptability",
      description: "We embrace change and remain flexible, allowing us to quickly respond to new challenges and opportunities."
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-[#343131]"> 
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              We're a Team of <span className="text-gradient">Creative Strategists</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              We combine strategic thinking with creative execution to deliver marketing solutions that drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">            
            {/* Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">The Journey of Our Agency</h2>
              <div className="space-y-4">
                <p>
                  Founded in 2024, our agency began with a simple mission: to provide businesses with marketing strategies that truly work in the digital age.
                </p>
                <p>
                  What started as a small team of four passionate marketers has grown into a full-service agency with specialists across digital marketing, brand strategy, web development, and content creation.
                </p>
                <p>
                  Throughout our journey, we've maintained our core principle of putting client success at the center of everything we do. We measure our success by the results we generate for our clients, not by awards or recognition.
                </p>
                <p>
                  Today, we're proud to have helped hundreds of businesses across various industries achieve their growth objectives through strategic, creative, and data-driven marketing solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24  bg-[#343131]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8 md:p-12 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                To empower businesses with innovative marketing solutions that drive sustainable growth and meaningful connections with their audiences.
              </p>
              <p className="text-muted-foreground">
                We're dedicated to delivering measurable results through strategic thinking, creative excellence, and data-driven decision making.
              </p>
            </Card>
            
            <Card className="p-8 md:p-12 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-purple-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground mb-4">
                To be the leading marketing agency known for transforming how businesses connect with their audiences through innovation and strategic excellence.
              </p>
              <p className="text-muted-foreground">
                We envision a world where every business, regardless of size, has access to marketing strategies that truly unlock their potential.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 text-text">Core Principles That Guide Us</h2>
            <p className="text-lg text-muted-foreground">
              These fundamental values shape our culture, drive our decisions, and define how we work with our clients and each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
