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
import { useTranslations } from "next-intl";

const FormSchema = z.object({
  first_name: z
    .string()
    .min(1, { message: "validations.firstNameRequired" })
    .min(2, { message: "validations.firstNameMin" }),
  last_name: z
    .string()
    .min(1, { message: "validations.lastNameRequired" })
    .min(2, { message: "validations.lastNameMin" }),
  email: z.string().email({ message: "validations.email" }),
  job_title: z.string().min(1, { message: "validations.jobRequired" }),
  company_name: z.string().optional(),
  help: z
    .enum([
      "help.default",
      "help.evaluate",
      "help.learnMore",
      "help.quote",
      "help.consultation",
      "help.other",
    ])
    .optional(),
  services: z
    .enum([
      "services.default",
      "services.strategy",
      "services.web",
      "services.seo",
      "services.ppc",
      "services.social",
      "services.content",
      "services.email",
      "services.conversion",
      "services.analytics",
      "services.automation",
      "services.branding",
      "services.pr",
      "services.design",
    ])
    .optional(),
  info: z
    .string()
    .min(10, {
      message: "validations.minInfo",
    })
    .optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "validations.consent",
  }),
});

type FormValues = z.infer<typeof FormSchema>;

type ContactFormProps = {
  consultation?: string;
};

