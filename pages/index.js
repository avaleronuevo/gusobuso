import { Box, Container } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Navigation from '../components/Navigation';
import { useRef, useState, useEffect } from 'react';
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
  const swiperRef = useRef(null);
  const [textColor, setTextColor] = useState('white');

  const handleClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const updateTextColor = async (imageUrl) => {
    try {
      const img = document.createElement('img');
      img.crossOrigin = 'Anonymous';
      img.src = imageUrl;
      await new Promise((resolve) => {
        img.onload = resolve;
      });

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      let r = 0, g = 0, b = 0;
      let pixelCount = 0;

      // Calcular el color promedio de la parte superior de la imagen (donde está el texto)
      for (let y = 0; y < canvas.height / 4; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const i = (y * canvas.width + x) * 4;
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
          pixelCount++;
        }
      }

      // Calcular el promedio
      r = Math.round(r / pixelCount);
      g = Math.round(g / pixelCount);
      b = Math.round(b / pixelCount);

      // Calcular el color complementario
      const complementary = {
        r: 255 - r,
        g: 255 - g,
        b: 255 - b
      };

      // Ajustar el contraste del color complementario
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      if (brightness > 128) {
        // Si el fondo es claro, oscurecer el complementario
        complementary.r = Math.max(0, complementary.r - 50);
        complementary.g = Math.max(0, complementary.g - 50);
        complementary.b = Math.max(0, complementary.b - 50);
      } else {
        // Si el fondo es oscuro, aclarar el complementario
        complementary.r = Math.min(255, complementary.r + 50);
        complementary.g = Math.min(255, complementary.g + 50);
        complementary.b = Math.min(255, complementary.b + 50);
      }

      setTextColor(`rgb(${complementary.r}, ${complementary.g}, ${complementary.b})`);
    } catch (error) {
      console.error('Error al analizar la imagen:', error);
      setTextColor('white'); // Color por defecto en caso de error
    }
  };

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
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          reverseDirection: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
          waitForTransition: true,
        }}
        speed={1500}
        loop={true}
        random={true}
        style={{
          width: '100vw',
          height: '100vh',
        }}
        onSlideChange={(swiper) => {
          const currentSlide = slides[swiper.realIndex];
          updateTextColor(currentSlide.image);
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
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
