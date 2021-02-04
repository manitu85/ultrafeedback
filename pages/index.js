import Head from 'next/head';
import { useAuth } from '@/lib/auth';

import { Button, Heading, Text, Code } from "@chakra-ui/react"
import styles from '@/styles/Home.module.css';

const Home = () => {
  const auth = useAuth();
  return (
    <div className={styles.container}>
      <Head>
        <title>ULTRA FEEDBACK</title>
      </Head>

      <main>
        <Heading as="h1" size="2xl">ULTRA FEEDBACK</Heading>

        {auth.user ? (
          <Text>
            <Code>Email: {auth?.user?.email}</Code>
            <Button onClick={(e) => auth.signout()}>Sign Out</Button>
          </Text>
        ) : (
          <>
            <Button
              onClick={(e) => auth.signinWithGitHub()}
              colorScheme="teal"
              size="md"
            >
              Sign In With Github
            </Button>
            <Button
              colorScheme="teal"
              size="md"
              onClick={(e) => auth.signinWithGoogle()}
            >
              Sign In With Google
            </Button>
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