export default function ContactForm({ consultation }: ContactFormProps) {
  const t = useTranslations("contactForm");
  const f = useTranslations("fields");

  const helpOptions = [
    { value: "help.default", label: t("help.default") },
    { value: "help.evaluate", label: t("help.evaluate") },
    { value: "help.learnMore", label: t("help.learnMore") },
    { value: "help.quote", label: t("help.quote") },
    { value: "help.consultation", label: t("help.consultation") },
    { value: "help.other", label: t("help.other") },
  ];

  const serviceOptions = [
    { value: "services.default", label: t("services.default") },
    { value: "services.strategy", label: t("services.strategy") },
    { value: "services.web", label: t("services.web") },
    { value: "services.seo", label: t("services.seo") },
    { value: "services.ppc", label: t("services.ppc") },
    { value: "services.social", label: t("services.social") },
    { value: "services.content", label: t("services.content") },
    { value: "services.email", label: t("services.email") },
    { value: "services.conversion", label: t("services.conversion") },
    { value: "services.analytics", label: t("services.analytics") },
    { value: "services.automation", label: t("services.automation") },
    { value: "services.branding", label: t("services.branding") },
    { value: "services.pr", label: t("services.pr") },
    { value: "services.design", label: t("services.design") },
  ];

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
      help: "help.default",
      services: "services.default",
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
      <div className="py-10 px-4 md:px-16 lg:px-16 mb-20 md:mb-32 border-[1px] border-[var(--ocean-blue)] rounded-3xl bg-[var(--blue1)] light:bg-[var(--light-blue)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <h2
              className="text-2xl md:text-4xl font-semibold mb-6 dark:text-gradient bg-gradient-to-b from-sky-400 
            to bg-purple-500 bg-opacity-50 bg-clip-text dark:text-transparent text-[var(--gray-70)]"
            >
              {t("questions")}
            </h2>

            {consultation ? (
              <h2 className="text-2xl md:text-3xl mb-10 text-[var(--ocean-blue)] font-light">
                {consultation}
              </h2>
            ) : (
              <h2
                className="text-2xl md:text-4xl font-semibold mb-10 dark:text-gradient bg-gradient-to-b from-sky-400 
            to bg-purple-500 bg-opacity-50 bg-clip-text dark:text-transparent text-[var(--gray-70)]"
              >
                {t("getInTouch")}
              </h2>
            )}
            <div className="flex-1">
              {/* <p className="text-lg mb-10 text-[var(--gray-blue)] light:text-[var(--gray-70)]">
                {t("description")}
              </p> */}
              <p className="text-lg mb-2 flex gap-3">
                <Image
                  src="/icons/iphone.svg"
                  alt="phone"
                  width={20}
                  height={20}
                  className="h-auto w-auto"
                />
                <a
                  href="tel:+15068895740"
                  className="text-[var(--gray-blue)] light:text-[var(--gray-100)]"
                >
                  {t("contact.phone")}
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
                  {t("contact.email")}
                </a>
              </p>
              <p className=" max-w-[380px] text-lg flex gap-3 text-[var(--gray-blue)] light:text-[var(--gray-100)]">
                <Image
                  src="/icons/map-marker.svg"
                  alt="map-marker"
                  width={20}
                  height={20}
                  className="h-auto w-auto"
                />
                {t("contact.address")}
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
                  className="contact-form space-y-4 h-full rounded-3xl #p-6 flex flex-col justify-between"
                >
                  {/* <div className="md:flex items-center gap-6">
                    <FormField
                      control={form.control}
                      name="first_name"
                      render={({ field }) => (
                        <FormItem className="items-center justify-center w-full">
                          <FormLabel className="text-sm bg-clip-text text-[var(--gray-blue)] light:text-[var(--gray-70)] #bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                            {f("firstName")} *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="light:text-black text-[var(--gray-0)] border border-[var(--ocean-blue)] dark:bg-[var(--blue2)]"
                            />
                          </FormControl>
                          {form.formState.errors.first_name && (
                            <p className="text-[var(--error)] text-xs">
                              {f(`${form.formState.errors.first_name.message}`)}
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
                            {f("lastName")} *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="light:text-black text-[var(--gray-0)] border border-[var(--ocean-blue)] dark:bg-[var(--blue2)]"
                            />
                          </FormControl>
                          {form.formState.errors.last_name && (
                            <p className="text-[var(--error)] text-xs">
                              {f(`${form.formState.errors.last_name.message}`)}
                            </p>
                          )}
                        </FormItem>
                      )}
                    />
                  </div> */}

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="items-center justify-center w-full">
                        <FormLabel className="text-sm bg-clip-text text-[var(--gray-blue)] light:text-[var(--gray-70)] #bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                          {f("email")} *
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="light:text-black text-[var(--gray-0)] border border-[var(--ocean-blue)] dark:bg-[var(--blue2)]"
                          />
                        </FormControl>
                        {form.formState.errors.email && (
                          <p className="text-[var(--error)] text-xs">
                            {f(`${form.formState.errors.email.message}`)}
                          </p>
                        )}
                      </FormItem>
                    )}
                  />

                  {/* <FormField
                    control={form.control}
                    name="company_name"
                    render={({ field }) => (
                      <FormItem className="items-center justify-center w-full">
                        <FormLabel className="text-sm bg-clip-text text-[var(--gray-blue)] light:text-[var(--gray-70)] #bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                          {f("companyName")}
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
                          {t("services.label")}
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="light:text-black text-[var(--gray-blue)] border border-[var(--ocean-blue)] dark:bg-[var(--blue2)]">
                              <SelectValue
                                placeholder={t("services.default")}
                                className="text-black"
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="light:text-black text-[var(--gray-blue)] border border-[var(--ocean-blue)] dark:bg-[var(--blue2)]">
                            {serviceOptions.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                              >
                                {option.label}
                              </SelectItem>
                            ))}
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
                          {t("help.label")}
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="light:text-black text-[var(--gray-blue)] border border-[var(--ocean-blue)] dark:bg-[var(--blue2)]">
                              <SelectValue
                                placeholder={t("help.default")}
                                className="light:text-black text-[var(--gray-blue)] placeholder:text-[var(--gray-blue)]"
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="light:text-black text-[var(--gray-blue)] border border-[var(--ocean-blue)] dark:bg-[var(--blue2)]">
                            {helpOptions.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                              >
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  /> */}

                  <FormField
                    control={form.control}
                    name="info"
                    render={({ field }) => (
                      <FormItem className="items-center justify-center w-full">
                        <FormLabel className="text-sm bg-clip-text text-[var(--gray-blue)] light:text-[var(--gray-70)] #bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                          {f("additionalInfo")}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            style={{ height: "100px" }}
                            className="light:text-black text-[var(--gray-0)] border border-[var(--ocean-blue)] dark:bg-[var(--blue2)]"
                            {...field}
                          />
                        </FormControl>
                        {form.formState.errors.info && (
                          <p className="text-[var(--error)] text-xs">
                            {f(`${form.formState.errors.info.message}`)}
                          </p>
                        )}
                      </FormItem>
                    )}
                  />

                  {/* <FormField
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
                            {f("consent")}
                          </div>
                        </div>
                        {form.formState.errors.consent && (
                          <p className="text-[var(--error)] text-xs">
                            {f(`${form.formState.errors.consent.message}`)}
                          </p>
                        )}
                      </FormItem>
                    )}
                  /> */}

                  <div className="flex items-center gap-4">
                    <Button
                      type="submit"
                      className="text-sm font-light #dark:bg-gradient-to-b from-sky-400 
            to-purple-500 bg-opacity-50 bg-[var(--ocean-blue)] hover:bg-[var(--ocean-blue)] light:text-white"
                      disabled={loading}
                    >
                      {t("submit")}
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
