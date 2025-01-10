import { useLocale, useTranslations } from "next-intl";
import { locales } from "@/lib/config";
import LocaleSwitcherSelectMobile from "./LocaleSwitcherSelectMobile";

export default function LocaleSwitcherMobile() {
  const t = useTranslations("localeSwitcherMobile");
  const locale = useLocale() as "en" | "fr";

  const localeNames: Record<"en" | "fr", string> = {
    en: t("en"),
    fr: t("fr"),
  };

  return (
    <LocaleSwitcherSelectMobile
      defaultValue={locale}
      label={t("label")}
      localeNames={localeNames}
    >
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {localeNames[cur]}
        </option>
      ))}
    </LocaleSwitcherSelectMobile>
  );
}
