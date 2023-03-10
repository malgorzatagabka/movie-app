import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDetails } from "utils/hooks/useDetails";
import { BackLink } from "components/BackLink";
import { Container, Wrapper,MovieCard } from "./details.styled";
import { StyledLink } from "./home.styled";
import Loader from "components/Loader/Loader";
import Youtube from "react-youtube";
import { useVideo } from "utils/hooks/useVideo";


const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { movie } = useDetails(movieId);
  const location = useLocation();
  const { trailer} = useVideo(movieId);
  const backLinkHref = location.state?.from ?? '/movies';

  if (!movie) return <Loader />

  return (
    
    <Container>
      <BackLink to={backLinkHref}>Back to movie list</BackLink>
      <MovieCard> 
    <Youtube videoId={trailer.key}/>
         <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.title}`} width="240"
        />
        <Wrapper> 
        <h2>{movie.title}, {movie.release_date.slice(0, 4)}</h2>
        <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
        <h3>Overview</h3>
       <p>{movie.overview}</p>
         <h3>Genre</h3>
        {`${movie.genres.map(genre => genre.name).join(' / ')}`}
        </Wrapper>  
         </MovieCard>
        <h3>Additional Information</h3>
        <ul>
          <li>
            <StyledLink to="cast">Cast</StyledLink>
          </li>
          <li >
            <StyledLink to="reviews">Reviews</StyledLink>
          </li>
        </ul>
   
      <Suspense fallback= {<Loader/>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetailsPage;


