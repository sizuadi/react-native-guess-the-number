import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }, 
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './']
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs', '.json']
      }
    }
  }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];