import edit from './edit';
import save from './save';

export const name = 'ngblockplugin/info-box-5';

export const settings = {
    title: 'Info Box 5',
    description: 'Info box 5 split col with background image',
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
        subtext: {
            type: 'string'
        },
        contentBackgroundColor: {
            type: 'string'
        },

        buttonBackgroundColor: {
            type: 'string'
        },
        buttonFontColor: {
            type: 'string'
        }, buttonNewTab: {
            type: 'boolean'
        }
        , button_text: {
            type: 'string'
        }, buttonLink: {
            type: 'string'
        }

    },
    edit: edit,
    save: save,
};