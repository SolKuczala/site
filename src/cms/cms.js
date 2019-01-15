import CMS from 'netlify-cms';

import MaterialPagePreview from './preview-templates/MaterialPagePreview';
import PersonComponentPreview from './preview-templates/PersonComponentPreview';

CMS.registerPreviewTemplate('material', MaterialPagePreview);
CMS.registerPreviewTemplate('person', PersonComponentPreview);
