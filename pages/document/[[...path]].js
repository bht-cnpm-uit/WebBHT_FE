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
import Button from '../../components/Button';
import DefaultLayout from '../../layouts/DefaultLayout';
import findByPath from '../../utils/findByPath';

import docData from '../../data/document.json';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ICONS = {
    folder: <FontAwesomeIcon icon={faFolder} className="text-xl text-yellow-400" />,
    file: <FontAwesomeIcon icon={faFile} className="text-xl text-blue-500" />,
    image: <FontAwesomeIcon icon={faImage} className="text-xl text-purple-500" />,
};

function Document() {
    const router = useRouter();
    const { path } = router.query;

    const [foundData, setFoundData] = useState(null);
    useEffect(() => {
        if (path) {
            const item = findByPath(docData, 0, path);
            if (item && item.type === 'folder') {
                if (item.children) {
                    setFoundData(item.children);
                } else {
                    setFoundData(null);
                }
            } else {
                setFoundData(null);
            }
        } else {
            setFoundData(docData);
        }
    }, [path]);

    function handleNavigate(path) {
        console.log(path);
        router.push({ pathname: path });
    }

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
                        {foundData ? (
                            foundData.map((item, index) => (
                                <tr
                                    key={index}
                                    className="cursor-pointer border-b hover:bg-gray-50"
                                    onClick={() => handleNavigate(item.path)}
                                >
                                    <td className="p-3 text-center">{ICONS[item.type]}</td>
                                    <td className="p-3">{item.name}</td>
                                    <td className="p-3">
                                        <div className="flex justify-end">
                                            <button className="hover:opacity-70">
                                                <FontAwesomeIcon icon={faCopy} className="" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td></td>
                                <td>File hoặc thư mục trống - đang xử lý</td>
                                <td></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </DefaultLayout>
    );
}

export default Document;
