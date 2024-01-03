import type { Configuration } from 'webpack';
import type { IBuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: IBuildOptions): Configuration {
  const { mode, paths, isDev } = options;
  const { build, entry, html } = paths;

  return {
    mode,
    entry,
    devtool: isDev ? 'inline-source-map' : undefined,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    output: {
      filename: '[name].[contenthash].js',
      path: build,
      clean: true,
      publicPath: '/',
    },
    plugins: buildPlugins(html, isDev),
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
