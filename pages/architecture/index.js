import { Box, Container, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import Navigation from '../../components/Navigation';
import Link from 'next/link';

// Datos de ejemplo - luego podrás personalizarlos con tus proyectos
const architectureProjects = [
  {
    id: 'residential',
    title: 'Residential',
    description: 'Proyectos residenciales y viviendas unifamiliares',
    coverImage: '/images/architecture/residential-cover.jpg',
  },
  {
    id: 'commercial',
    title: 'Commercial',
    description: 'Espacios comerciales y oficinas',
    coverImage: '/images/architecture/commercial-cover.jpg',
  },
  {
    id: 'urban-planning',
    title: 'Urban Planning',
    description: 'Proyectos de planificación urbana y espacio público',
    coverImage: '/images/architecture/urban-planning-cover.jpg',
  },
];

export default function Architecture() {
  return (
    <Container maxW="100vw" minH="100vh" p={0} position="relative" bg="#1E1E1E">
      <Box 
        position="fixed" 
        top={4} 
        right={4} 
        zIndex={2}
        backdropFilter="blur(5px)"
        borderRadius="full"
        px={6}
        py={2}
      >
        <Navigation />
      </Box>

      <Container maxW="container.xl" pt={24} pb={16}>
        <VStack spacing={16} align="stretch">
          <Heading 
            size="2xl" 
            fontWeight="light"
            letterSpacing="wider"
          >
            Architecture
          </Heading>

          <Grid 
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)"
            }}
            gap={8}
          >
            {architectureProjects.map((project) => (
              <Link 
                key={project.id}
                href={`/architecture/${project.id}`}
                style={{ textDecoration: 'none' }}
              >
                <Box
                  position="relative"
                  h="400px"
                  overflow="hidden"
                  role="group"
                  cursor="pointer"
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