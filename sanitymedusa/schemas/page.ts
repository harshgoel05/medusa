import {defineArrayMember, defineField} from 'sanity'

export default {
  name: 'page',
  type: 'document',
  title: 'Pages',
  fields: [
    defineField({
      name: 'pageName',
      title: 'Page Name',
      type: 'string',
      description: 'The name of the page for SEO purposes',
      validation: (Rule) => Rule.required().error('Page name is required'),
    }),
    defineField({
      name: 'pageDescription',
      title: 'Page Description',
      type: 'string',
      description: 'The description of the page for SEO purposes',
      validation: (Rule) => Rule.required().error('Page description is required'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'pageName',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [defineArrayMember({type: 'sectionItems'})],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
}
