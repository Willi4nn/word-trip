import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import SwiperCore, { A11y, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function Slider() {
  return (
    <Flex
      w="100%"
      maxW="1240px"
      mx="auto"
      mb={['5', '10']}
      h={['250px', '450px']}
    >
      <Swiper
        loop
        slidesPerView={1}
        navigation
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: '100%', flex: 1 }}
      >
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/continents/europe.jpg)"
            bgSize="cover"
            bgRepeat="no-repeat"
            bgPosition="center"
            textAlign="center"
          >
            <Link href="/continent/europa" legacyBehavior>
              <a>
                <Heading
                  fontSize={['3xl', '4xl', '5xl']}
                  color="gray.100"
                  fontWeight="bold"
                >
                  Europa
                </Heading>
                <Text
                  fontSize={['0.8rem', '1xl', '2xl']}
                  color="gray.300"
                  fontWeight="bold"
                  mt={['2', '4']}
                  mx="20"
                >
                  O continente mais antigo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/continents/africa.jpg)"
            bgSize="cover"
            bgRepeat="no-repeat"
            bgPosition="center"
            textAlign="center"
          >
            <Link href="/" legacyBehavior>
              <a>
                <Heading
                  fontSize={['3xl', '4xl', '5xl']}
                  color="gray.100"
                  fontWeight="bold"
                >
                  África
                </Heading>
                <Text
                  fontSize={['0.8rem', '1xl', '2xl']}
                  color="gray.300"
                  fontWeight="bold"
                  mt={['2', '4']}
                  mx="20"
                >
                  Identificada pela sua riqueza de fauna selvagem, sua
                  biodiversidade e suas culturas tradicionais.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/continents/southAmerica.jpg)"
            bgSize="cover"
            bgRepeat="no-repeat"
            bgPosition="center"
            textAlign="center"
          >
            <Link href="/" legacyBehavior>
              <a>
                <Heading
                  fontSize={['3xl', '4xl', '5xl']}
                  color="gray.100"
                  fontWeight="bold"
                >
                  América do Sul
                </Heading>
                <Text
                  fontSize={['0.8rem', '1xl', '2xl']}
                  color="gray.300"
                  fontWeight="bold"
                  mt={['2', '4']}
                  mx="20"
                >
                  Identificada por sua riqueza histórica, cultura e
                  biodiversidade, além de suas paisagens naturais exuberantes.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/continents/northAmerica.jpg)"
            bgSize="cover"
            bgRepeat="no-repeat"
            bgPosition="center"
            textAlign="center"
          >
            <Link href="/" legacyBehavior>
              <a>
                <Heading
                  fontSize={['3xl', '4xl', '5xl']}
                  color="gray.100"
                  fontWeight="bold"
                >
                  América do Norte
                </Heading>
                <Text
                  fontSize={['0.8rem', '1xl', '2xl']}
                  color="gray.300"
                  fontWeight="bold"
                  mt={['2', '4']}
                  mx="20"
                >
                  Conhecida por sua grande diversidade cultural, paisagens
                  naturais e cidades cosmopolitas.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/continents/asia.jpg)"
            bgSize="cover"
            bgRepeat="no-repeat"
            bgPosition="center"
            textAlign="center"
          >
            <Link href="/" legacyBehavior>
              <a>
                <Heading
                  fontSize={['3xl', '4xl', '5xl']}
                  color="gray.100"
                  fontWeight="bold"
                >
                  Ásia
                </Heading>
                <Text
                  fontSize={['0.8rem', '1xl', '2xl']}
                  color="gray.300"
                  fontWeight="bold"
                  mt={['2', '4']}
                  mx="20"
                >
                  Conhecida por sua riqueza de cultura e história, com templos
                  antigos e cidades modernas, além de sua diversidade geográfica
                  que vai desde montanhas até praias.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/continents/oceania.jpg)"
            bgSize="cover"
            bgRepeat="no-repeat"
            bgPosition="center"
            textAlign="center"
          >
            <Link href="/" legacyBehavior>
              <a>
                <Heading
                  fontSize={['3xl', '4xl', '5xl']}
                  color="gray.100"
                  fontWeight="bold"
                >
                  Oceania
                </Heading>
                <Text
                  fontSize={['0.8rem', '1xl', '2xl']}
                  color="gray.300"
                  fontWeight="bold"
                  mt={['2', '4']}
                  mx="20"
                >
                  Conhecida por suas paisagens naturais, como praias de areia
                  branca e montanhas cobertas de neve, e sua cultura indígena
                  rica e tradições fascinantes.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
