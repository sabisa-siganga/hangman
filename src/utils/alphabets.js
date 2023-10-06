// alphabets - to use to guess the randomly selected term from the array
export const alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

/**
 * Random selection of words from the array
 * @returns {string}
 */
export const randomTerm = () => {
  // terms list - terms randomly selected during the game
  const randomTermArray = [
    "software",
    "coverage",
    "store",
    "solutions",
    "zebra",
    "marble",
    "rhinoceros",
    "eyes",
    "carpot",
    "angels",
  ];

  // returning a random term from the array list
  return randomTermArray[Math.floor(Math.random() * randomTermArray.length)];
};
