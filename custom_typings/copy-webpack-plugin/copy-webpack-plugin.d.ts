declare module 'copy-webpack-plugin' {
  import {
    Plugin, Webpack,
  } from 'webpack';
  type CopyArgType = {
    from: string, to: string,
  };
  class CopyWebpackPlugin implements Plugin {
    constructor (args: Array<CopyArgType>)
    apply(thisArg: Webpack, ...args: any[]): void;
  }
  module CopyWebpackPlugin { }
  export = CopyWebpackPlugin;
}