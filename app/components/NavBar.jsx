import React from 'react';
import Image from 'next/image';
import logo from '@/public/assets/logos/banner_addtext.webp'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMarsDouble, faVenusMars, faHome, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { getSession } from "@/lib/lib"
import Link from 'next/link'


export default async function Navbar(){

    const session = await getSession();
    const userId = session?.user?.userId;
    const avatarHash = session?.user?.avatarHash;
    const username = session?.user?.name;
    return (
        <div className="container">
            <header className="d-flex justify-content-between align-items-center py-3 mb-4 border-bottom">
            <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto Link-body-emphasis text-decoration-none">
                <Image
                    src={logo}
                    width={400}
                />
            </Link>
            <div className='col-md-8'>
            <ul className="nav nav-pills text-uppercase">
                <li className="nav-item">
                    <Link href="/" className="nav-link"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Home</Link>
                </li>
                <li className="nav-item">
                    <Link href="/" className="nav-link"><FontAwesomeIcon icon={faVenusMars}></FontAwesomeIcon> Straight servers</Link>
                </li>
                <li className="nav-item">
                    <Link href="/" className="nav-link"><FontAwesomeIcon icon={faMarsDouble}></FontAwesomeIcon> Gay servers</Link>
                </li>
                <li className="nav-item">
                    <Link href="/addbot" className="nav-link"><FontAwesomeIcon icon={faRobot}></FontAwesomeIcon> Add our bot</Link>
                </li>
            </ul>
            </div>
            {session ? (
            <div className="col-md-1 text-end">
                <Image
                    src={`https://cdn.discordapp.com/avatars/${userId}/${avatarHash}`}
                    width={50}
                    height={50}
                    alt={`${username}`}
                    className={styles.profile}
                />
            </div>
            ) : (
            <div className="col-md-3 text-end">
                <Link href="/api/auth/discord" className="btn btn-outline-light discord me-2"><FontAwesomeIcon icon={faDiscord} /> Login</Link>
            </div>
            )}
            
        </header>
    </div>
    )
}