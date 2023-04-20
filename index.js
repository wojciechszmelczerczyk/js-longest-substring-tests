function findLongestSubstring(str) {
  let maxLength = 0;
  let currentLength = 0;
  let seenChars = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seenChars[char] >= start) {
      start = seenChars[char] + 1;
      currentLength = i - start + 1;
    } else {
      currentLength++;
    }

    seenChars[char] = i;

    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
}
