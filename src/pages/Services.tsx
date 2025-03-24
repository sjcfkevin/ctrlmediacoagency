
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowRight, 
  BarChart, 
  Globe, 
  Lightbulb, 
  TrendingUp, 
  Users, 
  PenTool, 
  Monitor,
  Search,
  MessageSquare,
  Mail
} from 'lucide-react';

const Services = () => {
  // Services data
  const services = [
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      icon: Globe,
      color: "blue",
      description: "Comprehensive digital marketing strategies tailored to your business goals and target audience.",
      features: [
        "Search Engine Marketing (SEM)",
        "Social Media Marketing",
        "Email Marketing Campaigns",
        "Pay-Per-Click Advertising",
        "Content Marketing Strategy",
        "Analytics & Performance Tracking"
      ],
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "brand-strategy",
      title: "Brand Strategy",
      icon: Lightbulb,
      color: "purple",
      description: "Strategic brand development to establish a unique identity that resonates with your target market.",
      features: [
        "Brand Positioning & Messaging",
        "Visual Identity Development",
        "Brand Guidelines Creation",
        "Brand Voice & Personality",
        "Competitive Analysis",
        "Brand Experience Design"
      ],
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "data-analytics",
      title: "Data Analytics",
      icon: BarChart,
      color: "green",
      description: "In-depth data analysis to inform your marketing strategy and drive measurable results.",
      features: [
        "Marketing Performance Analysis",
        "Customer Behavior Insights",
        "ROI Measurement & Reporting",
        "Conversion Optimization",
        "Predictive Analytics",
        "Custom Dashboard Creation"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "social-media",
      title: "Social Media Management",
      icon: Users,
      color: "red",
      description: "Expert social media strategy and management to build community and drive engagement.",
      features: [
        "Platform-Specific Strategies",
        "Content Calendar Development",
        "Community Management",
        "Influencer Partnerships",
        "Paid Social Campaigns",
        "Social Listening & Monitoring"
      ],
      image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "web-development",
      title: "Web Development",
      icon: Monitor,
      color: "amber",
      description: "Custom web design and development services that prioritize user experience and conversion.",
      features: [
        "Responsive Website Design",
        "E-commerce Development",
        "UI/UX Optimization",
        "Landing Page Creation",
        "Website Maintenance",
        "Performance Optimization"
      ],
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "seo-optimization",
      title: "SEO Optimization",
      icon: Search,
      color: "cyan",
      description: "Comprehensive SEO services to improve your search rankings and drive organic traffic.",
      features: [
        "Keyword Research & Strategy",
        "On-Page SEO Optimization",
        "Technical SEO Audit & Fixes",
        "Content Strategy for SEO",
        "Link Building & Authority Development",
        "Local SEO Optimization"
      ],
      image: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
  ];

  // Get color class based on service color
  const getColorClass = (color: string, type: 'bg' | 'text' | 'border' | 'hover') => {
    const colorMap: Record<string, Record<string, string>> = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-600',
        border: 'border-blue-200',
        hover: 'hover:bg-blue-500 hover:text-white'
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        border: 'border-purple-200',
        hover: 'hover:bg-purple-500 hover:text-white'
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-600',
        border: 'border-green-200',
        hover: 'hover:bg-green-500 hover:text-white'
      },
      red: {
        bg: 'bg-red-100',
        text: 'text-red-600',
        border: 'border-red-200',
        hover: 'hover:bg-red-500 hover:text-white'
      },
      amber: {
        bg: 'bg-amber-100',
        text: 'text-amber-600',
        border: 'border-amber-200',
        hover: 'hover:bg-amber-500 hover:text-white'
      },
      cyan: {
        bg: 'bg-cyan-100',
        text: 'text-cyan-600',
        border: 'border-cyan-200',
        hover: 'hover:bg-cyan-500 hover:text-white'
      },
      indigo: {
        bg: 'bg-indigo-100',
        text: 'text-indigo-600',
        border: 'border-indigo-200',
        hover: 'hover:bg-indigo-500 hover:text-white'
      },
      pink: {
        bg: 'bg-pink-100',
        text: 'text-pink-600',
        border: 'border-pink-200',
        hover: 'hover:bg-pink-500 hover:text-white'
      }
    };

    return colorMap[color][type] || '';
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32  bg-[#343131]">
      
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-6">
              Strategic <span className="text-gradient">Marketing Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              We provide a comprehensive range of marketing services to help your business grow and succeed in today's competitive landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              We offer a full spectrum of marketing services designed to help your business thrive in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card 
                key={service.id} 
                className="p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-200 group"
              >
                <div className={`w-14 h-14 rounded-lg ${getColorClass(service.color, 'bg')} flex items-center justify-center mb-6 group-hover:${getColorClass(service.color, 'hover')} transition-colors duration-300`}>
                  <service.icon size={24} className={`${getColorClass(service.color, 'text')} group-hover:text-white transition-colors duration-300`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <a 
                  href={`#${service.id}`}
                  className={`inline-flex items-center ${getColorClass(service.color, 'text')} font-medium hover:underline`}
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-24  bg-[#343131]">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="digital-marketing" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="h-auto flex-wrap p-1">
                {services.map((service) => (
                  <TabsTrigger 
                    key={service.id} 
                    value={service.id}
                    className="px-4 py-3 m-1 data-[state=active]:text-white data-[state=active]:bg-primary"
                  >
                    <service.icon size={16} className="mr-2" />
                    {service.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {services.map((service) => (
              <TabsContent 
                key={service.id} 
                value={service.id} 
                className="mt-0"
                id={service.id}
              >
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                  {/* Content */}
                  <div className="w-full lg:w-1/2 order-2 lg:order-1">
                    <span className={`inline-block py-1 px-3 mb-5 text-sm font-medium rounded-full ${getColorClass(service.color, 'bg')} ${getColorClass(service.color, 'text')}`}>
                      {service.title}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      {service.title} Services
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      {service.description}
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full ${getColorClass(service.color, 'bg')} flex items-center justify-center`}>
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="ml-3 text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button asChild className="neo-button bg-primary hover:bg-primary/90 text-white">
                      <a 
                        href="https://form.typeform.com/to/example" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Get Started
                      </a>
                    </Button>
                  </div>
                  
                  {/* Image */}
                  <div className="w-full lg:w-1/2 order-1 lg:order-2">
                    <div className="relative">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="rounded-lg shadow-xl z-10 relative"
                      />
                      <div className={`absolute -bottom-6 -right-6 w-48 h-48 ${getColorClass(service.color, 'bg')} rounded-full -z-1 opacity-30`}></div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-28 bg-balck">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How We Work</h2>
            <p className="text-lg text-muted-foreground">
              Our structured approach ensures that we deliver consistent, high-quality results for every client.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <Card className="p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Discovery</h3>
              <p className="text-muted-foreground">
                We begin by understanding your business, goals, target audience, and competitive landscape.
              </p>
            </Card>
            
            {/* Step 2 */}
            <Card className="p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Strategy</h3>
              <p className="text-muted-foreground">
                Based on our findings, we develop a comprehensive strategy tailored to your specific objectives.
              </p>
            </Card>
            
            {/* Step 3 */}
            <Card className="p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Execution</h3>
              <p className="text-muted-foreground">
                We implement the strategy with precision, creativity, and attention to every detail.
              </p>
            </Card>
            
            {/* Step 4 */}
            <Card className="p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xl mb-6">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Optimization</h3>
              <p className="text-muted-foreground">
                We continuously monitor, analyze, and refine our approach to maximize results and ROI.
              </p>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
