import { ImgHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {
  linkTo?: string;
  src: string;
  alt: string;
  width?: string;
}

export const Logo = ({ linkTo = '/', src, alt, width = '100%' }: LogoProps) => {
  return (
    <Link to={linkTo}>
      <img src={src} alt={alt} width={width} />
    </Link>
  );
};
