import edit from './edit';
import save from './save';

export const name = 'ngblockplugin/content-box-1';

export const settings = {
    title: 'Content Box 1',
    description: 'Content box 1 to show the largeer content',
    icon: 'smiley',
    category: 'common',
    keywords: [''],
    attributes: {
        headline: {
            type: 'string'
        },
        text: {
            type: 'string'
        },
        text2: {
            type: 'string'
        },
        subtext: {
            type: 'string'
        }
        , button_text: {
            type: 'string'
        }, buttonNewTab: {
            type: 'boolean'
        }, buttonLink: {
            type: 'string'
        }, buttonBackgroundColor: {
            type: 'string'
        }, buttonFontColor: {
            type: 'string'
        }
    },
    edit: edit,
    save: save,
};