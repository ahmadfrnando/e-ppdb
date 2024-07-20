import { Link } from '@inertiajs/react';
import React from 'react';
import Logo from "../../../public/img/logo.png";

export default function AuthenticationCardLogo() {
  return (
    <Link href="/">
      <img src={Logo} alt="" className='w-32' />
    </Link>
  );
}
