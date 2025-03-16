import React from "react";
import Layout from "../layout";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <Layout>
      <div className="w-full py-16 bg-[#111]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-amber-600 text-transparent bg-clip-text">
              Contact Us
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We're here to answer any questions you may have about our services
              or to help you book an appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-[#181818] p-8 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium text-gray-300"
                    >
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      className="bg-[#222] border-gray-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium text-gray-300"
                    >
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      className="bg-[#222] border-gray-700 text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-300"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-[#222] border-gray-700 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-300"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    placeholder="Enter your phone number"
                    className="bg-[#222] border-gray-700 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-300"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What is your inquiry about?"
                    className="bg-[#222] border-gray-700 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your inquiry"
                    rows={5}
                    className="bg-[#222] border-gray-700 text-white"
                  />
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-[#181818] p-8 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-amber-500 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-white">Address</h3>
                      <p className="text-gray-300">
                        123 Harley Street, London, W1G 6AB
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-amber-500 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-white">Phone</h3>
                      <p className="text-gray-300">+44 (0)20 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-amber-500 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-white">Email</h3>
                      <p className="text-gray-300">info@londonaesthetics.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-amber-500 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-white">Opening Hours</h3>
                      <p className="text-gray-300">
                        Monday - Friday: 9am - 7pm
                      </p>
                      <p className="text-gray-300">Saturday: 10am - 5pm</p>
                      <p className="text-gray-300">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#181818] p-8 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Book an Appointment
                </h2>
                <p className="text-gray-300 mb-6">
                  Ready to enhance your natural beauty? Book an appointment with
                  one of our expert practitioners today.
                </p>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 h-[400px] rounded-lg overflow-hidden">
            <div className="w-full h-full bg-[#181818] flex items-center justify-center border border-gray-800">
              <p className="text-gray-400">Map would be embedded here</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
