import sanityClient from '@sanity/client';

const options = {
    projectId: "fl6wn9ej",
    dataset: "production"
    
};

const client = sanityClient({
    ...options,
    useCdn: process.env.NODE_ENV === 'production' 
})

export default client;