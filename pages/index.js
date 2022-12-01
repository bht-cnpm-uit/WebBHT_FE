import Button from '../components/Button';
import DefaultLayout from '../layouts/DefaultLayout';

export default function Home() {
    return (
        <DefaultLayout>
            {/* Hero section */}
            <div className="px-p-body">
                <div className="mx-auto flex max-w-container py-16">
                    <div className="mr-5 w-1/2 space-y-6">
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
                                    F
                                </Button>
                                <Button
                                    square
                                    rounded
                                    href="fb.com"
                                    className="!bg-red-500 hover:!bg-red-600"
                                >
                                    I
                                </Button>
                                <Button
                                    square
                                    rounded
                                    href="fb.com"
                                    className="!bg-purple-500 hover:!bg-purple-600"
                                >
                                    I
                                </Button>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum
                        </p>
                        <div className="flex space-x-2">
                            <Button lg>Nút gì đó</Button>
                            <Button outline lg>
                                Nút khác nữa
                            </Button>
                        </div>
                    </div>
                    <div className="aspect-video w-1/2">
                        <img src="https://picsum.photos/id/20/800/500" />
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
