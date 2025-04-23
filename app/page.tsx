"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Award,
  FileCheck,
} from "lucide-react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [clientDialogOpen, setClientDialogOpen] = useState(false);

  const sections: Array<keyof typeof sectionRefs> = [
    "home",
    "services",
    "kitchen-quality",
    "additional-services",
    "clients",
    "team",
    "certifications",
    "contact",
  ];
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    "kitchen-quality": useRef<HTMLElement>(null),
    "additional-services": useRef<HTMLElement>(null),
    clients: useRef<HTMLElement>(null),
    team: useRef<HTMLElement>(null),
    certifications: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  // Scrollspy functionality
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = sectionRefs[section].current;
        if (!element) continue;

        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: keyof typeof sectionRefs) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
  };

  // Complete list of clients with proper formatting
  const allClients = [
    {
      id: 1,
      name: "First Steps Baby Wear Pvt. Ltd., Hosur",
      logo: "/first-steps-logo.png",
    },
    {
      id: 2,
      name: "JLK Technologies, ELCOT Campus, Hosur",
      logo: "/jlk-tech-logo.png",
    },
    {
      id: 3,
      name: "AarGee Factory, Hosur",
      logo: "/aargee-logo.png",
    },
    {
      id: 4,
      name: "Hyatech Pvt. Ltd., SIPCOT, Hosur",
      logo: "/hya-tech-logo.jpeg",
    },
    {
      id: 5,
      name: "Sigma CNC Products, SIPCOT, Hosur",
      logo: "/sigmacnc-logo.png",
    },
    {
      id: 6,
      name: "Space Products, SIDCO, Hosur",
      logo: "/spaceproducts-logo.jpeg",
    },
    {
      id: 7,
      name: "Tamilnadu Heat Treatment, SIDCO, Hosur",
      logo: "/tahafet-logo.jpg",
    },
    {
      id: 8,
      name: "Yess Vee Press Component, Plant 3 & 5",
      logo: "/svp-press-logo.jpeg",
    },
    {
      id: 9,
      name: "Mahalaxmi Plastics Pvt. Ltd., SIDCO, Hosur",
      logo: "/placeholder-logo.svg",
    },
    {
      id: 10,
      name: "Espi Power System, Hosur",
      logo: "/placeholder-logo.svg",
    },
    {
      id: 11,
      name: "Thafet, SIPCOT 2, Hosur",
      logo: "/placeholder-logo.svg",
    },
    {
      id: 12,
      name: "Auto Meck, SIPCOT, Hosur",
      logo: "/placeholder-logo.svg",
    },
    {
      id: 13,
      name: "SR Laser, SIPCOT, Hosur",
      logo: "/placeholder-logo.svg",
    },
  ];

  // Featured clients (first 8 for the grid display)
  const featuredClients = allClients.slice(0, 8);

  return (
    <div className="min-h-screen bg-background">
      {/* Use the new Header component */}
      <Header
        showNavigation={true}
        activeSection={activeSection}
        onSectionClick={(section) =>
          scrollToSection(section as keyof typeof sectionRefs)
        }
        sections={sections}
      />

      <main className="pt-16">
        {/* Hero Section */}
        <section
          ref={sectionRefs.home}
          id="home"
          className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden"
        >
          <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <Badge className="px-3 py-1 text-sm" variant="outline">
                Premium Corporate Catering
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="text-primary">Jebha Caterers</span> - Premium
                Food Service
              </h1>
              <p className="text-lg text-muted-foreground">
                We bring the finest South Indian, North Indian, and Chinese
                cuisine to your workplace, ensuring your employees enjoy
                nutritious and delicious meals every day.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection("contact")}>
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("services")}
                >
                  Explore Our Services
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-auto bg-muted rounded-xl overflow-hidden"
            >
              <img src={"/catering.jpg"} />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <p className="text-sm text-muted-foreground mb-2">
              Scroll to explore
            </p>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </motion.div>
        </section>

        {/* Services Section */}
        <section
          ref={sectionRefs.services}
          id="services"
          className="py-20 bg-muted/50"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16 space-y-4"
            >
              <Badge className="px-3 py-1 text-sm">Our Offerings</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Diverse Culinary Experiences
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We specialize in providing a variety of cuisines to satisfy all
                taste preferences in your workplace.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "South Indian",
                  description:
                    "Authentic South Indian delicacies including dosas, idlis, and more, prepared with traditional spices and methods.",
                  image: "/south-food.jpg",
                },
                {
                  title: "North Indian",
                  description:
                    "Rich and flavorful North Indian cuisine featuring paneer dishes, various curries, naan, and biryani.",
                  image: "/north-food.png",
                },
                {
                  title: "Chinese",
                  description:
                    "Delicious Indo-Chinese fusion dishes that are popular among all age groups and perfect for a quick, tasty meal.",
                  image: "/chinese-food.jpg",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden h-full">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Kitchen Quality Section */}
        <section
          ref={sectionRefs["kitchen-quality"]}
          id="kitchen-quality"
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16 space-y-4"
            >
              <Badge className="px-3 py-1 text-sm">Quality Assurance</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Exceptional Kitchen Standards
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We maintain the highest standards of cleanliness and quality in
                our kitchen operations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/kitchen.jpg"
                  alt="Clean Kitchen"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">
                    State-of-the-Art Facilities
                  </h3>
                  <p className="text-muted-foreground">
                    Our kitchen is equipped with modern appliances and follows
                    strict hygiene protocols to ensure the highest quality food
                    preparation.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">
                    Rigorous Cleaning Standards
                  </h3>
                  <p className="text-muted-foreground">
                    We maintain a spotless environment with daily deep cleaning
                    and regular sanitization of all surfaces and equipment.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Quality Ingredients</h3>
                  <p className="text-muted-foreground">
                    We source only the freshest ingredients from trusted
                    suppliers, ensuring that every meal we prepare is nutritious
                    and delicious.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Regular Inspections</h3>
                  <p className="text-muted-foreground">
                    Our facilities undergo regular inspections to maintain
                    compliance with all health and safety regulations.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section
          ref={sectionRefs["additional-services"]}
          id="additional-services"
          className="py-20 bg-muted/50"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16 space-y-4"
            >
              <Badge className="px-3 py-1 text-sm">More Services</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Beyond Corporate Catering
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                In addition to our corporate food services, we offer catering
                for various occasions and events.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Party Orders",
                  description:
                    "Whether it's a birthday, anniversary, or corporate event, we provide delicious catering services for parties of all sizes.",
                  image: "/party-food.jpeg",
                },
                {
                  title: "Bulk Food Orders",
                  description:
                    "Need to feed a large group? Our bulk food ordering service is perfect for events, conferences, and large gatherings.",
                  image: "/bulk-food.jpeg",
                },
                {
                  title: "Custom Menus",
                  description:
                    "We work with you to create custom menus tailored to your specific requirements and dietary preferences.",
                  image: "/custom-order.png",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden h-full">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Link href={"/contact-sales"} prefetch={true}>
                <Button size="lg" variant="outline">
                  Request a Quote
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Clients Section */}
        <section ref={sectionRefs.clients} id="clients" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16 space-y-4"
            >
              <Badge className="px-3 py-1 text-sm">Our Clients</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Trusted by Leading Companies
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We proudly serve some of the most prestigious industries and IT
                companies across the region.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
              {featuredClients.map((client) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: client.id * 0.05 }}
                  viewport={{ once: true }}
                  className="flex justify-center"
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="bg-muted/50 rounded-lg p-6 w-full h-24 flex items-center justify-center cursor-pointer bg-neutral-400">
                          <Image
                            src={client.logo || "/placeholder-logo.svg"}
                            alt={client.name}
                            width={120}
                            height={60}
                            className="max-h-12 w-auto object-contain"
                          />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{client.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => setClientDialogOpen(true)}
              >
                View All Clients
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Client Dialog */}
        <Dialog open={clientDialogOpen} onOpenChange={setClientDialogOpen}>
          <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">
                Our Valued Clients
              </DialogTitle>
              <DialogDescription className="text-center">
                We're proud to serve these esteemed organizations with our
                catering services.
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {allClients.map((client) => (
                <div
                  key={client.id}
                  className="border rounded-lg overflow-hidden flex flex-col"
                >
                  <div className="bg-muted p-4 h-28 flex items-center justify-center bg-neutral-400">
                    <Image
                      src={client.logo || "/placeholder-logo.svg"}
                      alt={client.name}
                      width={120}
                      height={60}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                  <div className="p-4 bg-card flex-grow">
                    <h3 className="font-medium text-center">{client.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        {/* Team Section */}
        <section ref={sectionRefs.team} id="team" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16 space-y-4"
            >
              <Badge className="px-3 py-1 text-sm">Our Team</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Meet Our Culinary Experts
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our team of experienced chefs and staff are dedicated to
                providing you with the best culinary experience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Suresh",
                  role: "Cook (South Indian)",
                  image: "/dp-placeholder.png",
                },
                {
                  name: "Madhavan",
                  role: "Cook (South Indian & Chinese)",
                  image: "/dp-placeholder.png",
                },
                {
                  name: "Sankar Kumar Manna",
                  role: "Cook (North Indian)",
                  image: "/dp-placeholder.png",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden h-full">
                    <div className="h-64 flex items-center justify-center overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-bold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {member.role}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Link href={"/team"} prefetch={true}>
                <Button variant="outline" size="lg">
                  View Full Team
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Certifications Section */}
        <section
          ref={sectionRefs.certifications}
          id="certifications"
          className="py-20 bg-muted/50"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16 space-y-4"
            >
              <Badge className="px-3 py-1 text-sm">Legal Compliance</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Our Certifications
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We maintain the highest standards of quality and compliance with
                all necessary certifications.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "FSSAI Certificate",
                  description:
                    "Food Safety and Standards Authority of India certification ensuring we meet all food safety regulations.",
                  icon: <Award className="h-10 w-10 text-primary" />,
                },
                {
                  title: "UDYAM MSME Certificate",
                  description:
                    "Official recognition as a Micro, Small, and Medium Enterprise by the Government of India.",
                  icon: <FileCheck className="h-10 w-10 text-primary" />,
                },
                {
                  title: "GST Certificate",
                  description:
                    "Goods and Services Tax registration confirming our compliance with tax regulations.",
                  icon: <FileCheck className="h-10 w-10 text-primary" />,
                },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-xl p-6 shadow-sm border"
                >
                  <div className="mb-4">{cert.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground">{cert.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Link href={"/legal"} prefetch={true}>
                <Button
                  variant="outline"
                  size="lg"
                >
                  View Legal Documents
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={sectionRefs.contact} id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16 space-y-4"
            >
              <Badge className="px-3 py-1 text-sm">Get In Touch</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Reach out to us to discuss how we can bring delicious meals to
                your workplace.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <a href="telto:+919876543210" className="underline">
                      +91 987-654-3210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <a
                      href="mailto:contact@jebhacaterers.com"
                      className="underline"
                    >
                      contact@jebhacaterers.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Address</h3>
                    <p className="flex items-center text-gray-600">
                      #401, Veerabhadra Layout, Ballur Road, Bangaluru Urban,
                      Karnataka - 562 107.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="h-[400px] bg-muted rounded-xl overflow-hidden"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.3154866699233!2d77.79087117466105!3d12.758012187538096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae7191fc90e82d%3A0x84e324a35c081f14!2sJEBHA%20CATERERS!5e0!3m2!1sen!2sin!4v1740561703255!5m2!1sen!2sin"
                  width="650"
                  height="320"
                  loading="lazy"
                  className="rounded-xl"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* The footer has been removed and moved to layout.tsx */}
    </div>
  );
}
