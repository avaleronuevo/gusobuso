import { Box, Container, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import Navigation from '../../components/Navigation';
import Link from 'next/link';

// Datos de ejemplo - proyectos individuales
const architectureProjects = [
  {
    id: 'proyecto-1',
    title: 'Proyecto 1',
    description: 'Descripción del proyecto 1',
    coverImage: 'https://picsum.photos/800/600?random=5',
    images: [
      'https://picsum.photos/800/600?random=51',
      'https://picsum.photos/800/600?random=52',
      'https://picsum.photos/800/600?random=53',
    ]
  },
  {
    id: 'proyecto-2',
    title: 'Proyecto 2',
    description: 'Descripción del proyecto 2',
    coverImage: 'https://picsum.photos/800/600?random=6',
    images: [
      'https://picsum.photos/800/600?random=61',
      'https://picsum.photos/800/600?random=62',
      'https://picsum.photos/800/600?random=63',
    ]
  },
  {
    id: 'proyecto-3',
    title: 'Proyecto 3',
    description: 'Descripción del proyecto 3',
    coverImage: 'https://picsum.photos/800/600?random=7',
    images: [
      'https://picsum.photos/800/600?random=71',
      'https://picsum.photos/800/600?random=72',
      'https://picsum.photos/800/600?random=73',
    ]
  },
  {
    id: 'proyecto-4',
    title: 'Proyecto 4',
    description: 'Descripción del proyecto 4',
    coverImage: 'https://picsum.photos/800/600?random=8',
    images: [
      'https://picsum.photos/800/600?random=81',
      'https://picsum.photos/800/600?random=82',
      'https://picsum.photos/800/600?random=83',
    ]
  },
];

export default function Architecture() {
  return (
    <Container maxW="100vw" minH="100vh" p={0} position="relative" bg="#1E1E1E">
      <Box 
        position="fixed" 
        top={4} 
        left={0}
        right={0}
        mx={4}
        zIndex={2}
        px={6}
        py={2}
      >
        <Navigation />
      </Box>

      <Box pt={16}>
        <Grid 
          templateColumns="repeat(2, 1fr)"
          gap="1px"
          bg="#1E1E1E"
          mx="0"
          w="100%"
        >
          {architectureProjects.map((project, index) => (
            <Link 
              key={project.id}
              href={`/architecture/${project.id}`}
              style={{ textDecoration: 'none' }}
            >
              <Box
                position="relative"
                aspectRatio="16/9"
                overflow="hidden"
                role="group"
                cursor="pointer"
                bg="#1E1E1E"
              >
                <Box
                  w="100%"
                  h="100%"
                  bgImage={`url(${project.coverImage})`}
                  bgSize="cover"
                  bgPosition="center"
                  transition="all 0.3s ease"
                  _groupHover={{
                    opacity: 0.8,
                  }}
                />
                <Box
                  position="absolute"
                  bottom={6}
                  left={index % 2 === 0 ? 6 : 'auto'}
                  right={index % 2 === 0 ? 'auto' : 6}
                  color="white"
                  opacity={0}
                  transition="opacity 0.3s ease"
                  _groupHover={{
                    opacity: 1,
                  }}
                >
                  <Text fontSize="sm" fontWeight="light">{project.title}</Text>
                </Box>
              </Box>
            </Link>
          ))}
        </Grid>
      </Box>
    </Container>
  );
} 