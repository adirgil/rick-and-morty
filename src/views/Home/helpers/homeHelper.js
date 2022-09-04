const getUnpopularCharacter = (characters = []) => {
  const unpopularCharacter = characters.reduce((prev, curr) =>
    prev.episode.length < curr.episode.length ? prev : curr
  );
  return unpopularCharacter;
};

const getSumOfEpisodes = (singleCharacterResults = []) => {
  let sum = 0;
  for (const result of singleCharacterResults) {
    const { episode } = result;
    sum += episode.length;
  }
  return sum;
};

export { getUnpopularCharacter, getSumOfEpisodes };
