import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { TestTube, Pill, Microscope, Phone, Mail, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
            Custom Compounded Medicine<br />Tailored to Your Needs
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            At Bioberx, we specialize in creating personalized pharmaceutical solutions that meet your unique health requirements.
          </p>
          <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            Get Started
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TestTube,
                title: "Custom Formulations",
                description: "Personalized medications tailored to your specific needs and preferences."
              },
              {
                icon: Pill,
                title: "Medication Management",
                description: "Expert guidance on medication interactions and optimization."
              },
              {
                icon: Microscope,
                title: "Quality Testing",
                description: "Rigorous quality control ensuring the highest standards of safety."
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <service.icon className="w-12 h-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">About Bioberx</h2>
              <p className="text-gray-600 mb-4">
                With over 20 years of experience in pharmaceutical compounding, Bioberx has been at the forefront of creating customized medication solutions for patients with specific needs.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of expert pharmacists works closely with healthcare providers to ensure each formulation meets the highest standards of quality and effectiveness.
              </p>
              <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white">
                Learn More
              </Button>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Pharmacist at work"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-gray-900" />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-gray-900" />
                  <span className="text-gray-600">contact@bioberx.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-gray-900" />
                  <span className="text-gray-600">123 Pharmacy Street, Medical District</span>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:border-gray-900 focus:ring-gray-900"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:border-gray-900 focus:ring-gray-900"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md focus:border-gray-900 focus:ring-gray-900"
              ></textarea>
              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;