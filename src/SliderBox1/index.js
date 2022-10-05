import edit from './edit';
import save from './save';

export const name = 'ngblockplugin/slider-box-1';

export const settings = {
    title: 'Slider Box1',
    description: 'Slider box for showing the sliders',
    icon: 'smiley',
    category: 'common',
    keywords: [''],
    attributes: {
        heading: {
            type: "string"
        },
        contentBackgroundColor: {
            type: "string"
        }, textFontColor: {
            type: 'string'
        },
        attribute: {
            type: 'array',
            default: [
                {
                    author_name: "",
                    company: "",
                    text: "",
                }

            ]
        }


    },
    edit: edit,
    save: save,
};