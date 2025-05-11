import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import expo from "eslint-plugin-expo";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
	globalIgnores([
		"./node_modules",
		"./*.config.js",
		"./app-example",
		"./assets",
		"./ios",
		"./android",
	]),
	eslintConfigPrettier,
	{
		files: ["src/**/*.{js,mjs,cjs,ts,jsx,tsx}"],
		plugins: { js, expo },
		extends: ["js/recommended"],
	},
	{
		files: ["src/**/*.{js,mjs,cjs,ts,jsx,tsx}"],
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
	},
	tseslint.configs.recommended,
	{
		...reactPlugin.configs.flat.recommended,
		settings: {
			react: {
				version: "detect",
			},
		},
	},
	{
		rules: {
			"react/react-in-jsx-scope": "off",
			"sort-imports": [
				"off",
				{
					ignoreCase: false,
					ignoreDeclarationSort: false,
					ignoreMemberSort: false,
					memberSyntaxSortOrder: [
						"none",
						"all",
						"multiple",
						"single",
					],
					allowSeparatedGroups: false,
				},
			],
		},
	},
]);
