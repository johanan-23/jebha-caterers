"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Utensils, ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "@/components/Header";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function Legal() {
  const isMobile = useIsMobile();
  const [selected, setSelected] = useState("fssai");

  // Certificate data for easier mapping
  const certificates = [
    {
      value: "fssai",
      label: "FSSAI Certificate",
      description:
        "Food Safety and Standards Authority of India certification ensuring we meet all food safety regulations.",
      src: "/jc-fssai.pdf",
      download: "/fssai-certificate.pdf",
      downloadLabel: "Download Certificate",
      title: "FSSAI Certificate",
    },
    {
      value: "msme",
      label: "UDYAM MSME Certificate",
      description:
        "Official recognition as a Micro, Small, and Medium Enterprise by the Government of India.",
      src: "/jc-udyam.pdf",
      download: "/udyam-msme-certificate.pdf",
      downloadLabel: "Download Certificate",
      title: "UDYAM MSME Certificate",
    },
    {
      value: "gst",
      label: "GST Certificate",
      description:
        "Goods and Services Tax registration confirming our compliance with tax regulations.",
      src: "/jc-gst.pdf",
      download: "/gst-certificate.pdf",
      downloadLabel: "Download Certificate",
      title: "GST Certificate",
    },
  ];

  const current = certificates.find((c) => c.value === selected);

  return (
    <div className="min-h-screen bg-background">
      <Header />
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
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-3xl font-bold">Legal Documents</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              View our certifications and legal documents that ensure we
              maintain the highest standards of quality and compliance.
            </p>
          </div>

          {isMobile ? (
            <div className="mb-8">
              <Select value={selected} onValueChange={setSelected}>
                <SelectTrigger className="mb-6">
                  <SelectValue placeholder="Select certificate" />
                </SelectTrigger>
                <SelectContent>
                  {certificates.map((c) => (
                    <SelectItem key={c.value} value={c.value}>
                      {c.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {current && (
                <Card>
                  <CardHeader>
                    <CardTitle>{current.title}</CardTitle>
                    <CardDescription>{current.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted rounded-lg p-4 h-[600px] relative">
                      <iframe
                        src={current.src}
                        className="w-full h-full rounded border-0"
                        title={current.title}
                      />
                      <Button
                        className="mt-4 absolute bottom-4 right-4"
                        asChild
                      >
                        <a href={current.download} download>
                          {current.downloadLabel}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          ) : (
            <Tabs defaultValue="fssai" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="fssai">FSSAI Certificate</TabsTrigger>
                <TabsTrigger value="msme">UDYAM MSME Certificate</TabsTrigger>
                <TabsTrigger value="gst">GST Certificate</TabsTrigger>
              </TabsList>
              <TabsContent value="fssai">
                <Card>
                  <CardHeader>
                    <CardTitle>FSSAI Certificate</CardTitle>
                    <CardDescription>
                      Food Safety and Standards Authority of India certification
                      ensuring we meet all food safety regulations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted rounded-lg p-4 h-[600px] relative">
                      <iframe
                        src="/jc-fssai.pdf"
                        className="w-full h-full rounded border-0"
                        title="FSSAI Certificate"
                      />
                      <Button
                        className="mt-4 absolute bottom-4 right-4"
                        asChild
                      >
                        <a href="/fssai-certificate.pdf" download>
                          Download Certificate
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="msme">
                <Card>
                  <CardHeader>
                    <CardTitle>UDYAM MSME Certificate</CardTitle>
                    <CardDescription>
                      Official recognition as a Micro, Small, and Medium
                      Enterprise by the Government of India.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted rounded-lg p-4 h-[600px] relative">
                      <iframe
                        src="/jc-udyam.pdf"
                        className="w-full h-full rounded border-0"
                        title="UDYAM MSME Certificate"
                      />
                      <Button
                        className="mt-4 absolute bottom-4 right-4"
                        asChild
                      >
                        <a href="/udyam-msme-certificate.pdf" download>
                          Download Certificate
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="gst">
                <Card>
                  <CardHeader>
                    <CardTitle>GST Certificate</CardTitle>
                    <CardDescription>
                      Goods and Services Tax registration confirming our
                      compliance with tax regulations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted rounded-lg p-4 h-[600px] relative">
                      <iframe
                        src="/jc-gst.pdf"
                        className="w-full h-full rounded border-0"
                        title="GST Certificate"
                      />
                      <Button
                        className="mt-4 absolute bottom-4 right-4"
                        asChild
                      >
                        <a href="/gst-certificate.pdf" download>
                          Download Certificate
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </motion.div>
      </main>
    </div>
  );
}
