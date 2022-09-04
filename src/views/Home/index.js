import React, { useState, useEffect } from "react";
import UnpopularCharacter from "./components/unpopularCharacter";
import PopularityGraph from "./components/popularityGraph";
import "./style.scss";
import {
  getLocationData,
  getAllCharactersOfLocation,
  getMultipleCharacters,
} from "../../api/rickAndMorty";
import { getUnpopularCharacter, getSumOfEpisodes } from "./helpers/homeHelper";

const charactersToGet = [
  "Rick Sanchez",
  "Summer Smith",
  "Morty Smith",
  "Beth Smith",
  "Jerry Smith",
];

export default function Home() {
  const [unpopularCharacter, setUnpopularCharacter] = useState({});
  const [part1Loader, setPart1Loader] = useState(false);
  const [CharactersData, setCharactersData] = useState([]);
  const [part2Loader, setPart2Loader] = useState(false);

  useEffect(() => {
    getC137UnpopularCharacter();
    getListOfPopularity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getC137UnpopularCharacter = async () => {
    try {
      setPart1Loader(true);
      const filterBy = "name";
      const filterLocation = "C-137";
      const data = await getLocationData(filterBy, filterLocation);
      const { residents, dimension, name: locationName } = data;
      const characters = await getAllCharactersOfLocation(residents);
      const unpopularCharacter = getUnpopularCharacter(characters);
      const { name, episode } = unpopularCharacter;
      const finalCharcter = {
        name,
        locationName,
        dimension,
        popularity: episode.length,
      };
      setUnpopularCharacter(finalCharcter);
    } catch (error) {
      console.error("error: ", error);
    } finally {
      setPart1Loader(false);
    }
  };

  const getListOfPopularity = async () => {
    const charactersData = await getCharacters();
    const dataForChart = [];
    for (let character of charactersData) {
      const sumOfEpisodes = getSumOfEpisodes(character?.results);
      const { name } = character?.results[0];
      const relevantDataObj = {
        name,
        value: sumOfEpisodes,
      };
      dataForChart.push(relevantDataObj);
    }
    setCharactersData(dataForChart);
  };

  const getCharacters = async () => {
    try {
      setPart2Loader(true);
      const filterBy = "name";
      return await getMultipleCharacters(filterBy, charactersToGet);
    } catch (error) {
      console.error("error: ", error);
    } finally {
      setPart2Loader(false);
    }
  };

  return (
    <div id="home">
      <UnpopularCharacter
        unpopularCharacter={unpopularCharacter}
        loading={part1Loader}
      />
      <PopularityGraph CharactersData={CharactersData} loading={part2Loader} />
    </div>
  );
}
