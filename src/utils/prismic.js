import Prismic from 'prismic-javascript';

// Prismic API endpoint
export const apiEndpoint = 'https://travishenson.cdn.prismic.io/api/v2';

// API access token
const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

// URL link resolver
export const linkResolver = (doc) => {
  if (doc.type === 'page') return `/page/${doc.uid}`
  return '/'
};

// Method to query API
export const Client = Prismic.client(apiEndpoint, { accessToken });