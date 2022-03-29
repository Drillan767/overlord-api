module.exports = ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        article: {
          field: 'slug',
          references: 'title',
        },
        project: {
          field: 'slug',
          references: 'title',
        }
      },
    },
  },
  'menus': {
    enabled: true,
    config: {
      maxDepth: 3,
    },
  },
  comments: {
    enabled: true,
    config: {
      badWords: false,
      moderatorRoles: ["Authenticated"],
      approvalFlow: ['api::page.page'],
      entryLabel: {
        '*': ['Title', 'title', 'Name', 'name', 'Subject', 'subject'],
        'api::page.page': ['MyField'],
      },
      reportReasons: {
        'MY_CUSTOM_REASON': 'MY_CUSTOM_REASON',
      },
      gql: {
        // ...
      },
    },
  },
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
})
