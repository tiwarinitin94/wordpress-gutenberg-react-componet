import edit from './edit';
import save from './save';

export const name = 'ngblockplugin/info-box-2';

export const settings = {
    title: 'Info Box2',
    description: 'Info box with heading text and half image',
    icon: 'smiley',
    category: 'common',
    keywords: [''],
    attributes: {
        attribute: {
            type: "array",
            default: [{
                title: "Left side ",
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