import { createClient } from "contentful";

const clientNew = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID_NEW || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN_NEW || "",
});

export default clientNew;
