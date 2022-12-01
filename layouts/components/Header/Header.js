import Image from 'next/image';
import Link from 'next/link';
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
            <div className="flex flex-1 items-center">LOGO</div>

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
            <div className="flex flex-1 justify-end">
                <Button>Nút gì đó</Button>
            </div>
        </header>
    );
}

export default Header;
