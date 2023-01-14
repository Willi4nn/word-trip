import { Flex, Heading, Text, Image } from '@chakra-ui/react';

export default function Banner() {
  return (
    <Flex
      w="100%"
      h={['163px', '250px', '250px', '335px']}
      bgImage="url('/banner.jpg')"
      bgSize="cover"
      bgPosition={['100% 20%', '100% 20%', '100% 30%']}
      bgRepeat="no-repeat"
    >
      <Flex
        justify={['center', 'space-between']}
        align="center"
        w="100%"
        mx="auto"
        px={['4', '10', '20', '20', '36']}
      >
        <div>
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={['2l', '2xl', '2xl', '4xl']}
          >
            5 Continentes,
            <br />
            infinitas possibilidades.
          </Heading>
          <Text mt="5" color="gray.300" fontSize={['0.8rem', 'xl']}>
            Chegou a hora de tirar do papel a viagem que você
            <br />
            sempre sonhou.
          </Text>
        </div>

        <Image
          ml="20"
          w={['300px', '300px', '300px', '430px']}
          display={['none', 'none', 'block']}
          src="./airplane.svg"
          alt="Avião sobrevoando"
          transform="translateY(45px)"
        />
      </Flex>
    </Flex>
  );
}
