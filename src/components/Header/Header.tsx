import './Header.scss';
import Logo from '../Logo';
import AddMovieButton from '../AddMovieButton';
import MainTitle from '../MainTitle';
import Search from '../Search';

function Header() {
  return (
    <div className='header'>
      <div className='app-wrapper'>
        <div className='d-flex space-between align-center'>
          <Logo/>
          <AddMovieButton title='+ add movie'/>
        </div>
        <div className='title-container'>
          <MainTitle text='find your movie'/>
        </div>
        <div className='search-container'>
          <Search/>
        </div>
      </div>
    </div>
  );
}

export default Header;
