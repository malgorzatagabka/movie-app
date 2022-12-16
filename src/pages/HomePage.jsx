import { useTrending } from 'utils/hooks/useTrending';
import { useLocation } from 'react-router-dom';
import { Container, Wrapper, Image, StyledLink, HeroContent, Hero } from './home.styled';

const HomePage = () => {
  const location = useLocation();
  const { trendingMovies, selectedMovie } = useTrending();

  return (
    <main>
      <Hero style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${selectedMovie.backdrop_path
          })`
      }}>
        <HeroContent>
          <h1>{selectedMovie.title}</h1>
          <p> {selectedMovie.overview ? selectedMovie.overview : null}</p>
        </HeroContent>
      </Hero>
      <Container>
        {trendingMovies.map(movie => (
          <Wrapper key={movie.id}>
            <StyledLink to={`movies/${movie.id}`} state={{ from: location }}>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.title}`}
              >
              </Image>
              <h5>{movie.title} </h5>
            </StyledLink>
          </Wrapper>
        ))}
      </Container>
    </main>
  );
};

export default HomePage;
