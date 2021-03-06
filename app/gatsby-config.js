module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/articles`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve:`gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 620,
              showCaptions: true,
              markdownCaptions: true,
              quality:100
            },
          },
          `gatsby-remark-copy-linked-files`
        ],
      },
    },

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Set to false to allow builds to continue on image errors
        failOnError: false,
        defaultQuality: 80,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
  ],
  siteMetadata: {
    title: "Support Moodmachine",
    description: "Поддержка Moodmachine.ru",
    articleCategories:[
      {
        label: "Сайты",
        path: 'sites',
        title: 'Руководства по сайтам',
        description: 'Руководства от компании Moodmachine'
      },
      {
        label: "Хостинг",
        path: 'hosting',
        title: 'Руководства по хостингу',
        description: 'Руководства от компании Moodmachine'
      },
      {
        label: "Боты",
        path: 'bots',
        title: 'Руководства по ботам',
        description: 'Руководства от компании Moodmachine'
      },
    ]
  },
};
