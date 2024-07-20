import React from 'react';
import Logo from '../../../public/img/logo.png';

export default function ApplicationLogo({ className }: { className?: string }) {
  return (
  <img src={Logo} alt="" {...{className}} />
  );
}
