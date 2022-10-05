import edit from './edit';
import save from './save';

export const name = 'ngblockplugin/info-box-3';

export const settings = {
    title: 'Info Box3',
    description: 'Info box with heading text and no image',
    icon: 'smiley',
    category: 'common',
    keywords: [''],
    attributes: {

        attribute: {
            type: "array",
            default:
                [{

                    title: "Left side ",
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

                }]

        }

    },
    edit: edit,
    save: save,
};