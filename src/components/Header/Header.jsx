import Logo from './components/Logo/Logo';
import Button from '../common/Button/Button';
import Link from '../common/Link/Link';
import './Header.css';

function Header(props) {
  return (
    <div className='Header'>
      <div className='Header-logo'>
        <Logo />
      </div>
      <div className='Header-account'>
        <a className='Header-account-link' href='#'>
          David
        </a>
        <Button link='#' text='Logout' />
      </div>
    </div>
  );
}

export default Header;
