import { defineType, defineField } from 'sanity';

export const post = defineType({
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
        defineField({
            name: 'headline',
            title: 'Headline',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'headline',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'publishDate',
            title: 'Publish Date',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Featured Image',
            type: 'image',
            options: {
                hotspot: true, // Allows you to crop images in the studio
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'summary',
            title: 'Summary',
            type: 'array',
            of: [{ type: 'block' }], // Portable Text (Rich Text)
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'content',
            title: 'Main Content',
            type: 'array',
            of: [
                { type: 'block' },
                { type: 'image', options: { hotspot: true } } // Allow images inside the rich text
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'sidebarContent',
            title: 'Sidebar Content',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'embeddedHtml',
            title: 'Embedded HTML (Optional)',
            description: 'Paste any raw HTML (like forms, buttons, scripts) here. It will run dynamically in the React app.',
            type: 'text',
        }),
    ],
    preview: {
        select: {
            title: 'headline',
            media: 'image',
        },
    },
});

export const schemaTypes = [post];
