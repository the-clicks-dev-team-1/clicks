"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useTranslations } from "next-intl";

export function TextGenerateEffectDemo() {
  const t = useTranslations("aboutAgency.mission");

  return <TextGenerateEffect heading={t("title")} words={t("description")} />;
}
