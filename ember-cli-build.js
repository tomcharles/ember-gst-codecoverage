'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    babel: {
      sourceMaps: 'inline',
      plugins: [...require('ember-cli-code-coverage').buildBabelPlugin()],
    },
    sourceMaps: {
      enabled: true,
      extensions: ['js']
    },
    'ember-cli-babel': { enableTypeScriptTransform: true },
    'ember-template-imports': {
      inline_source_map: true,
    },
  });

  return app.toTree();
};
