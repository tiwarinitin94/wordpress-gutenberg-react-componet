import edit from './edit';
import save from './save';

export const name = 'ngblockplugin/timeline-box-1';

export const settings = {
    title: 'Timeline Box1',
    description: 'Timeline box for showing the timeline',
    icon: 'smiley',
    category: 'common',
    keywords: [''],
    attributes: {
        heading: {
            type: "string"
        },
        headlineContentColor: {
            type: "string"
        }, textFontColor: {
            type: 'string'
        },
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
            type: 'array',
            default: [
                {
                    col_left: "",
                    col_right: "",
                }

            ]
        }


    },
    edit: edit,
    save: save,
};