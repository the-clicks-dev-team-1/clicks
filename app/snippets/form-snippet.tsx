"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { PiCheckLight, PiSmiley } from "react-icons/pi";
import Image from "next/image";

const FormSchema = z.object({
  first_name: z
    .string()
    .min(1, { message: "First name is required" })
    .min(2, { message: "First name must be at least 2 characters long" }),
  last_name: z
    .string()
    .min(1, { message: "Last name is required" })
    .min(2, { message: "Last name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  job_title: z.string().min(1, { message: "Job title is required" }),
  company_name: z.string().optional(),
  help: z
    .enum([
      "-- Select an option --",
      "Evaluate The Clicks for my company",
      "Learn more about our services",
      "Get a customized quote",
      "Request a consultation",
      "Other",
    ])
    .optional(),
  services: z
    .enum([
      "-- Select an option --",
      "Strategy Development",
      "Web Development",
      "SEO",
      "PPC Advertising",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Conversion Rate Optimization",
      "Analytics and Reporting",
      "Marketing Automation",
      "Branding",
      "Public Relations",
      "Graphic Design",
    ])
    .optional(),
  info: z
    .string()
    .min(10, {
      message: "Please provide more information (at least 10 characters)",
    })
    .optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the data collection.",
  }),
});

type FormValues = z.infer<typeof FormSchema>;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      job_title: "",
      company_name: "",
      help: "-- Select an option --",
      services: "-- Select an option --",
      info: "",
      consent: false,
    },
  });

  async function onSubmit(data: FormValues) {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);

      // Добавляем событие в dataLayer после успешной отправки формы
      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({
          event: "customFormSubmit",
          formMessage: "Cообщение об отправке",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="px-4 md:px-10 max-w-7xl mx-auto">
      <div className="py-10 px-4 md:px-16 lg:px-16 my-10 border-[1px] border-[var(--ocean-blue)] rounded-3xl bg-[var(--blue1)] light:bg-[var(--light-blue)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <h2
              className="text-2xl md:text-4xl font-semibold mb-4 dark:text-gradient bg-gradient-to-b from-sky-400 
            to bg-purple-500 bg-opacity-50 bg-clip-text dark:text-transparent text-[var(--gray-70)]"
            >
              Have a questions?
            </h2>
            <h2
              className="text-2xl md:text-4xl font-semibold mb-10 dark:text-gradient bg-gradient-to-b from-sky-400 
            to bg-purple-500 bg-opacity-50 bg-clip-text dark:text-transparent text-[var(--gray-70)]"
            >
              Get in Touch
            </h2>
            <div className="flex-1">
              <p className="text-lg mb-10 text-[var(--gray-blue)] light:text-[var(--gray-70)]">
                We value your feedback, questions, and inquiries. Whether you
                have a suggestion, require assistance, or just want to reach out
                to us, we are always here to provide support and assistance.
              </p>
              <p className="text-lg mb-2 flex gap-3">
                <Image
                  src="/icons/iphone.svg"
                  alt="phone"
                  width={20}
                  height={20}
                  className="h-auto w-auto"
                />
                <a
                  href="tel:+15068718210"
                  className="text-[var(--gray-blue)] light:text-[var(--gray-100)]"
                >
                  +1 506 871 8210
                </a>
              </p>
              <p className="text-lg mb-2 flex gap-3">
                <Image
                  src="/icons/mail.svg"
                  alt="mail"
                  width={20}
                  height={20}
                  className="h-auto w-auto"
                />
                <a
                  href="mailto:info@theclicks.com"
                  className="text-[var(--gray-blue)] light:text-[var(--gray-100)]"
                >
                  info@theclicks.ca
                </a>
              </p>
              <p className="text-lg flex gap-3 text-[var(--gray-blue)] light:text-[var(--gray-100)]">
                <Image
                  src="/icons/map-marker.svg"
                  alt="map-marker"
                  width={20}
                  height={20}
                  className="h-auto w-auto"
                />
                860 Main Street, Moncton
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col justify-between">
            <Form {...form}>
              {!submitted ? (
                <form
                  id="contactServiceForm"
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="contact-form space-y-4 h-full dark:shadow-lg rounded-3xl p-6 flex flex-col justify-between"
                >
                  <div className="md:flex items-center gap-6">
                    <FormField
                      control={form.control}
                      name="first_name"
                      render={({ field }) => (
                        <FormItem className="items-center justify-center w-full">
                          <FormLabel className="text-sm bg-clip-text text-[var(--gray-blue)] light:text-[var(--gray-70)] #bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                            First name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="light:text-black text-[var(--gray-0)] border border-[var(--ocean-blue)] dark:bg-[var(--blue2)]"
                            />
                          </FormControl>
                          {form.formState.errors.first_name && (
                            <p className="text-[var(--error)]">
                              {form.formState.errors.first_name.message}
                            </p>
                          )}
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="last_name"
                      render={({ field }) => (
                        <FormItem className="items-center justify-center w-full">
                          <FormLabel className="text-sm bg-clip-text text-[var(--gray-blue)] light:text-[var(--gray-70)] #bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                            Last name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="light:text-black text-[var(--gray-0)] border border-[var(--ocean-blue)] dark:bg-[var(--blue2)]"
                            />
                          </FormControl>
                          {form.formState.errors.last_name && (
                            <p className="text-[var(--error)]">
                              {form.formState.errors.last_name.message}
                            </p>
                          )}
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="items-center justify-center w-full">
                        <FormLabel className="text-sm bg-clip-text text-[var(--gray-blue)] light:text-[var(--gray-70)] #bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                          Email *
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="light:text-black text-[var(--gray-0)] border border-[var(--ocean-blue)] dark:bg-[var(--blue2)]"
                          />
                        </FormControl>
                        {form.formState.errors.email && (
                          <p className="text-[var(--error)]">
                            {form.formState.errors.email.message}
                          </p>
                        )}
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company_name"
                    render={({ field }) => (
                      <FormItem className="items-center justify-center w-full">
                        <FormLabel className="text-sm bg-clip-text text-[var(--gray-blue)] light:text-[var(--gray-70)] #bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                          Company name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="light:text-black text-[var(--gray-0)] border border-[var(--ocean-blue)] dark:bg-[var(--blue2)]"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="services"
                    render={({ field }) => (
                      <FormItem className="items-center justify-center w-full">
                        <FormLabel className="text-sm bg-clip-text text-[var(--gray-blue)] light:text-[var(--gray-70)] #bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                          Services you are interested in
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="light:text-black text-[var(--gray-blue)] border border-[var(--ocean-blue)] dark:bg-[var(--blue2)]">
                              <SelectValue
                                placeholder="Select an option"
                                className="text-black"
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="light:text-black text-[var(--gray-blue)] border border-[var(--ocean-blue)] dark:bg-[var(--blue2)]">
                            <SelectItem value="-- Select an option --">
                              -- Select an option --
                            </SelectItem>
                            <SelectItem value="Strategy Development">
                              Strategy Development
                            </SelectItem>
                            <SelectItem value="Web Development">
                              Web Development
                            </SelectItem>
                            <SelectItem value="SEO">SEO</SelectItem>
                            <SelectItem value="PPC Advertising">
                              PPC Advertising
                            </SelectItem>
                            <SelectItem value="Social Media Marketing">
                              Social Media Marketing
                            </SelectItem>
                            <SelectItem value="Content Marketing">
                              Content Marketing
                            </SelectItem>
                            <SelectItem value="Email Marketing">
                              Email Marketing
                            </SelectItem>
                            <SelectItem value="Conversion Rate Optimization">
                              Conversion Rate Optimization
                            </SelectItem>
                            <SelectItem value="Analytics and Reporting">
                              Analytics and Reporting
                            </SelectItem>
                            <SelectItem value="Marketing Automation">
                              Marketing Automation
                            </SelectItem>
                            <SelectItem value="Branding">Branding</SelectItem>
                            <SelectItem value="Public Relations">
                              Public Relations
                            </SelectItem>
                            <SelectItem value="Graphic Design">
                              Graphic Design
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="help"
                    render={({ field }) => (
                      <FormItem className="items-center justify-center w-full">
                        <FormLabel className="text-sm bg-clip-text text-[var(--gray-blue)] light:text-[var(--gray-70)] #bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                          How can we help?
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="light:text-black text-[var(--gray-blue)] border border-[var(--ocean-blue)] dark:bg-[var(--blue2)]">
                              <SelectValue
                                placeholder="Select an option"
                                className="light:text-black text-[var(--gray-blue)] placeholder:text-[var(--gray-blue)]"
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="light:text-black text-[var(--gray-blue)] border border-[var(--ocean-blue)] dark:bg-[var(--blue2)]">
                            <SelectItem value="-- Select an option --">
                              -- Select an option --
                            </SelectItem>
                            <SelectItem value="Evaluate The Clicks for my company">
                              Evaluate The Clicks for my company
                            </SelectItem>
                            <SelectItem value="Learn more about our services">
                              Learn More
                            </SelectItem>
                            <SelectItem value="Get a customized quote">
                              Get a Quote
                            </SelectItem>
                            <SelectItem value="Request a consultation">
                              Request a consultation
                            </SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="info"
                    render={({ field }) => (
                      <FormItem className="items-center justify-center w-full">
                        <FormLabel className="text-sm bg-clip-text text-[var(--gray-blue)] light:text-[var(--gray-70)] #bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                          Anything else? *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            style={{ height: "100px" }}
                            className="light:text-black text-[var(--gray-0)] border border-[var(--ocean-blue)] dark:bg-[var(--blue2)]"
                            {...field}
                          />
                        </FormControl>
                        {form.formState.errors.info && (
                          <p className="text-[var(--error)]">
                            {form.formState.errors.info.message}
                          </p>
                        )}
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <div className="flex items-center gap-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value} // Binds the checkbox state to the form field value
                              onCheckedChange={field.onChange} // Updates the form state when the checkbox is toggled
                              className="outline border-2 border-[var(--gray-blue)] text-sm font-light bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400" // Optional styling for the checkbox
                            />
                          </FormControl>
                          <div className="text-xs font-light md:w-3/4 mb-1 bg-clip-text text-[var(--gray-blue)] light:text-[var(--gray-70)] #bg-gradient-to-b from-neutral-50 to-neutral-400">
                            I agree to The Clicks sending marketing
                            communications related to The Clicks
                          </div>
                        </div>
                        {form.formState.errors.consent && (
                          <p className="text-[var(--error)] text-sm">
                            {form.formState.errors.consent.message}
                          </p>
                        )}
                      </FormItem>
                    )}
                  />

                  <div className="flex items-center gap-4">
                    <Button
                      type="submit"
                      className="text-sm font-light #dark:bg-gradient-to-b from-sky-400 
            to-purple-500 bg-opacity-50 bg-[var(--ocean-blue)] hover:bg-[var(--ocean-blue)] light:text-white"
                      disabled={loading}
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="text-xl md:text-2xl flex items-center justify-center flex-col px-8">
                  <div className="w-80 py-8">
                    <PiSmiley className="text-6xl text-[#6c6684] mx-auto" />
                    <div className="text-gray-500 font-light text-center justify-center mx-auto py-10">
                      We&apos;ve received your inquiry and will be contacting
                      you via email shortly.
                    </div>
                  </div>
                </div>
              )}
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
