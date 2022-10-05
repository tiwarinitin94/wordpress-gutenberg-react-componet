import edit from './edit';
import save from './save';

export const name = 'ngblockplugin/text-box-1';

export const settings = {
    title: 'Text Box1',
    description: 'Text box to show text in full width',
    icon: 'smiley',
    category: 'common',
    keywords: [''],
    attributes: {
        heading: {
            type: "string"
        },
        para: {
            type: "string"
        },
        LeftBackground: {
            type: "string"
        },
        RightBackground: {
            type: "string"
        }

    },
    edit: edit,
    save: save,
};