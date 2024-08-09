export function parseBibTeX(inputString) {
  const idMatch = inputString.match(/@inproceedings\{(.+?),/s);
  const titleMatch = inputString.match(/title = \{(.+?)\},/s);
  const authorMatch = inputString.match(/author = \{(.+?)\},/s);
  const yearMatch = inputString.match(/year = \{(.+?)\},/s);
  const doiMatch = inputString.match(/doi = \{(.+?)\},/s);
  const booktitleMatch = inputString.match(/booktitle = \{(.+?)\},/s);

  const uniqueId = idMatch ? idMatch[1] : "unique_id";
  const title = titleMatch ? titleMatch[1].replace(/\n/g, " ") : "";
  const author = authorMatch ? authorMatch[1].replace(/\n/g, " ") : "";
  const year = yearMatch ? yearMatch[1] : "";
  const doi = doiMatch ? doiMatch[1] : "";
  const booktitle = booktitleMatch ? booktitleMatch[1].replace(/\n/g, " ") : "";

  return `@inproceedings{${uniqueId},
    \ttitle     = {${title}},
    \tauthor    = {${author}},
    \tbooktitle = {${booktitle}},
    \turl       = {${doi}},
    \tyear      = {${year}}
}`;
}

export function formatDate(dateString) {
  const [year, month] = dateString.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, 1, 12));
  const options = { year: "numeric", month: "long" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  return formattedDate.replace(/ (\d{4})$/, ", $1");
}

export function formatStringToCamelCase(input) {
  const formatted = input.replace(/([a-z])([A-Z])/g, "$1 $2");

  return formatted
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
