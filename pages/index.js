import { Box, Container } from '@chakra-ui/react';
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
  },
  {
    id: 2,
    image: '/images/slide2.jpg',
  },
  {
    id: 3,
    image: '/images/slide3.jpg',
  },
  {
    id: 4,
    image: '/images/slide4.jpg',
  },
  {
    id: 5,
    image: '/images/slide5.jpg',
  },
  {
    id: 6,
    image: '/images/slide6.jpg',
  },
  {
    id: 7,
    image: '/images/slide7.jpg',
  }
];

export default function Home() {
  return (
    <Container maxW="100vw" p={0} position="relative" bg="#1E1E1E">
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
      
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          reverseDirection: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
          waitForTransition: true,
        }}
        speed={3000}
        loop={true}
        random={true}
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
    </Container>
  );
}
