---
layout: layouts/document.njk
title: Work notes
description: Get updated on the latest notable changes to the Library Design System.
---

TODO: Create a "change post" collection in the Netlify CMS for listing all page change log posts that detail notable new features and changes to the design system ordered by latest posts.

<!--

## Notes

Use the design system stylesheet and inline style elements and style properties on elements to add product specific customizations.

Why?

- Your UI can be copy and pasted from one part of file rather than looking across product specific stylesheets.
- Modifations are co-located, making it easy for your colleagues to see all the changes together.
- It's performant since it's all inline and does not require loading a fresh stylesheet for the entire websites each time any size of changes happens to your styles. Say you have to change a single CSS property, this would require the entire website CSS stylesheet to be downloaded. If the product styles are in the HTML file then just that document needs to downloaded new. The other pages are OK and the cached stylesheet for the web presence is reused as users navigate around.
- It uses web standards. Customizations can also come through as custom properties, such as the .page-footer grid gap being adjusted here product side.

-->
