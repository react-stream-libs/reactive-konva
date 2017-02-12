import { configure } from '@storybook/react';

function loadStories() {
  require('./stories'); // tslint:disable-line:no-require-imports
}

configure(loadStories, module);
