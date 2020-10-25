# threejs-minimal

A minimal web project needed to run three.js experiments.

ES Modules. Hot reloading during development.

Builds with Webpack 5, intentionally using as many defaults as possible for smallest configuration file.

Tree-shaking doesn't work well with Three.js without extra work. There's a Webpack 4 plugin called [three-minifier plugin](https://github.com/yushijinhun/three-minifier) and [backstory](https://github.com/mrdoob/three.js/issues/16059) for why plugin is needed.

Instead I decided to change imports to use three source directly instead of full library to avoid the extra complexity.

In other words, using this:

    // bring in just what you need
    import { Scene } from '../node_modules/three/src/scenes/Scene'; 

instead of this:

    // brings in whole 500k library
    import { Scene } from 'three';

## Usage

### Development server

```bash
npm start
```

You can view the development server at `localhost:8080`.

### Production build

```bash
npm run build
```

The deploy ends up in your `dist` folder.

## Author

- [Brian Gershon](https://www.briangershon.com)
