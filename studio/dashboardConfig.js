export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602a6e92e4ec29009a59bdc4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-uxvzc9ke',
                  apiId: '06f20a3e-be71-4094-9e28-f18cd016e6ce'
                },
                {
                  buildHookId: '602a6e921935610150d07715',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-q44rm3mr',
                  apiId: '1cc62f96-50fe-4564-9c16-06b0ef3b65dd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Dipinrajc/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-q44rm3mr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
