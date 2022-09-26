import { useEffect, useState } from "react";
import axios from "axios";


function useFetch(id) {
    const [movieData, setMovieData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const [fetched, setFetched] = useState(false);
    const [char, setChar] = useState([]);

    useEffect(() => {
        const getMovie = async () => {
            try {
                const { data } = await axios.get(`https://swapi.dev/api/films/${id}`);
                setMovieData(data);
                setFetched(true)
            } catch (error) {
                setIsError(true)
            }
        };
        getMovie();
    }, []);

    useEffect(() => {
        const getCharacters = async () => {
            try {
                if (fetched) {
                    let arrr = []
                    for (let i = 0; i < movieData.characters.length; i++) {
                        const { data } = await axios.get(`${movieData.characters[i]}`);
                        arrr.push(data)
                    }
                    setChar(arrr)
                    setIsLoading(false)
                }
            } catch (error) {
                setIsError(true)
            }
        };
        getCharacters();
    }, [fetched])

    return { movieData, char, isLoading, isError }

}

export default useFetch