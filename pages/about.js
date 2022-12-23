import clsx from 'clsx';
import { CountUp } from 'use-count-up';
import Button from '../components/Button';
import MemberCard from '../components/MemberCard/MemberCard';
import ParseNotionPageContent from '../components/ParseNotionPageContent/ParseNotionPageContent';
import DefaultLayout from '../layouts/DefaultLayout';
import groupBy from '../utils/groupBy';
import { getImageFromProperty } from '../utils/notionTool';

function About({ statistics, activities, members }) {
    return (
        <DefaultLayout>
            {/* BANNER */}
            <div
                className="flex h-[224px] items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(https://picsum.photos/id/26/2000/800)',
                }}
            >
                <h2 className="px-6 text-center text-xl font-semibold text-white">
                    BAN HỌC TẬP ĐOÀN KHOA CÔNG NGHỆ PHẦN MỀM
                </h2>
            </div>
            {/* Section 1 */}
            <div className="px-p-body py-10">
                <div className="mx-auto mt-8 max-w-container">
                    {/* <header className="w-full text-center">
                        <h2 className="text-3xl font-semibold uppercase text-primary">
                            BAN HỌC TẬP
                        </h2>
                    </header> */}
                    <div className="flex flex-wrap justify-center">
                        {statistics?.map((item, index) => (
                            <div key={index} className="w-64 p-4 sm:w-56">
                                <p className="text-center text-5xl font-light text-primary sm:text-4xl sm:font-normal">
                                    <CountUp end={item.number} duration={2.5} isCounting updateInterval={0.03} />
                                    {item.plus ? '+' : ''}
                                </p>
                                <p className="mt-3 text-center sm:mt-1">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section THEO DOI */}
            <div className="overflow-hidden px-p-body py-10">
                <div className="mx-auto max-w-container xs:max-w-none">
                    <header className="w-full text-center">
                        <h2 className="text-3xl font-semibold uppercase text-primary">Theo dõi BHT</h2>
                    </header>
                </div>
                <div className="my-6 -mx-5 flex flex-wrap justify-center xs:mx-0">
                    {/* CARD */}
                    <div className="group flex w-[20rem] cursor-pointer flex-col items-center p-5 sm:w-[18rem] xs:w-full xs:flex-row xs:items-start xs:px-0">
                        <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-red-500 transition group-hover:bg-gray-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-16 w-16"
                            >
                                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                                <path
                                    fill-rule="evenodd"
                                    d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zM12 10.5a.75.75 0 01.75.75v4.94l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72v-4.94a.75.75 0 01.75-.75z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="flex flex-col items-center xs:ml-4 xs:flex-1">
                            <div className="mt-4 text-center text-lg font-bold transition group-hover:text-primary xs:mt-0 xs:w-full xs:text-left">
                                Youtube BHTCNPM
                            </div>
                            <div className="mt-1 text-center xs:text-left">
                                lorem ipsum dolor sit amet cum dolor sit amet consectetuer adip fasf ads fsa dfsaf
                            </div>
                        </div>
                    </div>

                    {/* CARD */}
                    <div className="group flex w-[20rem] cursor-pointer flex-col items-center p-5 sm:w-[18rem] xs:w-full xs:flex-row-reverse xs:items-start xs:px-0">
                        <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-blue-500 transition group-hover:bg-gray-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-16 w-16"
                            >
                                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                                <path
                                    fill-rule="evenodd"
                                    d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zM12 10.5a.75.75 0 01.75.75v4.94l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72v-4.94a.75.75 0 01.75-.75z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="flex flex-col items-center xs:mr-4 xs:flex-1">
                            <div className="mt-4 text-center text-lg font-bold transition group-hover:text-primary xs:mt-0 xs:w-full xs:text-left">
                                Youtube BHTCNPM
                            </div>
                            <div className="mt-1 text-center xs:text-left">
                                lorem ipsum dolor sit elit. lorem ipsum dolor sit amet consectetuer adip
                            </div>
                        </div>
                    </div>

                    {/* CARD */}
                    <div className="group flex w-[20rem] cursor-pointer flex-col items-center p-5 sm:w-[18rem] xs:w-full xs:flex-row xs:items-start xs:px-0">
                        <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-orange-500 transition group-hover:bg-gray-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-16 w-16"
                            >
                                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                                <path
                                    fill-rule="evenodd"
                                    d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zM12 10.5a.75.75 0 01.75.75v4.94l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72v-4.94a.75.75 0 01.75-.75z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="flex flex-col items-center xs:ml-4 xs:flex-1">
                            <div className="mt-4 text-center text-lg font-bold transition group-hover:text-primary xs:mt-0 xs:w-full xs:text-left">
                                Youtube BHTCNPM
                            </div>
                            <div className="mt-1 text-center xs:text-left">
                                lorem ipsum dolor sit amt. lorem ipsum dolor sit amet consectetuer adip et consectetuer
                                adipiscing eli consec
                            </div>
                        </div>
                    </div>

                    {/* CARD */}
                    <div className="group flex w-[20rem] cursor-pointer flex-col items-center p-5 sm:w-[18rem] xs:w-full xs:flex-row-reverse xs:items-start xs:px-0">
                        <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-violet-500 transition group-hover:bg-gray-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-16 w-16"
                            >
                                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                                <path
                                    fill-rule="evenodd"
                                    d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zM12 10.5a.75.75 0 01.75.75v4.94l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72v-4.94a.75.75 0 01.75-.75z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="flex flex-col items-center xs:mr-4 xs:flex-1">
                            <div className="mt-4 text-center text-lg font-bold transition group-hover:text-primary xs:mt-0 xs:w-full xs:text-left">
                                Youtube BHTCNPM
                            </div>
                            <div className="mt-1 text-center xs:text-left">
                                lorem ipsum dolor sit amet consectetuer adipiscing elit. lor sit amet consectetuer adip
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section HOAT DONG */}
            <div className="px-p-body py-10 xs:px-0">
                <div className="mx-auto max-w-container xs:max-w-none">
                    <header className="w-full text-center">
                        <h2 className="text-3xl font-semibold uppercase text-primary">HOẠT ĐỘNG</h2>
                    </header>
                    <div className="mt-16 space-y-20">
                        {activities?.map((activity, index) => (
                            <div
                                key={index}
                                className={clsx('flex sm:my-14 sm:flex-col', {
                                    'flex-row-reverse sm:flex-col': index % 2 !== 0,
                                })}
                            >
                                <div className="w-2/5 sm:mb-4 sm:w-full">
                                    <img
                                        src={activity.image}
                                        className="aspect-[3/2] w-full rounded-lg object-cover md:aspect-square sm:aspect-video xs:rounded-none"
                                    />
                                </div>
                                <div
                                    className={clsx('flex-1 space-y-2 xs:px-p-body', {
                                        'mr-8 md:mr-4 sm:mr-0': index % 2 !== 0,
                                        'ml-8 md:ml-4 sm:ml-0': index % 2 === 0,
                                    })}
                                >
                                    <h3 className="mb-3 text-2xl font-bold text-primary">{activity.heading}</h3>
                                    <div className="text-lg md:text-base">
                                        <ParseNotionPageContent>{activity.content}</ParseNotionPageContent>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section THANH VIEN */}
            <div className="px-p-body py-10">
                <div className="mx-auto max-w-container">
                    <header className="w-full text-center">
                        <h2 className="text-3xl font-semibold uppercase text-primary">THÀNH VIÊN</h2>
                    </header>
                    <div className="mt-10 flex w-full flex-col items-center">
                        {Object.keys(members)
                            ?.sort((a, b) => Number(a) - Number(b))
                            ?.map((year, index) => (
                                <div key={index} className="mt-5 w-full">
                                    <div className="mb-2 text-center text-3xl font-extrabold tracking-widest text-primary">
                                        {year}
                                    </div>
                                    <div className="relative">
                                        {/* LINE */}
                                        <div className="absolute top-0 bottom-0 left-1/2 w-0 border-r border-primary">
                                            <div className="absolute top-0 left-0 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-bg"></div>
                                        </div>

                                        {/* CARDS */}
                                        <div className="relative pt-8 pb-10">
                                            <div className="flex flex-wrap justify-center bg-bg py-1">
                                                {members?.[year]?.map((member, index) => (
                                                    <MemberCard member={member} key={index} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default About;

export async function getStaticProps(context) {
    let statistics = [];
    try {
        const res = await fetch(`${process.env.NOTION_API}/databases/${process.env.STATISTICS_DB_ID}/query`, {
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
        statistics = data?.results?.map((page) => ({
            number: page?.properties?.number?.number,
            content: page?.properties?.name?.title?.[0]?.plain_text,
            plus: page?.properties?.over?.checkbox,
        }));
    } catch (error) {
        console.log(error);
        statistics = null;
    }

    let activities = [];
    try {
        const res = await fetch(`${process.env.NOTION_API}/databases/${process.env.ACTIVITES_DB_ID}/query`, {
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
        activities = data?.results?.map((page) => ({
            heading: page?.properties?.heading?.title?.[0]?.plain_text || null,
            image: getImageFromProperty(page?.properties?.images),
            idPage: page?.id,
        }));

        let promiseFetchPage = activities.map(
            (activity) =>
                new Promise(async (resolve, reject) => {
                    try {
                        const res = await fetch(
                            `${process.env.NOTION_API}/blocks/${activity.idPage}/children?page_size=100`,
                            {
                                headers: {
                                    Authorization: 'Bearer ' + process.env.NOTION_TOKEN,
                                    'Content-Type': 'application/json',
                                    'Notion-Version': process.env.NOTION_VERSION,
                                },
                            }
                        );
                        const data = await res.json();
                        resolve({ ...activity, content: data.results });
                    } catch (error) {
                        console.log(error);
                        reject(error);
                    }
                })
        );
        activities = await Promise.all(promiseFetchPage);
    } catch (error) {
        console.log(error);
        activities = null;
    }

    let members = [];
    try {
        const res = await fetch(`${process.env.NOTION_API}/databases/${process.env.MEMBERS_DB_ID}/query`, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + process.env.NOTION_TOKEN,
                'Content-Type': 'application/json',
                'Notion-Version': process.env.NOTION_VERSION,
            },
            body: JSON.stringify({
                sorts: [
                    {
                        property: 'year',
                        direction: 'ascending',
                    },
                    {
                        property: 'index',
                        direction: 'ascending',
                    },
                ],
            }),
        });
        const data = await res.json();
        members = data?.results?.map((page) => ({
            name: page?.properties?.name?.title?.[0]?.plain_text,
            year: Number(page?.properties?.year?.select?.name),
            image: getImageFromProperty(page?.properties?.images),
            role: page?.properties?.role?.select?.name || null,
        }));
        members = groupBy(members, 'year');
    } catch (error) {
        console.log(error);
        members = null;
    }
    return {
        props: { statistics, activities, members },
        revalidate: 1,
    };
}
