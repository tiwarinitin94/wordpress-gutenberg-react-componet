import edit from './edit';
import save from './save';

export const name = 'ngblockplugin/info-box-7';

export const settings = {
    title: 'Info Box7',
    description: 'Info box with three column with image and title',
    icon: 'smiley',
    category: 'common',
    keywords: [''],
    attributes: {
        headline: {
            type: "string"
        },
        attribute: {
            type: "array",
            default: [{
                title: "Left side ",
                head: null,
                text: null,
                contentBackgroundColor: null,
                contentFontColor: null,
                mediaID: null,
                mediaIURL: null,
                mediaSize: null,
                mediaALT: null,
                mediaTITLE: null,
                button_text: null,
                buttonNewTab: null,
                buttonLink: null,
                buttonBackgroundColor: null,
                buttonFontColor: null,

            }, {
                title: "Middle Side",
                head: null,
                text: null,
                contentBackgroundColor: null,
                contentFontColor: null,
                mediaID: null,
                mediaIURL: null,
                mediaSize: null,
                mediaALT: null,
                mediaTITLE: null,
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
                mediaID: null,
                mediaIURL: null,
                mediaSize: null,
                mediaALT: null,
                mediaTITLE: null,
                button_text: null,
                buttonNewTab: null,
                buttonLink: null,
                buttonBackgroundColor: null,
                buttonFontColor: null,
            }]
        }
    },
    edit: edit,
    save: save,
};