import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import path from 'path'
import pkg from '../../package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

const plugins = [
  json(),
  nodeResolve({ extensions }),
  commonjs(),
  babel({
    extensions,
    babelHelpers: 'bundled',
  }),
  terser(),
]

const VERSION = 'v1'
const rootDir = path.resolve(__dirname, '..', '..')
const input = path.resolve(rootDir, 'packages', VERSION, 'index.ts')
const outputDir = path.resolve(rootDir, 'dist', VERSION)

export default [
  {
    input,
    external: [
      Object.keys(pkg.dependencies || {}),
      Object.keys(pkg.peerDependencies || {}),
    ].flat(),
    output: [
      {
        file: path.resolve(outputDir, 'index.es.js'),
        format: 'esm',
      },
      {
        file: path.resolve(outputDir, 'index.js'),
        format: 'cjs',
      },
    ],
    plugins,
  },
  {
    input,
    output: [
      {
        name: pkg.name,
        file: path.resolve(outputDir, 'index.umd.js'),
        format: 'umd',
      },
    ],
    plugins,
  },
]
