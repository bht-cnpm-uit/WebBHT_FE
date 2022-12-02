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
                <div className="mx-auto max-w-container py-8">
                    {/* <header className="w-full text-center">
                        <h2 className="text-3xl font-semibold uppercase text-primary">
                            BAN HỌC TẬP
                        </h2>
                    </header> */}
                    <div className="flex flex-wrap justify-center">
                        {STATISTICS.map((item, index) => (
                            <div key={index} className="w-64 p-4">
                                <p className="text-center text-5xl font-light text-primary">
                                    {item.number + (item.plus ? '+' : '')}
                                </p>
                                <p className="mt-4 text-center">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default About;
