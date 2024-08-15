"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `At The Clicks, we are dedicated to becoming a leader in digital marketing, offering top-tier SEO, PPC, 
and online advertising services that deliver measurable results. Our team of highly skilled specialists is committed to exceeding 
client expectations by leveraging the latest technologies and a systematic approach to business growth. Beyond driving business success, 
our mission is to inspire positive change in the communities we serve. We believe that through continuous improvement and innovation, 
we can empower others to contribute to making their cities and countries better places, all while creating meaningful projects 
and initiatives that leave a lasting impact.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect heading="Our Values and Mission" words={words} />;
}