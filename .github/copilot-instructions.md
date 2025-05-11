# Copilot Instructions for palmaBooks-native Project

### Project Overview
- React Native project using **Expo** with **TypeScript**.
- Navigation handled via **Expo Router**.
- Styling implemented using **Tailwind CSS** through **NativeWind**.

### Development Environment & Dependencies
- Use **React 19** and **React Native 0.79** APIs.
- Use **Expo SDK ~53.0.0-preview.7** along with associated Expo packages.
- Maintain the existing **babel.config.js**, which includes NativeWind and module-resolver plugins.
- Use **ESLint** with the configuration specified in `eslint.config.mjs`.
- Run tests using **Jest** with the `"jest-expo"` preset.

### Coding Conventions
- Always use **functional components** and **React hooks**.
- Import modules from the `src` directory using the alias `"@"`.
- Follow existing code style:
  - Indentation: tabs
  - Tab width: 4 spaces
- Respect existing project structure and naming conventions.
- Maintain usage of **NativeWind presets** and **Tailwind CSS classes** for styling.
- Follow commit standards and run **pre-commit hooks configured with Husky**.

### Navigation & Routing
- Use **Expo Router Stack** and screen definitions, referencing `src/routes/_layout.tsx` as the example.
- For forms, use **React Native components** and hooks as illustrated in `src/routes/FormExample.tsx`.

### Native Platforms Configuration
- Android and iOS native code should follow existing Gradle and Xcode project settings:
  - iOS Deployment Target: **15.1**
  - Swift Version: **5.0**
  - Use Expo modules and React Native community autolinking as configured.
- Use the existing **Metro bundler configuration** integrated with NativeWind.

### Scripts & Tooling
- Utilize existing `package.json` scripts for:
  - Linting
  - Formatting
  - Building
  - Testing

### Additional Notes
- When generating or modifying code, always align with the current architecture and patterns.
- Confirm usage of all dependencies and tools as currently configured in the project to ensure consistency.