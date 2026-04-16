export async function getLatestGames() {
  const LATEST_GAMES = "https://rickandmortyapi.com/api/character";

  const rawData = await fetch(LATEST_GAMES);
  const json = await rawData.json();

  const { results } = json;

  return results.map((item) => {
    const { id, name, status, species, gender, image, created, episode } = item;

    return {
      description: `${status} - ${species} - ${gender}`,
      releaseDate: created,
      score: episode.length,
      id: String(id),
      title: name,
      image,
    };
  });
}

export async function getGameDetails(id) {
  const GAME_DETAILS = `https://rickandmortyapi.com/api/character/${id}`;

  const rawData = await fetch(GAME_DETAILS);
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
      score: episode.length,
      date: created,
      publicationName: origin?.name ?? "Unknown origin",
      author: location?.name ?? `Character ${index + 1}`,
    };
  });

  return {
    img: image,
    title: name,
    id: String(id),
    description: `${status} - ${species} - ${gender}`,
    score: episode.length,
    reviews,
  };
}
