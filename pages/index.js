import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Button from '../components/Button';
import DefaultLayout from '../layouts/DefaultLayout';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SLIDES = [
    {
        link: 'https://google.com',
        image: 'https://picsum.photos/id/20/800/500',
    },
    {
        link: 'https://google.com',
        image: 'https://picsum.photos/id/10/800/500',
    },
    {
        link: 'https://google.com',
        image: 'https://picsum.photos/id/19/800/500',
    },
];

function Home() {
    const swiperRef = useRef(null);

    // Thay thế cho autoplay (vì autoplay của swiper có bug), NÓ CHẠY TỐT, ĐỪNG ĐỘNG VÀO
    useEffect(() => {
        const timeoutId = setInterval(() => {
            swiperRef.current.swiper.slideNext();
        }, 5000);
        return () => {
            clearInterval(timeoutId);
        };
    }, []);

    return (
        <DefaultLayout>
            {/* Hero section */}
            <div className="px-p-body sm:px-0">
                <div className="mx-auto flex max-w-container py-16 md:flex-col">
                    {/* CONTENT */}
                    <div className="mr-7 w-1/2 space-y-6 md:w-full sm:px-p-body">
                        <div>
                            <h2 className="text-3xl font-bold text-primary">
                                BAN HỌC TẬP <br /> ĐOÀN KHOA CÔNG NGHỆ PHẦN MỀM
                            </h2>
                            <div className="mt-3 flex space-x-2">
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
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat
                        </p>
                        <div className="flex space-x-2">
                            <Button lg>Nút gì đó</Button>
                            <Button outline lg>
                                Nút khác nữa
                            </Button>
                        </div>
                    </div>

                    {/* SLIDE */}
                    <div className="relative max-h-fit w-1/2 md:mt-10 md:w-full ">
                        <Swiper
                            className="aspect-video w-full overflow-hidden rounded-lg lg:aspect-[4/3] md:aspect-video sm:rounded-none"
                            slidesPerView={1}
                            loop={true}
                            ref={swiperRef}
                        >
                            {SLIDES.map((slide, index) => (
                                <SwiperSlide key={index} className="">
                                    <Link href={slide.link} className="block h-full w-full">
                                        <img
                                            src={slide.image}
                                            className="h-full w-full object-cover"
                                        />
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <button
                            className="absolute left-0 top-1/2 z-40 h-11 w-11 -translate-y-1/2 -translate-x-1/2 rounded-full border border-gray-300 bg-white transition-colors hover:bg-gray-100 md:hidden"
                            onClick={() => swiperRef.current.swiper.slidePrev()}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button
                            className="absolute right-0 top-1/2 z-40 h-11 w-11 -translate-y-1/2 translate-x-1/2 rounded-full border border-gray-300 bg-white transition-colors hover:bg-gray-100 md:hidden"
                            onClick={() => swiperRef.current.swiper.slideNext()}
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Section 1 */}
            <div className="px-p-body">
                <div className="mx-auto max-w-container py-8">
                    <header className="w-full text-center">
                        <h2 className="text-3xl font-semibold uppercase text-primary">
                            Tiêu đề gì đó
                        </h2>
                        <p>Mô tả đơn giản gì đó về section này</p>
                    </header>
                    <div className="mt-5 flex h-[300px] items-center justify-center bg-gray-100">
                        Nội dung gì đó ở đây
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Home;
