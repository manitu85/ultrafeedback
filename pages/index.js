import Head from 'next/head';
import { Box, Button, Flex, Text, Icon, Link, Stack, Heading, Code } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';

import EmptyState from '@/components/EmptyState'
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
         {/* <Box bg="gray.100" py={16} px={4}>
        <Flex as="main" direction="column" maxW="700px" margin="0 auto">
          <Head>
            <script
              dangerouslySetInnerHTML={{
                __html: `
              if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
                window.location.href = "/dashboard"
              }
            `
              }}
            />
          </Head>
          <FastFeedbackIcon color="black" name="logo" boxSize="48px" mb={2} />
          <Text mb={4} fontSize="lg" py={4}>
            <Text as="span" fontWeight="bold" display="inline">
              Fast Feedback
            </Text>
            {' was built as part of '}
            <Link
              href="https://react2025.com"
              isExternal
              textDecoration="underline"
            >
              React 2025
            </Link>
            {`. It's the easiest way to add comments or reviews to your static site. Try it out by leaving a comment below. After the comment is approved, it will display below.`}
          </Text>
          {auth.user ? (
            <Button
              as="a"
              href="/dashboard"
              backgroundColor="gray.900"
              color="white"
              fontWeight="medium"
              mt={4}
              maxW="200px"
              _hover={{ bg: 'gray.700' }}
              _active={{
                bg: 'gray.800',
                transform: 'scale(0.95)'
              }}
            >
              View Dashboard
            </Button>
          ) : (
            <LoginButtons />
          )}
        </Flex>
      </Box> */}
      </>
  );
};

export default Home;


   {/* <>
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
      </> */}