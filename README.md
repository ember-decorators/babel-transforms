# @ember-decorators/babel-transforms

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
