import edit from './edit';
import save from './save';

export const name = 'ngblockplugin/video-box-1';

export const settings = {
    title: 'Video Box1',
    description: 'Video box to add only full size video',
    icon: 'smiley',
    category: 'common',
    keywords: [''],
    attributes: {
        videoLink: {
            type: 'string'
        },
        content: {
            type: "string"
        }, contentBackgroundColor: {
            type: "string"
        }

    },
    edit: edit,
    save: save,
};