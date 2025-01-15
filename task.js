function findUniq(arr) {
  // do magic
  let obj = {};
  for (const i of arr) {
    obj[i] ? obj[i]++ : (obj[i] = 1);
  }

  console.log(obj);

  return Object.keys(obj).filter((e) => obj[e] === 1)[0];
}

console.log(findUniq([3, 0, 0]));
