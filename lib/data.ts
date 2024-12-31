import client from "./contentful";

export const getJob = async (slug: string) => {
  try {
    const entries = await client.getEntries({
      content_type: "jobOpening",
      "fields.slug": slug,
    });
    return entries.items[0];
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch job!");
  }
};

export const getBlogPost = async (slug: string) => {
  try {
    const entries = await client.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
    });
    return entries.items[0];
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch BlogPost!");
  }
};
