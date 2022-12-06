import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronCircleRight,
    faChevronRight,
    faFile,
    faFileImage,
    faFolder,
    faImage,
    faCopy,
} from '@fortawesome/free-solid-svg-icons';
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
            <div className="flex py-4 px-p-body">
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

            {/* TABLE */}
            <div className="p-p-body">
                <table className="mx-auto w-full max-w-container">
                    <thead className="">
                        <tr className="border-b">
                            <th className="w-16 p-3 text-center font-medium">Icon</th>
                            <th className="p-3 text-left font-medium">Tên</th>
                            <th className="p-3 text-right font-medium">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="cursor-pointer border-b hover:bg-gray-50">
                            <td className="p-3 text-center">
                                <FontAwesomeIcon
                                    icon={faFolder}
                                    className="text-xl text-yellow-400"
                                />
                            </td>
                            <td className="p-3">Thư mục gì đó</td>
                            <td className="p-3">
                                <div className="flex justify-end">
                                    <button className="hover:opacity-70">
                                        <FontAwesomeIcon icon={faCopy} className="" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="cursor-pointer border-b hover:bg-gray-50">
                            <td className="p-3 text-center">
                                <FontAwesomeIcon icon={faFile} className="text-xl text-blue-500" />
                            </td>
                            <td className="p-3">File gì đó.pdf</td>
                            <td className="p-3">
                                <div className="flex justify-end">
                                    <button className="hover:opacity-70">
                                        <FontAwesomeIcon icon={faCopy} className="" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="cursor-pointer border-b hover:bg-gray-50">
                            <td className="p-3 text-center">
                                <FontAwesomeIcon
                                    icon={faImage}
                                    className="text-xl text-purple-500"
                                />
                            </td>
                            <td className="p-3">Ảnh gì đó.png</td>
                            <td className="p-3">
                                <div className="flex justify-end">
                                    <button className="hover:opacity-70">
                                        <FontAwesomeIcon icon={faCopy} className="" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </DefaultLayout>
    );
}

export default About;
