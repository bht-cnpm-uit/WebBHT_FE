import clsx from 'clsx';
import Button from '../components/Button';
import DefaultLayout from '../layouts/DefaultLayout';

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
                    TÀI LIỆU HỌC TẬP
                </h2>
            </div>
        </DefaultLayout>
    );
}

export default About;
