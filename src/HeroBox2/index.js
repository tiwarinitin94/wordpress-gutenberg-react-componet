import edit from './edit';
import save from './save';

export const name = 'ngblockplugin/hero-box-2';

export const settings = {
    title: 'Hero Box2',
    description: 'Sticky header with hero Text',
    icon: 'smiley',
    category: 'common',
    keywords: [''],
    attributes: {
        header: { type: 'string' },
        small_content: { type: 'string' }
    },
    edit: edit,
    save: save,
};