import './Header.scss';
import Logo from '../../components/Logo';
import AddMovieButton from '../../components/Add-movie-button';
import MainTitle from '../../components/Main-title';
import Search from '../../components/Search';

function Header() {
  return (
    <div className='header'>
      <div className='app-wrapper'>
        <div className='d-flex space-between align-center'>
          <Logo/>
          <AddMovieButton/>
        </div>
        <div className='title-container'>
          <MainTitle/>
        </div>
        <div className='search-container'>
          <Search/>
        </div>
      </div>
    </div>
  );
}

export default Header;
