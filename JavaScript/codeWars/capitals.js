let capitals = word => {
  const ans = [];
  word.split('').map((letter, index, array) => {
    if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
      ans.push(index);
    }
  });
  return ans;
};

console.log(capitals('CodEWaRs'));
