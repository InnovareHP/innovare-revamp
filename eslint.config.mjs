import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // your existing config
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // 👇 Add this block to ignore generated files
  {
    ignores: ["lib/generated/**"],
  },
];

export default eslintConfig;
