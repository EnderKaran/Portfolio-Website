'use client'

/**
 * Bu yapılandırma, `\app\studio\[[...tool]]\page.tsx` rotasında çalışan Sanity Studio içindir.
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure' // DİKKAT: @ işareti yok, doğrusu bu şekildedir.

// API versiyonlama, dataset ve projectId ayarlarını içeri aktarıyoruz
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/deskStructure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // İçerik şemalarımız './sanity/schemaTypes' klasöründen gelir
  schema,
  plugins: [
    structureTool({structure}),
    // Vision eklentisi, Studio içinden GROQ sorguları yapabilmeni sağlar
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})