# threejs-minimal

A minimal web project needed to run three.js experiments.

ES Modules. Hot reloading during development.

Builds with Webpack 5, intentionally using as many defaults as possible for smallest configuration file.

## Tree-shaking

Tree-shaking doesn't work well with Three.js without extra work.

After playing with the various workarounds, I decided to just bring in the whole library and not bother trying to tree-shake.

Workarounds I tried:

- There's a Webpack 4 plugin called [three-minifier plugin](https://github.com/yushijinhun/three-minifier) and [backstory](https://github.com/mrdoob/three.js/issues/16059) for why the plugin is needed. Decided to avoid this extra complexity.

- Then tried optimizing directly with imports like this: `import { Scene } from 'three/src/scenes/Scene';`. This worked from a tree-shaking perspective, but...

- ... after getting the Three.js Hello World app running, the size of the import was getting close to the whole library anyhow, and doing thee manual imports wasn't a great developer experience.

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
