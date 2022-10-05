import edit from './edit';
import save from './save';

export const name = 'ngblockplugin/quote-box-2';

export const settings = {
    title: 'Quote Box 2',
    description: 'Quote box with saying only without image',
    icon: 'smiley',
    category: 'common',
    keywords: [''],
    attributes: {
        quote: { type: 'string' },
        quote_name: { type: 'string' },
        contentBackgroundColor: { type: 'string' },
        contentFontColor: { type: 'string' },


    },
    edit: edit,
    save: save,
}