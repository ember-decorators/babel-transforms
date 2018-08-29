'use strict';

module.exports = function() {
  return {
    useYarn: true,
    scenarios: [
      {
        name: 'ember-cli-babel-6',
        npm: {
          dependencies: {
            'ember-cli-babel': '^6.6.0'
          }
        }
      },
      {
        name: 'ember-cli-babel-7',
        npm: {
          dependencies: {}
        }
      }
    ]
  };
};
