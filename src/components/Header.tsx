import { HeaderStyles } from '../styles/header';
import Logo from '../assets/Logo.svg';

export function Header() {
  return (
    <HeaderStyles>
      <img src={Logo} alt='logo' />
    </HeaderStyles>
  );
}
