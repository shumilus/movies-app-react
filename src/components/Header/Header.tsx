import './Header.scss';
import Logo from '../Logo';
import MainTitle from '../MainTitle';
import Search from '../Search';
import AddMovie from '../AddMovie/AddMovie';

function Header() {
  return (
    <div className='header'>
      <div className='app-wrapper'>
        <div className='d-flex space-between align-center'>
          <Logo/>
          <AddMovie></AddMovie>
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
