import React from 'react';
import NextLink from 'next/link';
import { Box, Heading, Text, Button, Flex, Link, Avatar, Code } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import { FastFeedbackIcon } from 'public/icons';
import Footer from './Footer';

const DashboardShell = ({ children }) => {
  const auth = useAuth();

  return (
    <Box backgroundColor="gray.100" h="100vh">
      <Flex
        backgroundColor="white"
        mb={[8, 16]}
        w="full"
        borderTop="5px solid #0AF5F4"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          pb={4}
          maxW="1250px"
          margin="0 auto"
          w="full"
          px={8}
          h="60px"
        >
          <Flex align="center">
            <NextLink href="/" passHref>
              <Link>
                <FastFeedbackIcon color="black.500" boxSize="32px" mr={2} />
              </Link>
            </NextLink>
              <Heading
                as="h1"
                size="l"
                mr={8}
                bgGradient="linear(to-l, #7928CA,#101010)"
                bgClip="text" >ULTRA FEEDBACK
              </Heading>
            {/* <NextLink href="/sites" passHref> */}
            <NextLink href="/dashboard" passHref>
              <Link mr={4}>Sites</Link>
            </NextLink>
            <NextLink href="/feedback" passHref>
              <Link>Feedback</Link>
            </NextLink>
          </Flex>p
          <Flex justifyContent="center" alignItems="center">
            {
            auth.user && (
              <Text>
                <Code>Email: {auth.user.email}</Code>
                <Button
                  onClick={() => auth.signout()}
                  variant="ghost"
                  mx={3}
                >Sign Out</Button>
              </Text> )
            }
            <NextLink href="/account" passHref>
              <Link>
                <Avatar size="sm" src={auth?.user?.photoUrl} />
              </Link>
            </NextLink>
          </Flex>
        </Flex>
      </Flex>
      <Flex margin="0 auto" direction="column" maxW="1250px" px={[0, 8, 8]}>
        {children}
      </Flex>
      <Footer />
    </Box>
  );
};

export default DashboardShell;
