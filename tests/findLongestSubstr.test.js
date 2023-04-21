const findLongestSubstr = require("../findLongestSubstr");

describe("findLongestSubstr()", () => {
  it("returns 0 for empty string", () => {
    const result = findLongestSubstr("");
    expect(result).toEqual(0);
  });

  it("returns 1 for single character string", () => {
    const result = findLongestSubstr("a");
    expect(result).toEqual(1);
  });

  it("returns the length of the string for unique characters", () => {
    const result = findLongestSubstr("abcdefg");
    expect(result).toEqual(7);
  });

  it("returns the length of the substring without repeating characters", () => {
    const result = findLongestSubstr("abcabcbb");
    expect(result).toEqual(3);
  });

  it("returns the length of the substring without repeating characters", () => {
    const result = findLongestSubstr("bbbbb");
    expect(result).toEqual(1);
  });

  it("returns the length of the substring without repeating characters", () => {
    const result = findLongestSubstr("pwwkew");
    expect(result).toEqual(3);
  });

  it("returns the length of the substring without repeating characters", () => {
    const result = findLongestSubstr("aab");
    expect(result).toEqual(2);
  });

  it("returns the length of the substring without repeating characters", () => {
    const result = findLongestSubstr("abba");
    expect(result).toEqual(2);
  });
});
