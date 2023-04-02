import classes from './social-media-button_link.module.scss';
import instagramLogo from './img/instagram.svg';
import facebookLogo from './img/facebook.svg';

type Social = {
  value: 'facebook' | 'instagram',
}

function SocialLink({ value }: Social) {
  return (
    <a href={`https://www.${value}.com`}>
      <img
        src={value === 'facebook' ? facebookLogo : instagramLogo}
        className={classes.link}
        alt={value}
      />
    </a>
  );
}

export default SocialLink;
