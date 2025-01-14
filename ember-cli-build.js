'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-cli-babel': { enableTypeScriptTransform: true },
    plugins: [...require('ember-cli-code-coverage').buildBabelPlugin()],
  });

  return app.toTree();
};
