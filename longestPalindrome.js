function longestPalindrome(s) {
  if (s.length < 2) {
    return s;
  }

  let start = 0;
  let maxLength = 1;
  function fn(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        start = left;
        maxLength = right - left + 1;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    // 适配 abbc 中 bb 的位置
    fn(i, i + 1);
    // 适配 babad 中 axa 的位置
    fn(i - 1, i + 1);
  }
  return s.substring(start, start + maxLength);
}

console.log(longestPalindrome("babad") === "bab");
console.log(longestPalindrome("cbbd") === "bb");
