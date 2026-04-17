export async function getCharacters() {
  const CHARACTERS = "https://rickandmortyapi.com/api/character";

  const rawData = await fetch(CHARACTERS);
  const json = await rawData.json();

  const { results } = json;

  return results.map((item) => {
    const { id, name, status, species, gender, image, created, episode } = item;

    return {
      description: `${status} - ${species} - ${gender}`,
      releaseDate: created,
      episode: episode.length,
      id: String(id),
      title: name,
      name,
      status,
      species,
      gender,
      image,
      img: image,
    };
  });
}

export async function getCharacterDetails(id) {
  const CHARACTER_DETAILS = `https://rickandmortyapi.com/api/character/${id}`;

  const rawData = await fetch(CHARACTER_DETAILS);
  const json = await rawData.json();

  const {
    name,
    status,
    species,
    gender,
    image,
    created,
    episode,
    origin,
    location,
  } = json;

  const reviews = episode.slice(0, 5).map((episodeUrl, index) => {
    return {
      quote: `Appears in ${episodeUrl.split("/").pop()}`,
      episode: episode.length,
      date: created,
      publicationName: origin?.name ?? "Unknown origin",
      author: location?.name ?? `Character ${index + 1}`,
    };
  });

  return {
    img: image,
    image,
    title: name,
    name,
    id: String(id),
    description: `${status} - ${species} - ${gender}`,
    releaseDate: created,
    episode: episode.length,
    status,
    species,
    gender,
    origin: origin?.name ?? "Unknown origin",
    location: location?.name ?? "Unknown location",
    reviews,
  };
}
