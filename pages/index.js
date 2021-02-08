import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import EmptyState from '@/components/EmptyState'

import { Button, Heading, Text, Code, Flex, Container } from "@chakra-ui/react"

import { FastFeedbackIcon } from 'public/icons'
import Navbar from '@/components/Navbar';

const Home = () => {
  const auth = useAuth();
  return (
      <Flex
        as='main'
        direction='column'
        align='center'
        justify='center'
        h='100vh'
      >
        <Head>
          <title>ULTRA FEEDBACK</title>
        </Head>
          <Navbar />
          <FastFeedbackIcon color="black.500" boxSize="32px" />
          <Heading as="h1" size="2xl" my='10' >ULTRA FEEDBACK</Heading>

          {auth.user ? (
            <Text>
              <Code>Email: {auth?.user?.email}</Code>
              <Button onClick={(e) => auth.signout()}>Sign Out</Button>
              <EmptyState />
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

      </Flex>
  );
};

export default Home;
