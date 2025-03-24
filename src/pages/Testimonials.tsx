
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Julia Rogers",
      role: "Co-Founder, Kingdom Building",
      content: "Working with this agency transformed our digital presence. Their strategic approach led to a 200% increase in qualified leads within just 3 months.",
      image: "./people/1.jpeg"
    },
    {
      id: 2,
      name: "Emily Rodriguez",
      role: "Marketing Director, Somedays",
      content: "The team's creativity and attention to detail exceeded our expectations. They delivered a brand strategy that perfectly captured our vision and values.",
      image: "./people/2.jpeg"
    },
    {
      id: 3,
      name: "Michael Chen ",
      role: "Founder, Kingdom Building",
      content: "From concept to execution, they guided us with expertise and professionalism. Our new website has received countless compliments and dramatically improved user engagement.",
      image: "./people/3.jpeg"
    }
  ];

  // Testimonial slider controls
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragging, setDragging] = useState(false);

  const sliderRef = useRef(null);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  //Handle swipe/drag start
  const handleDragStart = (e) => {
    setDragging(true);
    setDragStartX(e.type.includes("touch") ? e.touches[0].clientX : e.clientX);
  };

  //Handle drag move
  const handleDragMove = (e) => {
    if (!dragging) return;

    const currentX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
    const difference = dragStartX - currentX;

    // if the swipe is long enough,switch slides
    if (difference > 50) {
      nextTestimonial();
      setDragging(false)
    } else if (difference < -50) {
      prevTestimonial();
      setDragging(false);
    }
  }

  //handle drag end
  const handleDragEnd = () => {
    setDragging(false);
  }

  // Partner logos
  const partnerLogos = [
    "./people/1.jpeg",
    "./people/2.jpeg",
    "./people/3.jpeg",
    "./people/4.jpeg",
    "./people/5.jpeg",
  ];
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-28 bg-[#343131]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              What Our <span className="text-gradient">Clients Say</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Don't just take our word for it. Hear directly from our clients about their experiences working with us.
            </p>
          </div>
        </div>
      </section>


      {/* Featured Testimonial */}
      <section className="py-24 ">
        <div className="relative max-w-4xl mx-auto ">
          <div className="overflow-hidden"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            style={{userSelect : dragging ? "none" : "auto"}}
            >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <Card className="p-8 md:p-12 text-center border border-gray-200">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-md">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-lg md:text-xl italic text-muted-foreground mb-6">
                      "{testimonial.content}"
                    </p>
                    <h4 className="text-xl font-bold">{testimonial.name}</h4>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-5 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-gray-50 transition-colors hidden md:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-5 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-gray-50 transition-colors hidden md:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${activeTestimonial === index ? 'bg-primary' : 'bg-gray-300'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
