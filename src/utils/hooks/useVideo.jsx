import { getVideo } from 'Api/Api';
import { useEffect, useState } from 'react';

export const useVideo = movieId => {
  const [video, setVideo] = useState([]);
  const [trailer, setTrailer] = useState([]);

  useEffect(() => {
    if (movieId)
      getVideo(movieId).then(response => {
        setVideo([{ ...response }]);

        if (response.videos && response.videos.results)
        {
          const trailer = response.videos.results.find(
            vid => vid.name === 'Official Trailer'
          );

          setTrailer(trailer ? trailer : response.videos.results[0]);
        }
      });
  }, [movieId]);

  return { video, trailer };
};
