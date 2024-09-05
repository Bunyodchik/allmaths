export default {
  name: 'book',
  type: 'document',
  title: 'Book',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the book',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      description: 'The URL to access the book',
      validation: (Rule) => Rule.required().uri({allowRelative: false}),
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
  ],
}
