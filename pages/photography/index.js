import { Box, Container, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import Navigation from '../../components/Navigation';
import Link from 'next/link';

// Datos de ejemplo - luego podrás personalizarlos con tus proyectos
const photographyProjects = [
  {
    id: 'street-photography',
    title: 'Street Photography',
    description: 'Capturas urbanas en blanco y negro',
    coverImage: 'https://picsum.photos/800/600?random=1',
  },
  {
    id: 'portraits',
    title: 'Portraits',
    description: 'Retratos artísticos',
    coverImage: 'https://picsum.photos/800/600?random=2',
  },
  {
    id: 'landscapes',
    title: 'Landscapes',
    description: 'Paisajes naturales',
    coverImage: 'https://picsum.photos/800/600?random=3',
  },
  {
    id: 'urban',
    title: 'Urban',
    description: 'Fotografía urbana',
    coverImage: 'https://picsum.photos/800/600?random=4',
  },
];

export default function Photography() {
  return (
    <Container maxW="100vw" minH="100vh" p={0} position="relative" bg="#1E1E1E">
      <Box 
        position="fixed" 
        top={4} 
        left={0}
        right={0}
        mx={4}
        zIndex={2}
        backdropFilter="blur(5px)"
        borderRadius="full"
        px={6}
        py={2}
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.3)"
      >
        <Navigation />
      </Box>

      <Container 
        maxW="100vw" 
        pt={24} 
        pb={16} 
        px={8}
        h="calc(100vh - 32px)"
        overflow="hidden"
      >
        <VStack spacing={8} align="stretch" h="100%">
          <Heading 
            size="2xl" 
            fontWeight="light"
            letterSpacing="wider"
          >
            Photography
          </Heading>

          <Grid 
            templateColumns="repeat(2, 1fr)"
            gap={8}
            overflowY="auto"
            css={{
              '&::-webkit-scrollbar': {
                width: '4px',
              },
              '&::-webkit-scrollbar-track': {
                width: '6px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'gray.500',
                borderRadius: '24px',
              },
            }}
            pr={4}
          >
            {photographyProjects.map((project) => (
              <Link 
                key={project.id}
                href={`/photography/${project.id}`}
                style={{ textDecoration: 'none' }}
              >
                <Box
                  position="relative"
                  h="600px"
                  overflow="hidden"
                  role="group"
                  cursor="pointer"
                  borderRadius="lg"
                >
                  <Box
                    w="100%"
                    h="100%"
                    bgImage={`url(${project.coverImage})`}
                    bgSize="cover"
                    bgPosition="center"
                    transition="transform 0.3s ease"
                    _groupHover={{
                      transform: 'scale(1.05)',
                    }}
                  />
                  <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    bg="blackAlpha.700"
                    p={6}
                    transform="translateY(100%)"
                    transition="transform 0.3s ease"
                    _groupHover={{
                      transform: 'translateY(0)',
                    }}
                  >
                    <Heading size="md" mb={2}>{project.title}</Heading>
                    <Text fontSize="sm">{project.description}</Text>
                  </Box>
                </Box>
              </Link>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Container>
  );
} 