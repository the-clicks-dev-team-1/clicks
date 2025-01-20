import clientNew from "@/lib/contentfulNew";

export const getJob = async (slug: string, locale: string) => {
  try {
    const entries = await clientNew.getEntries({
      content_type: "jobOpening",
      "fields.slug": slug,
      locale,
    });
    return entries.items[0];
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch job!");
  }
};

export const getBlogPost = async (slug: string, locale: string) => {
  try {
    const entries = await clientNew.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
      locale,
    });
    return entries.items[0];
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch BlogPost!");
  }
};
