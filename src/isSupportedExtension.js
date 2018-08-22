import { extname } from 'path';
import { getSupportInfo } from 'prettier';

const extensions = getSupportInfo()
  .languages.reduce(
    (prev, language) => prev.concat(language.extensions || []),
    []
  )
  .concat('.html');

export default file => extensions.includes(extname(file));
