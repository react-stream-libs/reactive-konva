declare module 'react-static-webpack-plugin' {
  import {
    Plugin, Webpack,
  } from 'webpack';
  class ReactStaticWebpackPlugin implements Plugin{
    constructor (args: {
      routes: string,
      template: string,
    })
    apply(thisArg: Webpack, ...args: any[]): void;
  }
  module ReactStaticWebpackPlugin { }
  export = ReactStaticWebpackPlugin;
}