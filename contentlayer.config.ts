import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  fields: {
    slug: { type: 'string', required: true },
  },
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })
