"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

export default function Team() {
  const teamMembers = [
    {
      name: "Suresh",
      age: 35,
      native: "Shoolagiri, Krishnagiri",
      qualification: "12th Std",
      job: "Cook (South Indian Dish)",
      experience: "15 years in Canteen field",
      skills: "Numerous South Indian Dishes",
      image: "/dp-placeholder.png",
    },
    {
      name: "Madhavan",
      age: 25,
      native: "Nagapattinam",
      qualification: "B. HM (Bachelors in Hotel Management)",
      job: "Cook (South Indian & Chinese)",
      experience: "6 years in Udupi Cafe & Sangeetha Restaurant",
      skills: "Numerous South Indian, Chinese, Tawa, Milk Sweets",
      image: "/dp-placeholder.png",
    },
    {
      name: "Sabari",
      age: 32,
      native: "Krishnagiri",
      qualification: "10th Std",
      job: "Assistant Cook (South Indian)",
      experience: "5 years",
      skills: "",
      image: "/dp-placeholder.png",
    },
    {
      name: "Sankar Kumar Manna",
      age: 36,
      native: "Kolkata",
      qualification: "10th Std",
      job: "Cook (North Indian Dish)",
      experience: "12 years",
      skills: "Rumali Roti & Kulcha",
      image: "/dp-placeholder.png",
    },
    {
      name: "Madhu Dass",
      age: 27,
      native: "Assam",
      job: "Assistant Cook (North Indian Dish)",
      experience: "8 years",
      skills: "",
      image: "/dp-placeholder.png",
    },
    {
      name: "Tip Top Goure",
      age: 20,
      native: "Assam",
      job: "Helper & Service",
      experience: "2 years",
      skills: "",
      image: "/dp-placeholder.png",
    },
    {
      name: "Jeganathan",
      age: 45,
      native: "Bengaluru",
      job: "Driver",
      image: "/dp-placeholder.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header showNavigation={false} />

      <main className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-8 mt-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-3xl font-bold">Our Team</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet our talented team of culinary experts who bring their skills
              and passion to every dish we prepare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden">
                  <div className="relative">
                    <div className="h-64 flex items-center justify-center bg-muted">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="absolute top-4 right-4">
                      {member.experience && (
                        <Badge variant="secondary">{member.experience}</Badge>
                      )}
                    </div>
                  </div>
                  <CardHeader>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <CardDescription>{member.job}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                      <div>
                        <span className="font-medium">Age:</span> {member.age}
                      </div>
                      <div>
                        <span className="font-medium">Native:</span>{" "}
                        {member.native}
                      </div>
                      {member.qualification && (
                        <div className="col-span-2">
                          <span className="font-medium">Qualification:</span>{" "}
                          {member.qualification}
                        </div>
                      )}
                      {member.experience && (
                        <div className="col-span-2">
                          <span className="font-medium">Experience:</span>{" "}
                          {member.experience}
                        </div>
                      )}
                      {member.skills && (
                        <div className="col-span-2">
                          <span className="font-medium">Skills:</span>{" "}
                          {member.skills}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
