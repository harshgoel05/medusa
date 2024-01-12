import {defineType} from 'sanity'

export default defineType({
  name: 'sectionItems',
  title: 'Section Items',
  type: 'object',
  fields: [
    {
      name: 'sectionName',
      title: 'Section Name',
      type: 'string',
      description: 'The name of the section for SEO purposes',
      options: {
        list: ['Featured Products', 'Collections'],
      },
    },
    {
      name: 'featuredProducts',
      title: 'Featured Products',
      type: 'array',
      of: [{type: 'reference', weak: true, to: [{type: 'product'}]}],
      hidden: ({parent}) => parent.sectionName !== 'Featured Products',
    },
    {
      name: 'collections',
      title: 'Collections',
      type: 'array',
      of: [{type: 'reference', weak: true, to: [{type: 'productCollection'}]}],
      hidden: ({parent}) => parent.sectionName !== 'Collections',
    },
  ],
})
