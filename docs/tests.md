# Tests

## Description

Table below represent [`findLongestSubstr()`](../findLongestSubstr.js) test cases.

| Input        | Expected Output | Output Description                                                                                     |
| ------------ | --------------- | ------------------------------------------------------------------------------------------------------ |
| `''`         | `0`             | Length of the empty string is 0 characters.                                                            |
| `'a'`        | `1`             | Length of the longest substring without repeating characters is `1`, because it's only contain 1 char. |
| `'abcdefg'`  | `7`             | In this case longest unique substring is whole string.                                                 |
| `'abcabcbb'` | `3`             | The longest unique substrings are `abc` and `abc`.                                                     |
| `'bbbbb'`    | `1`             | The longest unique substring has just length of `1`, because string contains of same letter.           |
| `'pwwkew'`   | `3`             | The longest unique substring is `kew`.                                                                 |
| `'aab'`      | `2`             | The longest unique substring is `aa`.                                                                  |
| `'abba'`     | `2`             | The longest unique substrings are `ab` and `ba`.                                                       |
