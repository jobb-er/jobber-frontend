const removeDuplicateWhitespaces = (str: string): string =>
  str.replace(/\s+/g, " ").trim();

export default removeDuplicateWhitespaces;
