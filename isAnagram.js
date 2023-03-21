export function isAnagram(str1, str2) {
  const arr1 = str1.split("").sort();
  const arr2 = str2.split("").sort();
  return arr1.every((value, index) => value === arr2[index]);
}
