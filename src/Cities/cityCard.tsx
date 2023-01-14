import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import City from './city';

export default function CityCard() {
  return (
    <>
      <City
        city="Lodres"
        country="Reino Unido"
        flag="/flags/unitedKingdomFlag.jpg"
        image="/city/lodon.jpg"
      />
      <City
        city="Paris"
        country="França"
        flag="/flags/franceFlag.jpg"
        image="/city/paris.jpg"
      />
      <City
        city="Roma"
        country="Itália"
        flag="/flags/ItalyFlag.jpg"
        image="/city/rome.jpg"
      />
      <City
        city="Praga"
        country="República Tcheca"
        flag="/flags/czechRepublicFlag.jpg"
        image="/city/prague.jpg"
      />
      <City
        city="Amsterdã"
        country="Holanda"
        flag="/flags/netherlandsFlag.jpg"
        image="/city/amsterdam.jpg"
      />
    </>
  );
}
