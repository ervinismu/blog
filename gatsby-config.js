module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `blog@ervinismu`,
    author: `ervinismu`,
    description: `My site description...`,
    siteUrl: "https://ervinismu.com",
    social: [
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/ervien-ismunandar-susila/`,
      },
      {
        name: `github`,
        url: `https://github.com/ervinismu`,
      },
    ],
  },
}

// UPDATE A THEME
// To pull in the latest updates of your theme you can update the gatsby-theme-blog version in your site’s package.json.
// You can do this by running the install of the theme package again: npm install --save gatsby-theme-blog.
