module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/admin");

  // FAQ entries live as individual markdown files in src/faq/*.md,
  // created either by hand or via the Decap CMS admin panel.
  // Sorted by an optional "order" field (lower first), then alphabetically
  // by question as a fallback so unordered entries still render consistently.
  eleventyConfig.addCollection("faq", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/faq/*.md")
      .sort(function (a, b) {
        const orderA = a.data.order ?? 9999;
        const orderB = b.data.order ?? 9999;
        if (orderA !== orderB) return orderA - orderB;
        return (a.data.question || "").localeCompare(b.data.question || "");
      });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};
