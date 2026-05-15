import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import projectStats from './projectStats'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, projectStats, categoryType, postType, authorType],
}
