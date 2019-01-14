import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import MaterialPagePreview from './preview-templates/MaterialPagePreview';
import PersonComponentPreview from './preview-templates/PersonComponentPreview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('material', MaterialPagePreview);
CMS.registerPreviewTemplate('person', PersonComponentPreview);
