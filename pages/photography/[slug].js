import { Box, Container, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Navigation from '../../components/Navigation';

// Datos de ejemplo - luego podrás personalizarlos con tus proyectos reales
const projectsData = {
  'street-photography': {
    title: 'Street Photography',
    description: 'Una colección de momentos urbanos capturados en blanco y negro, explorando la vida cotidiana en las calles.',
    images: [
      '/images/photography/street/1.jpg',
      '/images/photography/street/2.jpg',
      '/images/photography/street/3.jpg',
      // Agrega más imágenes según necesites
    ]
  },
  'portraits': {
    title: 'Portraits',
    description: 'Serie de retratos artísticos que exploran la personalidad y emociones de los sujetos.',
    images: [
      '/images/photography/portraits/1.jpg',
      '/images/photography/portraits/2.jpg',
      '/images/photography/portraits/3.jpg',
      // Agrega más imágenes según necesites
    ]
  },
  'landscapes': {
    title: 'Landscapes',
    description: 'Capturas de paisajes naturales que muestran la belleza y grandeza de nuestro entorno.',
    images: [
      '/images/photography/landscapes/1.jpg',
      '/images/photography/landscapes/2.jpg',
      '/images/photography/landscapes/3.jpg',
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