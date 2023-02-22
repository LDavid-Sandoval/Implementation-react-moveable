export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const fitType = ['contain', 'cover', '30%', 'auto']