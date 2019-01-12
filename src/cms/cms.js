import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import MaterialPagePreview from './preview-templates/MaterialPagePreview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('material', MaterialPagePreview);
