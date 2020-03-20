import remark from "remark";
import recommended from "remark-preset-lint-recommended";
import remarkHTML from "remark-html";

const toHTML = contentMD =>
  remark()
    .use(recommended)
    .use(remarkHTML)
    .processSync(contentMD)
    .toString();

export default toHTML;
