const randomNumberGenerator = () => {
  const min = 0;
  const max = 11;

  const randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
};

export default randomNumberGenerator;
