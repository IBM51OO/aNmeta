import AnimeDetailDb from "./AnimeDetailDb";

interface AnimeTopics 
{
    topByDay: AnimeDetailDb[],
    topByWeek: AnimeDetailDb[],
    topByMonth: AnimeDetailDb[],
}

export default AnimeTopics;