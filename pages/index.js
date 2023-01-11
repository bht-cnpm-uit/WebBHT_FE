import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Button from '../components/Button';
import DefaultLayout from '../layouts/DefaultLayout';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ParseNotionPageContent from '../components/ParseNotionPageContent/ParseNotionPageContent';
import PlatformGroup from '~/components/PlatformGroup';

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

function Home({ heroHeadingAndDescription, buttonInHeros }) {
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
                            {/* HEADING */}
                            <h2
                                className="text-3xl font-bold text-primary"
                                dangerouslySetInnerHTML={{ __html: heroHeadingAndDescription?.heading }}
                            ></h2>

                            {/* Platform */}
                            <div className="mt-3">
                                <PlatformGroup />
                            </div>
                        </div>
                        {/* DESCIPTION */}
                        <div>
                            <ParseNotionPageContent>
                                {heroHeadingAndDescription.description || []}
                            </ParseNotionPageContent>
                        </div>

                        {/* BUTTONS */}
                        <div className="flex space-x-2">
                            {buttonInHeros?.map((btn, index) => (
                                <Button key={index} href={btn?.link || '/'} lg outline={btn.outline}>
                                    {btn.name}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* SLIDE */}
                    <div className="relative max-h-fit w-1/2 md:mt-10 md:w-full ">
                        <Swiper
                            className="aspect-video w-full overflow-hidden rounded-lg lg:aspect-[4/3] md:aspect-video sm:aspect-[4/3] sm:rounded-none"
                            slidesPerView={1}
                            loop={true}
                            ref={swiperRef}
                        >
                            {SLIDES.map((slide, index) => (
                                <SwiperSlide key={index} className="">
                                    <Link href={slide.link} className="block h-full w-full">
                                        <img src={slide.image} className="h-full w-full object-cover" />
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
                        <h2 className="text-3xl font-semibold uppercase text-primary">Tiêu đề gì đó</h2>
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

export async function getStaticProps(context) {
    const heroHeadingAndDescription = {
        heading: '',
        description: [],
    };
    let buttonInHeros = [];
    try {
        let res = await fetch(`${process.env.NOTION_API}/blocks/${process.env.HERO_PAGE_ID}`, {
            headers: {
                Authorization: 'Bearer ' + process.env.NOTION_TOKEN,
                'Notion-Version': process.env.NOTION_VERSION,
            },
        });
        const blockRes = await res.json();
        heroHeadingAndDescription.heading = blockRes?.child_page?.title;

        res = await fetch(`${process.env.NOTION_API}/blocks/${process.env.HERO_PAGE_ID}/children?page_size=100`, {
            headers: {
                Authorization: 'Bearer ' + process.env.NOTION_TOKEN,
                'Notion-Version': process.env.NOTION_VERSION,
            },
        });
        const blockWithchilren = await res.json();
        heroHeadingAndDescription.description = blockWithchilren?.results || [];

        res = await fetch(`${process.env.NOTION_API}/databases/${process.env.BUTTON_IN_HOMEPAGE_DB_ID}/query`, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + process.env.NOTION_TOKEN,
                'Content-Type': 'application/json',
                'Notion-Version': process.env.NOTION_VERSION,
            },
            body: JSON.stringify({
                sorts: [
                    {
                        property: 'index',
                        direction: 'ascending',
                    },
                ],
            }),
        });
        const data = await res.json();
        buttonInHeros = data?.results?.map((page) => ({
            name: page?.properties?.name?.title?.[0]?.plain_text || null,
            link: page?.properties?.link?.rich_text?.[0]?.plain_text || '',
            outline: page?.properties?.outline?.checkbox,
        }));
    } catch (error) {
        console.log(error);
    }

    return {
        props: { heroHeadingAndDescription, buttonInHeros },
        revalidate: 1,
    };
}
