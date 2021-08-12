import Layout from '../components/layout'
import Head from 'next/head'
import MainPage from '../components/main'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Food POS</title>
                <meta name="description" content="Food POS system using Next.js" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Barlow" />

            </Head>

            <svg xmlns='http://www.w3.org/2000/svg' style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true"
                focusable="false">
                <defs>
                    <linearGradient id='gradiantSvg' x1='.5' x2='.5' y2='1'>
                        <stop stopColor='#EA9769' />
                        <stop offset='1' stopColor='#EA6969' />
                    </linearGradient>
                </defs>
            </svg>
            <main>
                <Layout>
                    <MainPage></MainPage>
                </Layout>
            </main>
        </div>
    )
}
