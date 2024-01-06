import React from 'react';
import imgLogo from '@/assets/logo.png';
import Link from 'next/link';
import classes from './main-header.module.css';
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';
import { usePathname } from 'next/navigation';
import NavLink from './nav-link';

export default function MainHeader () { 
  return (
    <>
        <MainHeaderBackground />
        <header className={classes.header}>
            <Link href="/" className={classes.logo}>
            {/* <img src={imgLogo.src} alt="Foodies app" /> */}
            <Image src={imgLogo} alt="Foodies app" priority />
            Next Level Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href='/meals'>Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href='/community'>Foodies Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
      </>
    
  );
}
