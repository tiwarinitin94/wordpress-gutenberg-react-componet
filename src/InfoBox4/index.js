import edit from './edit';
import save from './save';

export const name = 'ngblockplugin/info-box-4';

export const settings = {
    title: 'Info Box4',
    description: 'Info box 4 split col with background image',
    icon: 'smiley',
    category: 'common',
    keywords: [''],
    attributes: {

        mediaID: {
            type: 'string'
        },
        mediaIURL: {
            type: 'string'
        },
        mediaSize: {
            type: 'string'
        },
        mediaALT: {
            type: 'string'
        },
        mediaTITLE: {
            type: 'string'
        },
        attribute: {
            type: "array",
            default: [{
                title: "Left side ",
                content: null,
                contentBackgroundColor: null,
                contentFontColor: null,
                button_text: null,
                buttonNewTab: null,
                buttonLink: null,
                buttonBackgroundColor: null,
                buttonFontColor: null,
            },
            {
                title: "Middle Side",
                content: null,
                contentBackgroundColor: null,
                contentFontColor: null,
                button_text: null,
                buttonNewTab: null,
                buttonLink: null,
                buttonBackgroundColor: null,
                buttonFontColor: null,
            }, {
                title: "Right Side",
                content: null,
                contentBackgroundColor: null,
                contentFontColor: null,
                button_text: null,
                buttonNewTab: null,
                buttonLink: null,
                buttonBackgroundColor: null,
                buttonFontColor: null,
            },]
        }
    },
    edit: edit,
    save: save,
};