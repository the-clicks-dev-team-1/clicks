import { LocalePrefix, Pathnames } from "next-intl/routing";

export const locales = ["en", "fr"] as const;

export type Locales = typeof locales;

export const pathnames: Pathnames<Locales> = {
  "/": "/",
  "/about": "/about",
  "/blog": "/blog",
  "/cart": "/cart",
  "/checkout": "/checkout",
  "/contact": "/contact",
  "/portfolio": "/portfolio",
  "/privacy-policy": "/privacy-policy",
  "/services": "/services",
  "/shop": "/shop",
  "/pathnames": "/pathnames",
};

export const localePrefix: LocalePrefix<Locales> = "always";
