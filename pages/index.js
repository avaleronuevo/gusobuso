import { Box, Container } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Preloader } from 'swiper/modules';
import Navigation from '../components/Navigation';
import { useRef, useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

// Aquí definimos las imágenes del carrusel con sus colores predominantes
const slides = [
  {
    id: 1,
    image: '/images/slide1.jpg',
    isDark: true, // true si la imagen es oscura, false si es clara
  },
  {
    id: 2,
    image: '/images/slide2.jpg',
    isDark: false,
  },
  {
    id: 3,
    image: '/images/slide3.jpg',
    isDark: true,
  },
  {
    id: 4,
    image: '/images/slide4.jpg',
    isDark: true,
  },
  {
    id: 5,
    image: '/images/slide5.jpg',
    isDark: false,
  },
  {
    id: 6,
    image: '/images/slide6.jpg',
    isDark: true,
  },
  {
    id: 7,
    image: '/images/slide7.jpg',
    isDark: false,
  }
];

const colors = {
  light: [
    '#1E1E1E', // negro
    '#2C3E50', // azul oscuro
    '#34495E', // gris oscuro
    '#8E44AD', // morado
    '#2E4053', // azul grisáceo
  ],
  dark: [
    '#ECF0F1', // blanco grisáceo
    '#F1C40F', // amarillo
    '#E74C3C', // rojo
    '#3498DB', // azul
    '#2ECC71', // verde
  ]
};

export default function Home() {
  const swiperRef = useRef(null);
  const [textColor, setTextColor] = useState('white');
  const [isLoading, setIsLoading] = useState(true);

  // Precarga de imágenes
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = slides.map((slide) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = slide.image;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setIsLoading(false);
      } catch (error) {
        console.error('Error preloading images:', error);
        setIsLoading(false);
      }
    };

    preloadImages();
  }, []);

  const handleClick = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const updateTextColor = (slideIndex) => {
    const slide = slides[slideIndex];
    const colorArray = slide.isDark ? colors.dark : colors.light;
    const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    setTextColor(randomColor);
  };

  if (isLoading) {
    return (
      <Container maxW="100vw" minH="100vh" bg="#1E1E1E" display="flex" alignItems="center" justifyContent="center">
        <Box color="white">Cargando...</Box>
      </Container>
    );
  }

  return (
    <Container maxW="100vw" p={0} position="relative" bg="#1E1E1E" onClick={handleClick}>
      <Box 
        position="fixed" 
        top={4} 
        left={0}
        right={0}
        mx={4}
        zIndex={2}
        px={6}
        py={2}
        style={{ color: textColor }}
        transition="color 0.3s ease"
      >
        <Navigation />
      </Box>
      
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, EffectFade, Preloader]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          reverseDirection: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
          waitForTransition: true,
        }}
        speed={300}
        fadeEffect={{
          crossFade: true
        }}
        preloadImages={false}
        watchSlidesProgress={true}
        preventInteractionOnTransition={true}
        loop={true}
        style={{
          width: '100vw',
          height: '100vh',
        }}
        onSlideChange={(swiper) => {
          updateTextColor(swiper.realIndex);
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
              loading="eager"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
