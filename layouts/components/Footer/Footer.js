import Link from 'next/link';

function Footer() {
    return (
        <footer className="border-t py-10">
            <div className="mx-auto flex max-w-container px-p-body md:flex-col xs:max-w-none">
                <div className="mr-4 flex flex-col md:mb-8 md:mr-0 md:w-full md:items-center md:text-center">
                    <img src="/images/logo.png" className="h-9 w-9" />
                    <div className="mt-2">
                        {/* FETCH FORM NOTION */}
                        <div className="flex flex-col md:items-center">
                            <p>lorem ipsum dolor sit amet consecte fsad fsad fs</p>
                            <p>lorem ipsum dolor sit amet c</p>
                        </div>
                    </div>
                </div>
                <div className="flex shrink-0 grow justify-around space-x-5 md:justify-between xs:flex-col xs:items-center xs:space-y-8 xs:space-x-0 ">
                    <div className="xs:text-center">
                        <p className="font-bold">Truy cập nhanh</p>
                        <div className="mt-1">
                            <Link href="/" className="block py-1 hover:text-primary">
                                Trang chủ
                            </Link>
                            <Link href="/" className="block py-1 hover:text-primary">
                                Giới thiệu
                            </Link>
                            <Link href="/" className="block py-1 hover:text-primary">
                                Tài liệu
                            </Link>
                        </div>
                    </div>
                    <div className="xs:text-center">
                        <p className="font-bold">Liên hệ</p>
                        <div className="mt-1">
                            <div className="py-1">example@gmail.com</div>
                            <div className="py-1">facebook.com/example</div>
                            <div className="py-1">sdfa fd df saf sa fas</div>
                        </div>
                    </div>
                    <div className="xs:text-center">
                        <p className="font-bold">Liên hệ</p>
                        <div className="mt-1">
                            <div className="py-1">example@gmail.com</div>
                            <div className="py-1">facebook.com/example</div>
                            <div className="py-1">sdfa fdsaf sadsfas</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
