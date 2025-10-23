# Neavle UI

Angular workspace for the Neavle UI library and demo application. The project uses Angular 20 and Storybook 9 for component development and documentation.

## Prerequisites

- Node.js 18+ (22 LTS recommended)
- npm 9+

Install dependencies once:

```bash
npm install
```

## Development

- **App dev server**  
  ```bash
  npm start
  ```  
  Serves the demo application on `http://localhost:4200/` with live reload.

- **Storybook**  
  ```bash
  npx ng run ui:storybook
  ```  
  Launches the component explorer on `http://localhost:6006/` using the Angular builder configuration.

## Building

- **Application**  
  ```bash
  npm run build
  ```  
  Produces an optimized production build in `dist/neavle-ui`.

- **UI library package**  
  ```bash
  npx ng build ui
  ```  
  Emits the library artifacts to `dist/ui`.

- **Static Storybook**  
  ```bash
  npx ng run ui:build-storybook
  ```  
  Outputs a static Storybook bundle in `dist/storybook/ui`.

## Testing

Run unit tests with Karma:

```bash
npm test
```

## Useful CLI Commands

- Generate components, services, and more:
  ```bash
  ng generate component component-name
  ng generate service feature/service-name
  ```
- List all available schematics:
  ```bash
  ng generate --help
  ```

## Learning Resources

- [Angular CLI documentation](https://angular.dev/tools/cli)
- [Storybook for Angular docs](https://storybook.js.org/docs/angular)
