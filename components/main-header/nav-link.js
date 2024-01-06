'use client';
import React from 'react';
import Link from 'next/link';
import navClasses from './nav-link.module.css';
import { usePathname } from 'next/navigation';

export default function NavLink ({href, children}) {
    const path = usePathname();
  return (
    <Link
      href={href}
      className={path.startsWith (href) ? navClasses.active : undefined}
    >
        {children}
    </Link>
  );
}