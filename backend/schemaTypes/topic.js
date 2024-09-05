export const topic = {
  name: 'topic',
  title: 'Topic',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'The cover image of the book',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'video'}]}],
    },
  ],
}
