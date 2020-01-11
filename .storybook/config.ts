import { configure } from '@storybook/react';
import { setOptions } from 'storybook-addon-react-live-edit';


setOptions({ theme: 'darcula', presets: ['react'] });


// automatically import all files ending in *.stories.tsx
configure(require.context('../src/stories', true, /\.stories\.tsx$/), module);
