import path from "path"

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`

export default {
  "{**/*,*}.{js?(x),ts?(x),cjs,mjs}": [
    buildEslintCommand,
    "prettier --write --ignore-unknown",
  ],
  "{**/*,*}.{?(s)css,html,json,md?(x),y?(a)ml}": [
    "prettier --write --ignore-unknown",
  ],
}
