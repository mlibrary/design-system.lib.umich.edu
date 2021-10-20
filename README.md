![splash](https://user-images.githubusercontent.com/1678665/135491719-c77e8b1c-ec58-49a5-8668-9636c4866496.png)

# Design System Website [![Netlify Status](https://api.netlify.com/api/v1/badges/d0152711-5992-4d47-847b-238c76a98cae/deploy-status)](https://app.netlify.com/sites/dev-docs-design-system/deploys)

Are you looking for design system documentation?</br> https://design-system.lib.umich.edu

Are you looking for the design system repo and not the website? </br>https://github.com/mlibrary/design-system

## Local development

### 1. Clone this repository:

```
git clone git@github.com:mlibrary/design-system.lib.umich.edu.git
```

### 2. Navigate to the directory

```
cd design-system.lib.umich.edu
```

Have a look at `.eleventy.js` to see Eleventy options configured.

### 3. Install dependencies locally

```
npm install
```

### 4. Edit \_data/metadata.json

This file contains your site title and author details, and can be used to store any other commonly used site data.

### 5. Run Eleventy (builds the site)

```
npm start
```

Or in debug mode:

```
DEBUG=* npm start
```

### Using a local (git) backend

In a root `.env` file add `PORT=8765`.

```
npx netlify-cms-proxy-server
```

### How does this all work?

We use Netlify and Eleventy for key functionality.

- Full Continuous Deployment to Netlify's global CDN network
- Control users and access with Netlify Identity
- Manage content with Netlify CMS
- Process form data with Netlify Forms

## Bug reports, feature requests, etc

This is an ongoing project and I welcome contributions and suggestions! Feel free to submit a PR.

If you need any help with setting up this repo, you can reach out to the design system team at [library-design-system-team@umich.edu](library-design-system-team@umich.edu).
