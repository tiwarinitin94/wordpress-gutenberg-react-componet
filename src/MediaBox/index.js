import edit from './edit';
import save from './save';

export const name = 'ngblockplugin/media-box';

export const settings = {
    title: 'Media Box',
    description: 'Media box to add only full size image',
    icon: 'smiley',
    category: 'common',
    keywords: [''],
    attributes: {
        mediaID: {
            type: 'number',
        },
        mediaIURL: {
            type: 'string',
        }, mediaSize: {
            type: 'object'
        }, mediaALT: {
            type: 'string'
        }, mediaTITLE: {
            type: 'string'
        }

    },
    edit: edit,
    save: save,
};