import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';
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

            {/* Breadcrumb */}
            <div className="flex p-4">
                <div className="flex items-center">
                    <button className="mx-1 rounded py-1 px-2 text-lg hover:bg-gray-100">
                        Thư mục gốc
                    </button>
                    <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                </div>
                <div className="flex items-center">
                    <button className="mx-1 rounded py-1 px-2 text-lg hover:bg-gray-100">
                        Thư mục con
                    </button>
                    <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                </div>
                <div className="flex items-center">
                    <button className="pointer-events-none mx-1 rounded py-1 px-2 text-lg font-medium hover:bg-gray-100">
                        Thư mục con nữa
                    </button>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default About;
