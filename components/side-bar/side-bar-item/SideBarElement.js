
import { Icon } from '@iconify/react';
import styles from '../SideBar.module.css'
import Link from 'next/link'


export default function SideBarElement({ id, icon, link }) {
    return (
        <Link key={id} href={`${link}`}>
            <a className={styles.sideMenuItemContainer}>
                <div className={styles.iconBox}>
                    <Icon icon={icon} className={styles.sideBarElement} />
                </div>
            </a>
        </Link>
    )
}