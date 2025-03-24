
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

const Contact = () => {
  // References for intersection observer
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  // Animation on scroll
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-[#343131]">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              We'd love to hear from you. Reach out to discuss how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section 
        ref={el => sectionsRef.current[0] = el} 
        className="py-24 bg-gray-50 bg-black" 
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Email */}
            <Card className="p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <Mail className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Email</h3>
              <p className="text-muted-foreground mb-4">
                For general inquiries or project discussions:
              </p>
              <a href="mailto:info@agency.com" className="text-blue-600 hover:underline">
                info@agency.com
              </a>
            </Card>
            
            {/* Phone */}
            <Card className="p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors duration-300">
                <Phone className="text-green-600 group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Phone</h3>
              <p className="text-muted-foreground mb-4">
                Let's talk directly:
              </p>
              <a href="tel:+11234567890" className="text-green-600 hover:underline">
                +1 (123) 456-7890
              </a>
            </Card>
            
            {/* Office */}
            <Card className="p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors duration-300">
                <MapPin className="text-purple-600 group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Visit Us</h3>
              <p className="text-muted-foreground mb-4">
                123 Marketing Street,
                <br />New York, NY 10001
              </p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                Get Directions
              </a>
            </Card>
            
            {/* Hours */}
            <Card className="p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                <Clock className="text-amber-600 group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Business Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday
                <br />9:00 AM - 6:00 PM
              </p>
              <p className="text-muted-foreground mt-2">
                Saturday - Sunday
                <br />Closed
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section 
        ref={el => sectionsRef.current[1] = el} 
        className="py-24 bg-[#343131]" 
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Form */}
            <div className="w-full lg:w-1/2">
              <div className="max-w-md mx-auto lg:mr-0">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below, and we'll get back to you as soon as possible.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full p-3 border border-gray-300 rounded-md"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full p-3 border border-gray-300 rounded-md"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(123) 456-7890"
                        className="w-full p-3 border border-gray-300 rounded-md"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="w-full p-3 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full p-3 border border-gray-300 rounded-md h-32"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="neo-button w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send size={18} className="mr-2" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Map */}
            <div className="w-full lg:w-1/2">
              <div className="h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1644262312968!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Office Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section 
        ref={el => sectionsRef.current[2] = el} 
        className="py-24 bg-gray-50 bg-black" 
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-black font-bold mb-6 text-white">Connect With Us</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Follow us on social media to stay updated with our latest projects, insights, and company news.
          </p>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            
            <a 
              href="#" 
              className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1DA1F2] text-white transition-transform hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            
            <a 
              href="#" 
              className="w-14 h-14 flex items-center justify-center rounded-full bg-[#E4405F] text-white transition-transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            
            <a 
              href="#" 
              className="w-14 h-14 flex items-center justify-center rounded-full bg-[#0A66C2] text-white transition-transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
