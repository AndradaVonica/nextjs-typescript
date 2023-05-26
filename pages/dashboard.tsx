// import Link from 'next/link'
// import Layout from '../components/Layout'

// const AboutPage = () => (
//   <Layout title="About | Next.js + TypeScript Example">
//     <h1>About</h1>
//     <p>This is the about page</p>
//     <p>
//       <Link href="/">Go home</Link>
//     </p>
//   </Layout>
// )

// export default AboutPage



import Head from 'next/head';
import { Container, Typography, Button } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage'

const AboutPage: React.FC = () => {
    // const classes = useStyles();

    return (
        <div>
            <Head>
                <title>My Next.js App</title>
                <meta name="description" content="Welcome to my Next.js app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Container >
                    <Header />
                    <Footer />
                </Container>
            </main>
        </div >
    );
};


export default AboutPage;