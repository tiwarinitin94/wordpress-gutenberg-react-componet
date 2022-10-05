import edit from './edit';
import save from './save';

export const name = 'ngblockplugin/info-box-6';

export const settings = {
    title: 'Info Box 6',
    description: 'Info box 6 split col ',
    icon: 'smiley',
    category: 'common',
    keywords: [''],
    attributes: {
        attribute: {
            type: "array",
            default: [{
                title: "Left side ",
                heading: null,
                text: null,
            },
            {
                title: "Right side ",
                heading: null,
                text: null,
            },]
        }

    },
    edit: edit,
    save: save,
};