export const faq = {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(200),
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'text',
      validation: (Rule) => Rule.required().min(20).max(1000),
    },
  ],
}
