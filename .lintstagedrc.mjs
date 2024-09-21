import path from "path"

// https://nextjs.org/docs/app/building-your-application/configuring/eslint#lint-staged
const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`

export default {
  "{**/*,*}.?(c|m)[jt]s?(x)": [
    buildEslintCommand,
    "prettier --write --ignore-unknown",
  ],
  "{**/*,*}.{?(s)css,html,json,y?(a)ml,md?(x)}": [
    "prettier --write --ignore-unknown",
  ],
}
