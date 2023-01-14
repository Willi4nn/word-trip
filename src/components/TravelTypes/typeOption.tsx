import { useBreakpointValue } from '@chakra-ui/media-query';
import { Flex, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

type typeOptionProps = {
  icon: string;
  text: string;
};

export default function TypeOption({ icon, text }: typeOptionProps) {
  const onMobile = useBreakpointValue({
    base: false,
    sm: true,
  });
  return (
    <Flex direction={['row', 'column']} align="center" justify="center">
      {onMobile ? (
        <Image src={`/icons/${icon}.svg`} w="85px" h="85px" mb="6" />
      ) : (
        <Text color="yellow.400" fontSize="4xl" mr="2">
          •
        </Text>
      )}
      <Text fontWeight="600" color="gray.700" fontSize={['md', 'xl', '2xl']}>
        {text}
      </Text>
    </Flex>
  );
}
