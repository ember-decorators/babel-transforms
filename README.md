# @ember-decorators/babel-transforms

[![Build Status](https://travis-ci.org/ember-decorators/babel-transforms.svg)](https://travis-ci.org/ember-decorators/babel-transforms)
[![npm version](https://badge.fury.io/js/%40ember-decorators%2Fbabel-transforms.svg)](https://badge.fury.io/js/%40ember-decorators%2Fbabel-transforms)
[![Greenkeeper badge](https://badges.greenkeeper.io/ember-decorators/babel-transforms.svg)](https://greenkeeper.io/)
[![dependencies Status](https://david-dm.org/ember-decorators/babel-transforms/status.svg)](https://david-dm.org/ember-decorators/babel-transforms)
[![devDependencies Status](https://david-dm.org/ember-decorators/babel-transforms/dev-status.svg)](https://david-dm.org/ember-decorators/babel-transforms?type=dev)

Configures the consuming ember-cli app's or addon's Babel transpiler for decorators.

## Installation

```
ember install @ember-decorators/babel-transforms
```

If you're developing an addon that exports decorators for the user, pass the `-S` option to save this as a `dependency` as opposed to the default `devDependency`:

```
ember install -S @ember-decorators/babel-transforms
```

This way the consuming app will be configured to be compatible with decorators.
