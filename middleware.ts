import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// List of allowed countries (ISO country codes)
const allowedRegions = [
  // North America
  "US", // United States
  "CA", // Canada
  "MX", // Mexico

  // Europe
  "AT", // Austria
  "BE", // Belgium
  "BG", // Bulgaria
  "HR", // Croatia
  "CY", // Cyprus
  "CZ", // Czech Republic
  "DK", // Denmark
  "EE", // Estonia
  "FI", // Finland
  "FR", // France
  "DE", // Germany
  "GR", // Greece
  "HU", // Hungary
  "IE", // Ireland
  "IT", // Italy
  "LV", // Latvia
  "LT", // Lithuania
  "LU", // Luxembourg
  "MT", // Malta
  "NL", // Netherlands
  "PL", // Poland
  "PT", // Portugal
  "RO", // Romania
  "SK", // Slovakia
  "SI", // Slovenia
  "ES", // Spain
  "SE", // Sweden
  "UA", // Ukraine
  "GB", // United Kingdom
  "NO", // Norway
  "IS", // Iceland
  "CH", // Switzerland
];

export function middleware(req: NextRequest) {
  const country = req.geo?.country || "Unknown";

  console.log(`Incoming request from country: ${country}`);

  // If the country is not in the allowed list, redirect to the blocked page
  if (!allowedRegions.includes(country)) {
    return NextResponse.redirect(new URL("/blocked", req.url));
  }

  // Avoid redirect loops by ensuring no further redirects when already on the /blocked page
  if (req.nextUrl.pathname === "/blocked") {
    return NextResponse.next();
  }

  return NextResponse.next(); // Continue for allowed countries
}

export const config = {
  matcher: "/:path*", // Applies to all paths
};
