import edit from './edit';
import save from './save';

export const name = 'ngblockplugin/quote-box-1';

export const settings = {
    title: 'Quote Box 1',
    description: 'Quote box with saying',
    icon: 'smiley',
    category: 'common',
    keywords: [''],
    attributes: {
        quote: { type: 'string' },
        quote_name: { type: 'string' },
        company: { type: 'string' },
        contentBackgroundColor: { type: 'string' },
        contentFontColor: { type: 'string' },
        attribute: {
            type: 'array',
            default: [
                {
                    title: "Image for Author",
                    mediaID: null,
                    mediaIURL: null,
                    mediaSize: null,
                    mediaALT: null,
                    mediaTITLE: null,
                },
                {
                    title: "Image of signature",
                    mediaID: null,
                    mediaIURL: null,
                    mediaSize: null,
                    mediaALT: null,
                    mediaTITLE: null,
                }
            ]
        }

    },
    edit: edit,
    save: save,
}