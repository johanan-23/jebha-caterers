"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import Header from "@/components/Header"

export default function ContactSales() {
  const [inquiryType, setInquiryType] = useState("corporate")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    setSubmitted(true)
  }

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

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto text-center py-12"
          >
            <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Send className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
            <p className="text-muted-foreground mb-6">
              Your inquiry has been submitted successfully. We will get back to you shortly.
            </p>
            <Button asChild>
              <Link href="/">Return to Homepage</Link>
            </Button>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Sales</CardTitle>
                <CardDescription>
                  Fill out the form below to inquire about our services. We'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="inquiry-type">Inquiry Type</Label>
                      <Select defaultValue={inquiryType} onValueChange={(value) => setInquiryType(value)}>
                        <SelectTrigger id="inquiry-type">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="corporate">Corporate Catering</SelectItem>
                          <SelectItem value="party">Party Order</SelectItem>
                          <SelectItem value="bulk">Bulk Food Order</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Your email" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="Your phone number" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">
                          {inquiryType === "corporate" ? "Company Name" : "Organization Name"}
                        </Label>
                        <Input
                          id="company"
                          placeholder={inquiryType === "corporate" ? "Your company name" : "Your organization name"}
                          required
                        />
                      </div>
                    </div>

                    {inquiryType === "corporate" && (
                      <div className="space-y-2">
                        <Label>Meal Service Required</Label>
                        <RadioGroup defaultValue="lunch" className="flex flex-col space-y-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="breakfast" id="breakfast" />
                            <Label htmlFor="breakfast">Breakfast</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="lunch" id="lunch" />
                            <Label htmlFor="lunch">Lunch</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="dinner" id="dinner" />
                            <Label htmlFor="dinner">Dinner</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="multiple" id="multiple" />
                            <Label htmlFor="multiple">Multiple Meals</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    )}

                    {inquiryType === "party" && (
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="event-date">Event Date</Label>
                          <Input id="event-date" type="date" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="guests">Number of Guests</Label>
                          <Input id="guests" type="number" min="1" placeholder="Estimated number of guests" required />
                        </div>
                      </div>
                    )}

                    {inquiryType === "bulk" && (
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="delivery-date">Delivery Date</Label>
                          <Input id="delivery-date" type="date" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="quantity">Quantity</Label>
                          <Input id="quantity" type="number" min="1" placeholder="Number of meals" required />
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="cuisine-preference">Cuisine Preference</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="south-indian" />
                          <Label htmlFor="south-indian" className="text-sm">
                            South Indian
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="north-indian" />
                          <Label htmlFor="north-indian" className="text-sm">
                            North Indian
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="chinese" />
                          <Label htmlFor="chinese" className="text-sm">
                            Chinese
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="mixed" />
                          <Label htmlFor="mixed" className="text-sm">
                            Mixed Cuisine
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide any additional details about your requirements"
                        rows={5}
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the{" "}
                      <Link href="/legal" className="text-primary hover:underline">
                        terms and conditions
                      </Link>
                    </Label>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" onClick={handleSubmit}>
                  Submit Inquiry
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </main>
    </div>
  )
}
