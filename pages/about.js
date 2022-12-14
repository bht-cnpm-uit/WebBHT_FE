import clsx from 'clsx';
import { CountUp } from 'use-count-up';
import Button from '../components/Button';
import MemberCard from '../components/MemberCard/MemberCard';
import ParseNotionPageContent from '../components/ParseNotionPageContent/ParseNotionPageContent';
import DefaultLayout from '../layouts/DefaultLayout';

const MEMBERS = [
    {
        year: '2020',
        members: [
            {
                name: 'Bùi Tống Minh Châu',
                desciption: 'Thành viên',
                image: 'https://picsum.photos/id/30/100/100',
            },
            {
                name: 'Nguyễn Văn A',
                desciption: 'Thành viên',
                image: 'https://picsum.photos/id/30/100/100',
            },
            {
                name: 'Nguyễn Văn A',
                desciption: 'Thành viên',
                image: 'https://picsum.photos/id/30/100/100',
            },
        ],
    },
    {
        year: '2021',
        members: [
            {
                name: 'Nguyễn Văn A',
                desciption: 'Thành viên',
                image: 'https://picsum.photos/id/30/100/100',
            },
            {
                name: 'Nguyễn Văn A',
                desciption: 'Thành viên',
                image: 'https://picsum.photos/id/30/100/100',
            },
            {
                name: 'Nguyễn Văn A',
                desciption: 'Thành viên',
                image: 'https://picsum.photos/id/30/100/100',
            },
            {
                name: 'Nguyễn Văn A',
                desciption: 'Thành viên',
                image: 'https://picsum.photos/id/30/100/100',
            },
        ],
    },
    {
        year: '2022',
        members: [
            {
                name: 'Nguyễn Văn A',
                desciption: 'Thành viên',
                image: 'https://picsum.photos/id/30/100/100',
            },
            {
                name: 'Nguyễn Văn A',
                desciption: 'Thành viên',
                image: 'https://picsum.photos/id/30/100/100',
            },
            {
                name: 'Nguyễn Văn A',
                desciption: 'Thành viên',
                image: 'https://picsum.photos/id/30/100/100',
            },
            {
                name: 'Nguyễn Văn A',
                desciption: 'Thành viên',
                image: 'https://picsum.photos/id/30/100/100',
            },
            {
                name: 'Nguyễn Văn A',
                desciption: 'Thành viên',
                image: 'https://picsum.photos/id/30/100/100',
            },
        ],
    },
];

function About({ statistics, activities }) {
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

            {/* Section HOAT DONG */}
            <div className="px-p-body py-10 xs:px-0">
                <div className="mx-auto max-w-container xs:max-w-none">
                    <header className="w-full text-center">
                        <h2 className="text-3xl font-semibold uppercase text-primary">HOẠT ĐỘNG</h2>
                    </header>
                    <div className="">
                        {activities?.map((activity, index) => (
                            <div
                                key={index}
                                className={clsx('my-20 flex sm:my-14 sm:flex-col', {
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
                        {MEMBERS.map((item, index) => (
                            <div key={index} className="mt-5 w-full">
                                <div className="mb-2 text-center text-4xl font-extrabold tracking-widest text-primary">
                                    {item.year}
                                </div>
                                <div className="relative">
                                    {/* LINE */}
                                    <div className="absolute top-0 bottom-0 left-1/2 w-0 border-r border-primary">
                                        <div className="absolute top-0 left-0 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-bg"></div>
                                    </div>

                                    {/* CARDS */}
                                    <div className="relative pt-8 pb-10">
                                        <div className="flex flex-wrap justify-center bg-bg py-1">
                                            {item.members.map((member, index) => (
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
        statistics = data?.results?.map((item) => ({
            number: item?.properties?.number?.number,
            content: item?.properties?.name?.title?.[0]?.plain_text,
            plus: item?.properties?.over?.checkbox,
        }));
    } catch (error) {
        console.log(error);
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
        activities = data?.results?.map((item) => ({
            heading: item?.properties?.heading?.title?.[0]?.plain_text || null,
            image: item?.properties?.images?.files?.[0]?.file?.url || null,
            idPage: item?.id,
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

    return {
        props: { statistics, activities },
        revalidate: 1,
    };
}
