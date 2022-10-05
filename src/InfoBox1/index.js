import edit from './edit';
import save from './save';

export const name = 'ngblockplugin/info-box-1';

export const settings = {
    title: 'Info Box 1',
    description: 'Sticky header menu',
    icon: 'smiley',
    category: 'common',
    keywords: [''],
    attributes: {
        content: { type: 'string' },
        contentBackgroundColor: { type: 'string' },
        contentFontColor: { type: 'string' },
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
        }, button_text: {
            type: 'string'
        }, buttonNewTab: {
            type: 'boolean'
        }, buttonLink: {
            type: 'string'
        }, buttonBackgroundColor: {
            type: 'string'
        }, buttonFontColor: {
            type: 'string'
        }, rhsEnable: {
            type: 'boolean',
            default: false,

        }

    },
    edit: edit,
    save: save,
}