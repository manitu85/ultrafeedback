import React from 'react';
import NextLink from 'next/link';
import { Box, Button, Flex, Link, Avatar, Icon, Heading } from '@chakra-ui/react';
import { FastFeedbackIcon } from 'public/icons'

import { useAuth } from '@/lib/auth';

const Navbar = ({ children }) => {
  const { user } = useAuth();

  return (
    <>
      <Box bgGradient="linear(to-l, #7928CA,#101010)" h={2} />
      <Flex backgroundColor="white" w="full" >
        <Flex
          align="center"
          justify="space-between"
          pt={[4, 8]}
          pb={[4, 8]}
          maxW="950px"
          margin="0 auto"
          w="full"
          px={8}
          h="80px"
        >
          <Flex align="center" justify="center">
            <NextLink href="/" passHref>
              <Link>
                {/* <Icon name="logo" size="24px" mr={8} /> */}
                <FastFeedbackIcon color="black.500" boxSize="32px" mr={2} />
              </Link>
            </NextLink>
            <Heading
            as="h1"
            size="l"
            my='10'
            bgGradient="linear(to-l, #7928CA,#101010)"
            bgClip="text" >ULTRA FEEDBACK
            </Heading>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            <NextLink href="/pricing" passHref>
              <Link mr={4} fontWeight="medium">
                Pricing
              </Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Button
                backgroundColor="gray.900"
                color="white"
                h="32px"
                fontWeight="medium"
                _hover={{ bg: 'gray.700' }}
                _active={{
                  bg: 'gray.800',
                  transform: 'scale(0.95)'
                }}
              >
                Login
              </Button>
            </NextLink>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;