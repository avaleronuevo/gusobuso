import { Box, Container, Heading } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Navigation from '../components/Navigation';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

// Aquí definimos las imágenes del carrusel
const slides = [
  {
    id: 1,
    image: '/images/slide1.jpg',
    title: 'Agustín',
  },
  {
    id: 2,
    image: '/images/slide2.jpg',
    title: 'Photographer',
  },
  {
    id: 3,
    image: '/images/slide3.jpg',
    title: 'Architect',
  },
];

export default function Home() {
  return (
    <Container maxW="100vw" p={0} position="relative" bg="#1E1E1E">
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
      
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={2000}
        loop={true}
        style={{
          width: '100vw',
          height: '100vh',
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Box
              w="100%"
              h="100%"
              bgImage={`url(${slide.image})`}
              bgSize="cover"
              bgPosition="center"
              position="relative"
            >
              <Box
                position="absolute"
                inset={0}
                bg="blackAlpha.300"
                backdropFilter="blur(1px)"
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <Box
        position="absolute"
        bottom={8}
        left={8}
        color="white"
        zIndex={2}
        textShadow="2px 2px 4px rgba(0,0,0,0.5)"
      >
        <Heading 
          size="2xl" 
          fontWeight="light"
          letterSpacing="wider"
        >
          Agustín
        </Heading>
      </Box>
    </Container>
  );
}
