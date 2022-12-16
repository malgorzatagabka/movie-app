import { useLocation } from 'react-router-dom';
import Loader from './Loader/Loader';
import { Link } from './movies.styled';
import { Image, Container } from 'pages/home.styled';


const Movies = ({ movies }) => {
  const location = useLocation();

  if (!movies) return <Loader />;

  return (
    <Container>
      
      {movies.map(movie => {
        return (
          <div key={movie.id}>
           
            <Link to={`${movie.id}`} state={{ from: location }}>
               <Image
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path ? movie.poster_path : null}`} alt={`${movie.title}`}
              >
              </Image>
              <h5>{movie.title} </h5>
            </Link>
          </div>
        );
      })}
    </Container>
  );
};
export default Movies;
