export default {
  name: 'year',
  type: 'document',
  title: 'Year',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the year (e.g., Ages 4-6)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'books',
      type: 'array',
      title: 'Books',
      description: 'List of books for this year',
      of: [{type: 'reference', to: [{type: 'book'}]}],
    },
  ],
}
