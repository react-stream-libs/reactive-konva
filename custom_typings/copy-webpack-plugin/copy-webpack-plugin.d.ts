declare module 'copy-webpack-plugin' {
  import {
    Plugin, Compiler,
  } from 'webpack';
  type CopyArgType = {
    from: string, to: string,
  };
  class CopyWebpackPlugin implements Plugin {
    constructor (args: Array<CopyArgType>)
    apply(compiler: Compiler): void;
  }
  module CopyWebpackPlugin { }
  export = CopyWebpackPlugin;
}