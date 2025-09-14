module.exports = function(eleventyConfig) {
  // Copy assets
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});

  // Add shortcodes or filters if needed
  eleventyConfig.addFilter("dateReadable", (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric"});
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "../_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"]
  };
};
