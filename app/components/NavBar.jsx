'use client';

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '@/public/assets/logos/banner_addtext.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMarsDouble, faVenusMars, faHome } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons'




const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className="container">
            <header className="d-flex justify-content-between align-items-center py-3 mb-4 border-bottom">
            <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <Image
                    src={logo}
                    width={400}
                />
            </Link>

            <ul className="nav nav-pills text-uppercase">
                <li className="nav-item">
                    <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Home</Link>
                </li>
                <li className="nav-item">
                    <Link href="/" className={`nav-link ${pathname === '/pricing' ? 'active' : ''}`}><FontAwesomeIcon icon={faVenusMars}></FontAwesomeIcon> Straight servers</Link>
                </li>
                <li className="nav-item">
                    <Link href="/" className={`nav-link ${pathname === '/features' ? 'active' : ''}`}><FontAwesomeIcon icon={faMarsDouble}></FontAwesomeIcon> Gay servers</Link>
                </li>
            </ul>
            <div className="col-md-3 text-end">
                <Link href="/api/auth/discord" className="btn btn-outline-light discord me-2"><FontAwesomeIcon icon={faDiscord} /> Login</Link>
            </div>
        </header>
    </div>
    )
}

export default Navbar;