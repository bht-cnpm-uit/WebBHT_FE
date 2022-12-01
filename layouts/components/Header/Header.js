import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import NavLink from '../../../components/NavLink';
import Button from '../../../components/Button';

const MENU = [
    {
        href: '/',
        content: 'Trang chủ',
    },
    {
        href: '/about',
        content: 'Giới thiệu',
    },
    {
        href: '/document',
        content: 'Tài liệu',
    },
];

function Header() {
    return (
        <header className="fixed flex h-h-header w-full items-center justify-between bg-bg px-p-body shadow">
            {/* LOGO */}
            <div className="flex flex-1 items-center">
                <img src="/images/logo.png" className="h-11 w-11" alt="logo" />
            </div>

            {/* MENU */}
            <nav>
                {MENU.map((menu, index) => (
                    <NavLink
                        key={index}
                        href={menu.href}
                        className="px-3 py-2 font-semibold hover:text-primary [&.active]:text-primary"
                    >
                        {menu.content}
                    </NavLink>
                ))}
            </nav>

            {/* ACTION BUTTON GROUP */}
            <div className="flex flex-1 justify-end space-x-2">
                <Button
                    square
                    rounded
                    href="https://fb.com/bhtcnpm"
                    className="!bg-blue-500 hover:!bg-blue-600"
                >
                    <FontAwesomeIcon icon={faFacebookF} />
                </Button>
                <Button
                    square
                    rounded
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    className="!bg-red-500 hover:!bg-red-600"
                >
                    <FontAwesomeIcon icon={faYoutube} />
                </Button>
                <Button
                    square
                    rounded
                    href="https://www.instagram.com/english.with.bht"
                    className="!bg-purple-500 hover:!bg-purple-600"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </Button>
            </div>
        </header>
    );
}

export default Header;
