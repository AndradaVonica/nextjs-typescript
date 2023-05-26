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
          <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom paddingTop='8rem' >
            About us
            </Typography>
          <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom >
            Marketing
            </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph paddingBottom='30px' paddingTop='60px'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
            et velit interdum,conubia nostra, ac aliquet odio mattis nostra.
            Class aptent taciti sociosqu ad litoraper conubia nostra, per inceptos himenaeos.
            </Typography>
          <div style={{ display: "flex", height: "10rem", backgroundColor: "#f5d142", justifyContent: "space-around", alignItems: "center", marginBottom: "20px", borderRadius: 8, boxShadow: "3" }} >
            <Button variant="outlined">Find mentors</Button>
            <Button variant="outlined">Become a mentor</Button>
          </div>
          <HomePage />
          <Footer />
        </Container>
      </main>
    </div >
  );
};


export default AboutPage;