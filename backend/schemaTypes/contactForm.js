export const contactForm = {
  name: 'contactForm',
  title: 'Contact Form',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(50),
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(50),
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(15),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule) => Rule.max(100),
    },
    {
      name: 'emailName',
      title: 'Email Name',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: 'message',
      title: 'Write a Message',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(1000),
    },
    {
      name: 'read',
      title: 'Read',
      type: 'boolean',
      description: 'Mark as read when the admin checks the message',
      initialValue: false,
    },
  ],
}
