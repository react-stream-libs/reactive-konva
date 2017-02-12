import * as _ from 'lodash';
import { addFile } from './utils';

export let files: {
  [key: string]: string
} = {};

// const reqContext: any = require.context('!raw-loader!../../src', true);
// _.forEach(reqContext.keys(), (path: string) => {
//   if(path.endsWith('.ts') || path.endsWith('.tsx')) {
//     files[path.substring(2)] = reqContext(path);
//   }
// });

// const indexReqContext: any = require.context('!raw-loader!../../lib', true);
// _.forEach(indexReqContext.keys() , (path: string) => {
//   if(path.endsWith('.d.ts')) {
//     files[path.substring(2)] = indexReqContext(path);
//   }
// })

const typesReqContext: any = require.context(
  'raw-loader!../../node_modules/@types', true
)
_.forEach(typesReqContext.keys(), (path: string) => {
  if(path.endsWith('.d.ts')) {
    files[path.substring(2)] = typesReqContext(path);
  }
});

const konvaDtsFile: string = require('!raw-loader!../../node_modules/konva/konva.d.ts');
const konvaContents = _.concat(
  konvaDtsFile.split('\n').filter(line => !line.startsWith('export')) ,[
    `
    declare module 'konva' {
        export = Konva;
    }`,
  ]
)
.join('\n');
debugger;
files['konva.d.ts'] = konvaContents;
const reactiveKonvaDtsFile = require('!raw-loader!../../reactive-konva.d.ts');
files['reactive-konva.d.ts'] = reactiveKonvaDtsFile;
files['reactive-renderer.d.ts'] = require('!raw-loader!../../node_modules/reactive-renderer/reactive-renderer.d.ts')
files['globalizer.d.ts'] = `
// export as namespace
`;

console.error('files:', files);

let added = false;
export async function addDefaultFiles() {
  if (!added) {
    _.forEach(
      files,
      (content, path) => {
        addFile(content, path);
      }
    )
  }
  added = true;
  // const worker = await monaco.languages.typescript.getTypeScriptWorker();
  // worker.
}