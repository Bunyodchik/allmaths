export const video = {
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
  ],
}
