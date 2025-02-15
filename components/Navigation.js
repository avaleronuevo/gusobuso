import { Box, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = useRouter();
  
  const links = [
    { href: '/', label: 'Agustín', position: 'flex-start' },
    { href: '/photography', label: 'Photography', position: 'center' },
    { href: '/architecture', label: 'Architecture', position: 'center' },
    { href: '/about', label: 'About Me', position: 'flex-end' },
  ];

  return (
    <Flex w="100%" justifyContent="space-between" alignItems="center">
      {links.map(({ href, label, position }) => (
        <Box key={href} flex="1" textAlign={position === 'center' ? 'center' : 'inherit'} justifyContent={position}>
          <Link
            as={NextLink}
            href={href}
            color="white"
            fontSize="lg"
            textDecoration="none"
            transition="color 0.3s ease"
            _hover={{ 
              color: 'black',
              textDecoration: 'none'
            }}
          >
            {label}
          </Link>
        </Box>
      ))}
    </Flex>
  );
} 