import { getTrending } from "Api/Api";
import { useEffect, useState } from "react";

export const useTrending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([])

  useEffect(() => {
    getTrending().then(response => {
      setTrendingMovies([...response.results]);
      setSelectedMovie(response.results[0])
    });
  }, []);

  return { trendingMovies, selectedMovie };
};
