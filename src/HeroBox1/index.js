import edit from './edit';
import save from './save';
import icons from '../common/icons.js';

export const name = 'ngblockplugin/hero-box-1';

export const settings = {
    title: 'Hero Box 1',
    description: 'Fullwidth and fullheight Hero Element',
    icon: icons.hero1,
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
        }, buttonBackgroundColor: {
            type: 'string'
        },
        buttonFontColor: {
            type: 'string'
        }, buttonNewTab: {
            type: 'boolean'
        }
        , button_text: {
            type: 'string'
        }, buttonLink: {
            type: 'string'
        }

    },
    edit: edit,
    save: save,
};