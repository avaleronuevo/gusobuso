import { Box, Container, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Navigation from '../../components/Navigation';

// Datos de ejemplo - luego podrás personalizarlos con tus proyectos reales
const projectsData = {
  'residential': {
    title: 'Residential',
    description: 'Colección de proyectos residenciales que exploran diferentes tipologías de vivienda, desde casas unifamiliares hasta edificios multifamiliares.',
    images: [
      '/images/architecture/residential/1.jpg',
      '/images/architecture/residential/2.jpg',
      '/images/architecture/residential/3.jpg',
      // Agrega más imágenes según necesites
    ]
  },
  'commercial': {
    title: 'Commercial',
    description: 'Proyectos comerciales y de oficinas que buscan crear espacios funcionales y estéticamente atractivos para el trabajo y el comercio.',
    images: [
      '/images/architecture/commercial/1.jpg',
      '/images/architecture/commercial/2.jpg',
      '/images/architecture/commercial/3.jpg',
      // Agrega más imágenes según necesites
    ]
  },
  'urban-planning': {
    title: 'Urban Planning',
    description: 'Propuestas de planificación urbana y diseño de espacios públicos que buscan mejorar la calidad de vida en la ciudad.',
    images: [
      '/images/architecture/urban-planning/1.jpg',
      '/images/architecture/urban-planning/2.jpg',
      '/images/architecture/urban-planning/3.jpg',
      // Agrega más imágenes según necesites
    ]
  }
};

export default function Project() {
  const router = useRouter();
  const { slug } = router.query;
  const project = projectsData[slug];

  if (!project) return null; // Manejo básico de proyectos no encontrados

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
        <VStack spacing={12} align="stretch">
          <Box>
            <Heading 
              size="2xl" 
              fontWeight="light"
              letterSpacing="wider"
              mb={4}
            >
              {project.title}
            </Heading>
            <Text fontSize="lg" color="whiteAlpha.800">
              {project.description}
            </Text>
          </Box>

          <Grid 
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)"
            }}
            gap={8}
          >
            {project.images.map((image, index) => (
              <Box
                key={index}
                w="100%"
                h={{
                  base: "300px",
                  md: "400px"
                }}
                position="relative"
                overflow="hidden"
              >
                <Box
                  w="100%"
                  h="100%"
                  bgImage={`url(${image})`}
                  bgSize="cover"
                  bgPosition="center"
                  transition="transform 0.3s ease"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Box>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Container>
  );
} 