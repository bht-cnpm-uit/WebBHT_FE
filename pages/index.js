import Head from 'next/head';

export default function Home() {
    return (
        <div className="px-p-body">
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Ban học tập Đoàn khoa Công nghệ phầm mềm" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-primary mx-auto my-0 max-w-container h-16"></div>
        </div>
    );
}
