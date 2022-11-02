import MovieCard from './Movie-card';

function MoviesList() {
  return (
    <div className='d-flex space-between'>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
    </div>
  );
}

export default MoviesList;
