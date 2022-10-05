import edit from './edit';
import save from './save';

export const name = 'ngblockplugin/info-box-8';

export const settings = {
    title: 'Info Box 8',
    description: 'Info box with list',
    icon: 'smiley',
    category: 'common',
    keywords: [''],
    attributes: {
        headline: {
            type: 'string'
        },
        text: {
            type: 'string'
        }, headlineContentColor: {
            type: 'string'
        }, textContentColor: {
            type: 'string'
        }, contentBackgroundColor: {
            type: 'string'
        }
    },
    edit: edit,
    save: save,
};