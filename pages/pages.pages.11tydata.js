module.exports = {
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title,
      parent: data => data.parent,
      excerpt: data => data.description
    }
  }
};