import * as _ from 'lodash';
import { addFile } from './utils';
// import as from '../../src'
// const reqContext: any = require.context('!raw-loader!../../src', true);

export let files: {
  [key: string]: string
} = {};
// _.forEach(reqContext.keys(), (path: string) => {
//   if(path.endsWith('.ts') || path.endsWith('.tsx')) {
//     files[path.substring(2)] = reqContext(path);
//   }
// });

const indexReqContext: any = require.context('!raw-loader!../../lib', true);
_.forEach(indexReqContext.keys() , (path: string) => {
  if(path.endsWith('.d.ts')) {
    files[path.substring(2)] = indexReqContext(path);
  }
})

const typesReqContext: any = require.context(
  'raw-loader!../../node_modules/@types', true
)
_.forEach(typesReqContext.keys(), (path: string) => {
  if(path.endsWith('.d.ts')) {
    files[path] = typesReqContext(path);
  }
});

let added = false;
export function addDefaultFiles() {
  if (!added) {
    _.forEach(
      files,
      (content, path) => {
        addFile(content, path);
      }
    )
  }
  added = true;
}