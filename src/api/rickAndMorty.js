const host = "https://rickandmortyapi.com/api/";

const getLocationData = async (filterBy, locationFilter) => {
  const url = `${host}location/?${filterBy}=${locationFilter}`;
  const result = await fetch(url);
  const locationC137 = await result.json();
  return locationC137.results[0];
};

const getAllCharactersOfLocation = async (residents) => {
  const characters = [];
  for (const resident of residents) {
    const singleCall = fetch(resident).then((res) => {
      return res.json();
    });
    characters.push(singleCall);
  }
  return await Promise.all(characters);
};

const getMultipleCharacters = async (filterBy, listOfCharacters) => {
  const characters = [];
  for (const character of listOfCharacters) {
    const singleCall = fetch(`${host}character/?${filterBy}=${character}`).then(
      (res) => {
        return res.json();
      }
    );
    characters.push(singleCall);
  }
  const data = await Promise.all(characters);
  return data;
};

export { getLocationData, getAllCharactersOfLocation, getMultipleCharacters };
