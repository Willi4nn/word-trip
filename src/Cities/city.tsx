import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

type CityProps = {
  image: string;
  city: string;
  country: string;
  flag: string;
};

export default function City({ image, city, country, flag }: CityProps) {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src={image} h="170px" w="100%" />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="gray.100"
        border="1px"
        borderColor="yellow.300"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="medium">
            {city}
          </Heading>
          <Text fontSize="md" fontWeight="medium" color="gray.500">
            {country}
          </Text>
        </Flex>
        <Image
          src={flag}
          w="30px"
          h="30px"
          borderRadius="50%"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
}
