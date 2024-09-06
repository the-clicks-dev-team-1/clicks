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

const FormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  job_title: z.string(),
  company_name: z.string(),
  help: z.enum([
    "-- Select an option --",
    "Evaluate The Clicks for my company",
    "Learn more about our services",
    "Get a customized quote",
    "Request a consultation",
    "Other",
  ]),
  services: z.enum([
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
  ]),
  info: z.string(),
});

type FormValues = z.infer<typeof FormSchema>;

export default function ContactServiceForm() {
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
    <Form {...form}>
      {!submitted ? (
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 h-full *border *border-[var(--dark-border-t)] bg-[var(--bgnew)] shadow-lg rounded-3xl p-6 flex flex-col justify-between"
        >
          <div className="md:flex items-center gap-6">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem className="items-center justify-center w-full">
                  <FormLabel className="text-sm bg-clip-text text-[var(--text-label)] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    First name *
                  </FormLabel>
                  <FormControl>
                    <Input {...field} className="text-black border-none" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem className="items-center justify-center w-full">
                  <FormLabel className="text-sm bg-clip-text text-[var(--text-label)] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Last name *
                  </FormLabel>
                  <FormControl>
                    <Input {...field} className="text-black border-none" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="items-center justify-center w-full">
                <FormLabel className="text-sm bg-clip-text text-[var(--text-label)] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                  Email *
                </FormLabel>
                <FormControl>
                  <Input {...field} className="text-black border-none" />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company_name"
            render={({ field }) => (
              <FormItem className="items-center justify-center w-full">
                <FormLabel className="text-sm bg-clip-text text-[var(--text-label)] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                  Company name
                </FormLabel>
                <FormControl>
                  <Input {...field} className="text-black border-none" />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="services"
            render={({ field }) => (
              <FormItem className="items-center justify-center w-full">
                <FormLabel className="text-sm bg-clip-text text-[var(--text-label)] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                  Services you are interested in
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="text-black border-none">
                      <SelectValue
                        placeholder="Select an option"
                        className="text-black border-none"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
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
                <FormLabel className="text-sm bg-clip-text text-[var(--text-label)] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                  How can we help?
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="text-black border-none">
                      <SelectValue
                        placeholder="Select an option"
                        className="text-black border-none"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
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
                <FormLabel className="text-sm bg-clip-text text-[var(--text-label)] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                  Anything else?
                </FormLabel>
                <FormControl>
                  <Textarea
                    style={{ height: "100px" }}
                    className="text-black border-none"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex gap-4 items-center">
            <Checkbox className="outline border-2 text-sm font-light bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400" />
            <div className="text-xs font-light md:w-3/4 mb-1 bg-clip-text text-[var(--text-label)] bg-gradient-to-b from-neutral-50 to-neutral-400">
              I agree to The Clicks sending marketing communications related to
              The Clicks
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              type="submit"
              className="text-sm font-light bg-gradient-to-b from-sky-400 
            to-purple-500 bg-opacity-50"
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
              We&apos;ve received your inquiry and will be contacting you via
              email shortly.
            </div>
          </div>
        </div>
      )}
    </Form>
  );
}
