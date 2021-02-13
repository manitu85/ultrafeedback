import React from 'react';
import NextLink from 'next/link';
import { Box, Button, Flex, Link, Avatar, Icon, Code } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import { FastFeedbackIcon } from 'public/icons';
import Footer from './Footer';

const DashboardShell = ({ children }) => {
  const { user } = useAuth();

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
                <FastFeedbackIcon color="black.500" boxSize="32px" mr={8} />
              </Link>
            </NextLink>
            {/* <NextLink href="/sites" passHref> */}
            <NextLink href="/dashboard" passHref>
              <Link mr={4}>Sites</Link>
            </NextLink>
            <NextLink href="/feedback" passHref>
              <Link>Feedback</Link>
            </NextLink>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            {/* {user && (
              <Text>
                <Code>Email: {user.email}</Code>
                <Button onClick={(e) => user.signout()}>Sign Out</Button>
              </Text> )
            } */}
            <NextLink href="/account" passHref>
              <Link>
                <Avatar size="sm" src={user?.photoUrl} />
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
