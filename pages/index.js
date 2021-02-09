import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import EmptyState from '@/components/EmptyState'

import { Button, Heading, Text, Code, Flex, Container } from "@chakra-ui/react"

import { FastFeedbackIcon } from 'public/icons'
import Navbar from '@/components/Navbar';
import LoginButtons from '@/components/LoginButtons';

const Home = () => {
  const auth = useAuth();
  return (
        <>
          <Head>
            <title>ULTRA FEEDBACK</title>
          </Head>
          <Navbar />
          <Flex
            as='main'
            direction='column'
            align='center'
            justify='center'
            h='90vh'
          >
            <FastFeedbackIcon color="black.500" boxSize="32px" />
            <Heading
              as="h1"
              size="2xl"
              my={5}
              bgGradient="linear(to-l, #7928CA,#101010)"
              bgClip="text" >ULTRA FEEDBACK</Heading>
            {auth.user ? (
              <Text>
                <Code>Email: {auth.user.email}</Code>
                <Button onClick={(e) => auth.signout()}>Sign Out</Button>
                <EmptyState />
              </Text>
            ) : (
              <LoginButtons />
            )}
          </Flex>
      </>
  );
};

export default Home;
