import {defineConfig, loadEnv, Plugin} from 'vite';
import * as path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
// @ts-ignore
export default ({mode}) => {
  const vars = loadEnv(mode, path.join(process.cwd(), '..'), '');
  const env: Record<string, string> = {};
  for (const key in vars) {
    if (key.startsWith('VITE') || key === 'DEBUG') {
      env[key] = vars[key];
    }
  }

  if (mode === 'development' && vars.PORT) {
    env.PORT = vars.PORT;
  }

  console.log(`\njoin link: http://localhost:${env['VITE_PORT']}/index.html\n`);

  return defineConfig({
    plugins: [
      tsconfigPaths(),
    ],
    define: {
      ['process.env']: env,
    },
    server: {
      port: +env.VITE_PORT || 1234,
    },
    base: './',
    build: {
      target: 'chrome115',
      sourcemap: false,
    },
  });
};