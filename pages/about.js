import clsx from 'clsx';
import { CountUp } from 'use-count-up';
import Button from '../components/Button';
import DefaultLayout from '../layouts/DefaultLayout';

const STATISTICS = [
    {
        number: 50,
        content: 'Thành viên',
    },
    {
        number: 100,
        content: 'Buổi training',
    },
    {
        number: 5000,
        content: 'Sinh viên tham dự training',
        plus: true,
    },
    {
        number: 10,
        content: 'Buổi serminar',
    },
    {
        number: 40000,
        content: 'Thành viên group Ngôi nhà sẻ chia',
        plus: true,
    },
];

const ACTIVITIES = [
    {
        image: 'https://picsum.photos/id/7/500/400',
        heading: 'Training giữa kỳ, cuối kỳ',
        content:
            '<b>Lorem ipsum dolor sit amet, con exercitation ullamco </b> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ',
    },
    {
        image: 'https://picsum.photos/id/10/500/400',
        heading: 'Hoạt động gì đó',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        image: 'https://picsum.photos/id/20/500/400',
        heading: 'Hoạt động gì đó',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u',
    },
    {
        image: 'https://picsum.photos/id/30/500/400',
        heading: 'Hoạt động gì đó',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
];

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
            {
                name: 'Nguyễn Văn A',
                desciption: 'Thành viên',
                image: 'https://picsum.photos/id/30/100/100',
            },
        ],
    },
];

function About() {
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
                        {STATISTICS.map((item, index) => (
                            <div key={index} className="w-64 p-4 sm:w-60">
                                <p className="text-center text-5xl font-light text-primary sm:text-4xl sm:font-normal">
                                    <CountUp
                                        end={item.number}
                                        duration={2.5}
                                        isCounting
                                        updateInterval={0.03}
                                    />
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
                        {ACTIVITIES.map((activity, index) => (
                            <div
                                key={index}
                                className={clsx('my-20 flex sm:my-10 sm:flex-col', {
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
                                    <h3 className="text-2xl font-bold text-primary">
                                        {activity.heading}
                                    </h3>
                                    <div
                                        className="text-lg md:text-base"
                                        dangerouslySetInnerHTML={{ __html: activity.content }}
                                    ></div>
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
                        <h2 className="text-3xl font-semibold uppercase text-primary">
                            THÀNH VIÊN
                        </h2>
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
                                    <div className="relative z-10 pt-8 pb-10">
                                        <div className="flex flex-wrap justify-center bg-bg py-2">
                                            {item.members.map((member, index) => (
                                                <div className="m-2 flex w-[260px] flex-col items-center rounded-md border-t-4 border-primary-light py-6 text-center shadow-md">
                                                    <div className="h-32 w-32 overflow-hidden rounded-full">
                                                        <img
                                                            src={member.image}
                                                            className="h-full w-full object-cover"
                                                        />
                                                    </div>
                                                    <p className="mt-4 text-lg font-semibold text-primary-dark">
                                                        {member.name}
                                                    </p>
                                                    <p className="mt-1">{member.desciption}</p>
                                                </div>
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
