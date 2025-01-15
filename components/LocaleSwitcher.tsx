import { useLocale, useTranslations } from "next-intl";
import { locales } from "@/lib/config";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

const localeFlags = {
  en: "🇬🇧", // English flag
  fr: "🇫🇷", // French flag
  // Add other locales and their flags here as needed
};

export default function LocaleSwitcher() {
  const t = useTranslations("localeSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      label={t("label")}
      localeFlags={localeFlags}
    >
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {t("locale", { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
