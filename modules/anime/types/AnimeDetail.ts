interface AnimeDetail
{
    id: number,
    type: string,
    title: string,
    title_orig: string,
    other_title: string,
    year: string,
    kinopoisk_id: number,
    imdb_id: number,
    last_episode: number,
    episodes?: Episode[]
    worldart_link: string,
    link: string,
    last_season: number,
    translation: Translation, 
    shikimori_id: number,
    episodes_count: number,
    material_data: MaterialData,
    seasons: 
        {
            [number: string]: 
            {
                episodes: Episode[]
            }}
}

interface Translation
{
    id: number,
    title: string,
    type: string
}

interface MaterialData 
{
    description: string,
    genres: Array<string>,
    anime_kind:string,
    duration: number,
    anime_studios: Array<string>,
    rating_mpaa: string,
    poster_url: string,
}

interface Episode 
{
    link: string,
    screenshots: Array<string>
}

export { Episode, Translation }
export default AnimeDetail;