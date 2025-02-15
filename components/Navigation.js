import { Box, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = useRouter();
  
  const links = [
    { href: '/', label: 'Agustín' },
    { href: '/photography', label: 'Photography' },
    { href: '/architecture', label: 'Architecture' },
    { href: '/about', label: 'About Me' },
  ];

  return (
    <Flex gap={6}>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          as={NextLink}
          href={href}
          color="white"
          fontSize="lg"
          textDecoration={router.pathname === href ? 'underline' : 'none'}
          _hover={{ textDecoration: 'underline' }}
        >
          {label}
        </Link>
      ))}
    </Flex>
  );
} 