export default {
  name: 'stage',
  type: 'document',
  title: 'Stage',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the stage (e.g., Key Stage 1)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'years',
      type: 'array',
      title: 'Years',
      description: 'List of years for this stage',
      of: [{type: 'reference', to: [{type: 'year'}]}],
    },
  ],
}
