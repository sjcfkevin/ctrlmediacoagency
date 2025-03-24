
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
// import {AutoCarousel} from '@/components/ui/auto-carousel';
import {
  ArrowRight,
  BarChart,
  Globe,
  Lightbulb,
  TrendingUp,
  Users,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Index = () => {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Working with this agency transformed our digital presence. Their strategic approach led to a 200% increase in qualified leads within just 3 months.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director, GrowthCo",
      content: "The team's creativity and attention to detail exceeded our expectations. They delivered a brand strategy that perfectly captured our vision and values.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder, Artisan Collective",
      content: "From concept to execution, they guided us with expertise and professionalism. Our new website has received countless compliments and dramatically improved user engagement.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  // Testimonial slider controls
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Partner logos
  const partnerLogos = [
    "./companys/1.webp",
    "./companys/2.webp",
    "./companys/3.webp",
    "./companys/4.webp",
    "./companys/5.webp",
  ];

  return (
    <div className="w-full">

      {/* Hero Section */}
      <section className="py-28 bg-[#343131]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Image */}
            <div className="w-full lg:w-3/5 relative sm:pb-8">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="./pics/6.png"
                  alt="Our team collaborating"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            {/* Content */}
            <div className="w-full lg:w-3/5 md:pt-8 text-center">
              <h2 className="text-5xl font-bold mb-6">Elevating brands through data-driven marketing solutions</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Focused on creating effective campaigns that engage audiences, deliver tangible outcomes, and inspire lasting growth.
              </p>
              <Button asChild className="mt-8 neo-button bg-primary hover:bg-primary/90 text-white">
                <a
                  href="https://form.typeform.com/to/vWMRO2JS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8"
                >
                  Apply Now
                </a>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Mark Section */}
      <section className="relative flex items-center justify-center px-4 py-24">
        <div className="container mx-auto text-center max-7-5xl">
          <div className="container mx-auto px-4">
            <h3 className="text-center text-lg text-muted-foreground mb-10">
              Join the many brands we've supported in achieving consistent growth
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {partnerLogos.map((logo, index) => (
                <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                  <img src={logo} alt={`Partner ${index + 1}`} className="w-[150px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connect with real people Section*/}
      <section className="py-28 bg-[#343131]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block py-1 px-3 mb-5 text-sm font-medium rounded-full bg-blue-50 text-blue-600">
              Connect with real people
            </span>
            <h2 className="text-5xl font-bold mb-4">All the tools you need to grow your brand</h2>
            <p className="text-lg text-muted-foreground">
              From strategy to analytics, we offer everything you need to boost engagement, drive conversions, and expand your brand's reach.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {/* Service 1 */}
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-200 group">
              <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <Globe size={24} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tiktok Ads</h3>
              <p className="text-muted-foreground mb-4">
               Harness TikTok’s advanced algorithm to connect with an active audience through imaginative, short-form video ads that grab attention and boost conversions.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors"
              >
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </Card>



            {/* Service 2 */}
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-200 group">
              <div className="w-14 h-14 rounded-lg bg-purple-100 flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors duration-300">
                <Lightbulb size={24} className="text-purple-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">Facebook Campaigns</h3>
              <p className="text-muted-foreground mb-4">
                Create targeted campaigns on Facebook that connect with the right audience, increasing engagement and driving measurable results for your brand.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center text-purple-600 font-medium group-hover:text-purple-700 transition-colors"
              >
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </Card>

            {/* Service 3 */}
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-200 group">
              <div className="w-14 h-14 rounded-lg bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors duration-300">
                <BarChart size={24} className="text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">Email and SMS</h3>
              <p className="text-muted-foreground mb-4">
                Reach your audience directly through personalized email and SMS campaigns that drive engagement, increase conversions, and nurture customer relationships.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center text-green-600 font-medium group-hover:text-green-700 transition-colors"
              >
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </Card>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-28">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 mb-5 text-sm font-medium rounded-full bg-blue-50 text-blue-600">
              Everything you need
            </span>
            <h2 className="text-5xl font-bold mb-4">Authentic, long-term growth</h2>
            <p className="text-lg text-muted-foreground">
              Unleash your brand’s full potential with tailored strategies that drive sustainable growth. From increasing engagement to improving ROI, we deliver the insights and solutions you need to help you succeed.
            </p>
          </div>

          <div className="text-center max-w-4xl mx-auto mb-8 py-12">
            <h2 className="text-4xl font-bold mb-4 py-4">Generating an extra $39k in revenue? That's our specialty!</h2>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img
                src="./pics/5.png"
                alt="Our team collaborating"
                className="lg:max-w-3xl w-full h-auto object-cover mx-auto"
              />
            </div>
          </div>

          <div className="text-center max-w-7xl mx-auto mb-2 py-4">
            <h2 className="text-4xl font-bold mb-4 py-4">Extraordinary results for our client!</h2>
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              {/* Image */}
              <div className="w-full lg:w-1/2 relative">
                <img
                  src="./pics/4.png"
                  alt="Our team collaborating"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Image */}
              <div className="w-full lg:w-1/2 relative">
                <img
                  src="./pics/2.png"
                  alt="Our team collaborating"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto py-12">
            <h2 className="text-4xl font-bold mb-4 py-4">Maintaining a 5.80x ROAS in the span of a month…</h2>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img
                src="./pics/3.png"
                alt="Our team collaborating"
                className="lg:max-w-3xl w-full h-auto object-cover mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-white bg-[#343131] py-28">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Get in touch today to learn how we can help you achieve your marketing goals and take your business to the next level.
          </p>
          <Button asChild size="lg" className="neo-button bg-white text-primary hover:bg-white/90">
            <a
              href="https://form.typeform.com/to/vWMRO2JS"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 text-base"
            >
              Apply Now
            </a>
          </Button>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="py-24 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted by over 100 reputable brands worldwide</h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            We've worked with numerous brands to help them achieve their goals, generating over $3,500,000 in revenue.
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center px-4 py-28 bg-[#343131]">
        <div className="container mx-auto text-center max-w-7xl">
          <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold mb-6 tracking-tight">
            Empower Your Brand.</h1>
          <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold mb-6 tracking-tight">Achieve Sustainable Growth with Data-Driven Strategies.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Unlock the full potential of your brand with data-driven insights and powerful tools designed to streamline your marketing efforts. Whether you’re growing your audience or driving conversions, we have everything you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="neo-button bg-primary hover:bg-primary/90 text-white text-base">
              <a
                href="https://form.typeform.com/to/vWMRO2JS"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8"
              >
                Apply Now
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/services" className="flex items-center text-base">
                Learn more
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative flex items-center justify-center px-4 py-28">
        <div className="container mx-auto text-center max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">$3.5M+</h3>
              <p className="text-muted-foreground">Revenue generated for clients</p>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">1,000+</h3>
              <p className="text-muted-foreground">Ad campaigns managed</p>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">100+</h3>
              <p className="text-muted-foreground">Brands partnered</p>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">4x+</h3>
              <p className="text-muted-foreground">ROAS average</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Index;
