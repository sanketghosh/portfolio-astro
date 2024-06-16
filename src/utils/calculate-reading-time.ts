export const calculateReadingTime = (words: number): string => {
  // Average reading speed in words per minute
  const wordsPerMinute = 200;

  // Calculate reading time in minutes
  const minutes = Math.ceil(words / wordsPerMinute);

  // Return the reading time formatted
  return `${minutes} ${minutes > 1 ? "mins" : "min"} read`;
};
