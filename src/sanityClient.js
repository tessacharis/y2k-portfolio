import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'hdprq3kf', // Replace with your Sanity project ID
    dataset: 'production',        // Replace with your dataset name
    useCdn: false,                 // Use CDN for faster, cacheable responses
    apiVersion: '2024-03-08',     // Use current date (YYYY-MM-DD)
});

// Helper function for generating image URLs
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
