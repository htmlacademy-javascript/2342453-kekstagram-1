import {getPictures} from './data.js';

getPictures();
// Импортировал и вызвал.

import { getPictures } from './data.js';
import { renderPictures } from './picture.js';
import './form.js';

renderPictures(getPictures());