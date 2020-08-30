module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  return {
    passthroughFileCopy: true,
    markdownTempleteEngine: "njk",
    templatesFormats: ["html", "md", "njk"],
    dir: {
      input: "src",
      output: "_site",
      include: "includes",
    },
  };
};
