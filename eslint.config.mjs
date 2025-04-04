import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.config({
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "react/no-unescaped-entities": "off",
      "no-var": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "jsx-a11y/alt-text": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "prefer-const": "off",
      "react-hooks/exhaustive-deps": "off",
      "@next/next/no-img-element":"off",
    },
  }),
];

export default eslintConfig;
