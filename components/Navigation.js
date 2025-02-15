import { Box, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = useRouter();
  
  const links = [
    { href: '/', label: 'Agustín Valero Nuevo', position: 'flex-start' },
    { href: '/photography', label: 'Photography', position: 'center' },
    { href: '/architecture', label: 'Architecture', position: 'center' },
    { href: '/about', label: 'About Me', position: 'flex-end' },
  ];

  return (
    <Flex w="100%" justifyContent="space-between" alignItems="center">
      <Box flex="1" textAlign="left">
        <Link
          as={NextLink}
          href="/"
          color="white"
          fontSize="xl"
          textDecoration="none"
          transition="color 0.3s ease"
          _hover={{ 
            color: 'black',
            textDecoration: 'none'
          }}
        >
          {links[0].label}
        </Link>
      </Box>
      <Flex flex="2" justifyContent="center" gap={16}>
        <Link
          as={NextLink}
          href="/photography"
          color="white"
          fontSize="xl"
          textDecoration="none"
          transition="color 0.3s ease"
          _hover={{ 
            color: 'black',
            textDecoration: 'none'
          }}
        >
          {links[1].label}
        </Link>
        <Link
          as={NextLink}
          href="/architecture"
          color="white"
          fontSize="xl"
          textDecoration="none"
          transition="color 0.3s ease"
          _hover={{ 
            color: 'black',
            textDecoration: 'none'
          }}
        >
          {links[2].label}
        </Link>
      </Flex>
      <Box flex="1" textAlign="right">
        <Link
          as={NextLink}
          href="/about"
          color="white"
          fontSize="xl"
          textDecoration="none"
          transition="color 0.3s ease"
          _hover={{ 
            color: 'black',
            textDecoration: 'none'
          }}
        >
          {links[3].label}
        </Link>
      </Box>
    </Flex>
  );
} 