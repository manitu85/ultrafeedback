import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import styles from '@/styles/Home.module.css';

const Home = () => {
  const auth = useAuth();
  return (
    <div className={styles.container}>
      <Head>
        <title>ULTRA FEEDBACK</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>ULTRA FEEDBACK</h1>

        {auth.user ? (
          <div>
            <p>Email: {auth?.user?.email}</p>
            <button onClick={(e) => auth.signout()}>Sign Out</button>
          </div>
        ) : (
          <>
            <button onClick={(e) => auth.signinWithGitHub()}>
              Sign In With Github
            </button>
            <button onClick={(e) => auth.signinWithGoogle()}>
              Sign In With Google
            </button>
          </>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
