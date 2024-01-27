import client from '@sanity/client'

export default client({
    projectId: '2z3u6xcw',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-01-27'
})