import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

function DefaultLayout({
    children,
    head = {
        title: 'Ban học tập Công nghệ phần mềm',
        metas: [
            {
                name: 'description',
                content: 'Ban học tập Công nghệ phần mềm',
            },
        ],
    },
}) {
    const { title, metas } = head;
    return (
        <>
            <Head>
                <title>{title}</title>
                {metas?.map((meta) => (
                    <meta key={meta?.name} name={meta?.name} content={meta?.content} />
                ))}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="pt-h-header">{children}</main>
            <Footer />
        </>
    );
}

export default DefaultLayout;
