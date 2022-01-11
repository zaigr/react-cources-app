import { Logo } from './components/Logo/Logo';
import { Button } from '../common/Button/Button';

import './header.css';

function Header(props) {
  return (
    <header className='Header'>
      <div className='Header-logo'>
        <Logo />
      </div>
      <div className='Header-account'>
        <a className='Header-account-link' href='#'>
          David
        </a>
        <Button link='#' text='Logout' />
      </div>
    </header>
  );
}

export default Header;
