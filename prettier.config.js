module.exports = {
  singleQuote: true,
  printWidth: 100,
  arrowParens: "always",
  bracketSameLine: true,
  bracketSpacing: true,
  embeddedLanguageFormatting: "auto",
  endOfLine: "lf",
  htmlWhitespaceSensitivity: "css",
  insertPragma: false,
  jsxSingleQuote: false,
  proseWrap: "preserve",
  quoteProps: "as-needed",

  tabWidth: 2,
  vueIndentScriptAndStyle: false,
  disableLanguages: [],

  tailwindConfig: "./tailwind.config.js",
  plugins: ["prettier-plugin-tailwindcss"],
};