import * as tsConfigPaths from 'tsconfig-paths'

const configLoaderResult = tsConfigPaths.loadConfig();

if (configLoaderResult.resultType === 'success') {
  console.log('Base URL:', configLoaderResult.baseUrl);
  console.log('Paths:', configLoaderResult.paths);
} else {
  console.error('Could not load tsconfig.json');
}