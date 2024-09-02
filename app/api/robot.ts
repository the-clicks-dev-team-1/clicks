import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  // Вы можете добавить логику для получения данных из Contentful и определения, какие страницы индексировать.
  
  const content = `
    User-agent: *
    Disallow: /admin/
    Disallow: /private/
    Allow: /
    Sitemap: https://theclicks.ca/sitemap.xml
  `;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
