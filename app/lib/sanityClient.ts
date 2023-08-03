import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../../sanity/env'

export const client = createClient({
  apiVersion :'v2023-07-26',
  dataset: 'production',
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
  token:process.env.SANITY_ACCESS_TOKEN
})
