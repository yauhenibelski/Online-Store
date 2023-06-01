import { Outlet } from 'react-router-dom';
import SocialLink from '../social_media_button/social-media-button_link';
import classes from './header.module.scss';

function Header() {
  return (
    <>
      <div className={classes.headerWrapper}>
        <header>
          <div>
            <span>Mon-Thu: </span>
          9:00 AM - 5:30 PM
          </div>
          <div>
            <span itemProp="streetAddress">
            Visit our showroom in 1234 Street Adress City Address, 1234
            </span>
          Contact Us
          </div>
          <div style={{ display: 'flex' }}>
         Call Us:
            <span
              itemProp="telephone"
              style={{ color: 'white' }}
            >
            (00) 1234 5678
            </span>
            <SocialLink value={'facebook'}/>
            <SocialLink value={'instagram'}/>
          </div>
        </header>
      </div>
      <Outlet/>
    </>
  );
}

export default Header;
