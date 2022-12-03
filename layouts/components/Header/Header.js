import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import NavLink from '../../../components/NavLink';
import Button from '../../../components/Button';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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
    const router = useRouter();

    const [openMenu, setOpenMennu] = useState(false);
    useEffect(() => {
        setOpenMennu(false);
    }, [router.asPath]);

    return (
        <header className="fixed flex h-h-header w-full items-center justify-between bg-bg px-p-body shadow">
            {/* LOGO */}
            <div className="flex flex-1 items-center">
                <img src="/images/logo.png" className="h-11 w-11" alt="logo" />
            </div>

            {/* MENU */}
            <nav className="md:hidden">
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
            <div className="flex flex-1 justify-end space-x-2 md:hidden">
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

            {/* MOBILE GROUP */}
            <div className="hidden md:inline-block">
                <button onClick={() => setOpenMennu(true)}>
                    <FontAwesomeIcon icon={faBars} className="h-5 w-5 text-primary" />
                </button>

                <div className="fixed top-0 left-0">
                    {/* BACKDROP */}
                    <div
                        className={clsx(
                            'fixed top-0 left-0 h-screen w-screen bg-black/50 transition duration-150',
                            {
                                'invisible bg-opacity-0': !openMenu,
                            }
                        )}
                        onClick={() => setOpenMennu(false)}
                    ></div>

                    {/* WHITE FRAME */}
                    <div
                        className={clsx(
                            'absolute flex h-screen min-w-[28rem]  flex-col bg-bg transition duration-300 xs:min-w-[15rem]',
                            {
                                '-translate-x-full': !openMenu,
                            }
                        )}
                    >
                        <button className="inline-block" onClick={() => setOpenMennu(false)}>
                            <FontAwesomeIcon
                                icon={faXmark}
                                className="absolute top-2 right-2 h-6 w-6"
                            />
                        </button>

                        {/* NAV */}
                        <nav className="mt-h-header flex flex-col">
                            {MENU.map((menu, index) => (
                                <NavLink
                                    key={index}
                                    href={menu.href}
                                    className="w-full px-3 py-2 text-center font-semibold hover:text-primary [&.active]:text-primary"
                                >
                                    {menu.content}
                                </NavLink>
                            ))}
                        </nav>

                        {/* SOCIAL GROUP */}
                        <div className="mt-4 flex justify-center space-x-2">
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
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
