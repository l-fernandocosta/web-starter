# NextJS - Project Starter

A simple template with some dependencies that I use to start my projects.

# ⚙️ Dependencies

- React-hook-form
- Yup
- Zustand
- ChakraUI
- Inversify
- React-query
- Jest
- React Testing Library
- Typescript
- Husky
- Lint-staged
- Axios

# How to clone ?

Run the following command:

```ts
npx degit l-fernandocosta/web-starter <name of the project>
```

After this step, configure the husky:

1. Install the dependencie -

```ts
npx husky-init && npm i
```

2. As default, husky create a file named `pre-commit` with the command `npm test`.
   Update the command to `npm run lint-staged`

3. `package.json` already comes with the following configuration, but feel free to change it:

```ts
  "lint-staged": {
    "*.(tsx|ts)": "eslint --cache --fix",
    "*": "prettier --write --ignore-unknown"
  }
```

4. You are ready to go ! 🔥

> If you dont like the `page.tsx` route extension, you can change it on the
> `next.config.js`

```ts
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["page.tsx"], // <--- Update here
};

module.exports = nextConfig;
```

---
