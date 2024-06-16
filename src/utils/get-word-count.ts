export const getWordCount = (text: string): number => {
  // Remove extra whitespace (including new lines, tabs, etc.) and split by spaces
  const words = text.trim().split(/\s+/);
  // Count the number of words
  return words.length;
};
