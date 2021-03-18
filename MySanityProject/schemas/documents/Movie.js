const movie = {
    title: 'Movie',
    name: 'movie',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Movie',
        type: 'string',
        description: 'Title on Movie',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'actor',
        title: 'Actor',
        type: 'reference',
        description: 'Name on actor',
        to: [{type: 'actor'}],
        validation: (Rule) => Rule.required(),
      }
    ]
  }
  
  export default movie;