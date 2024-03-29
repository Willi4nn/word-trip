import {
  Flex,
  Heading,
  Text,
  Popover,
  PopoverTrigger,
  Icon
} from '@chakra-ui/react';
import { RiInformationLine } from 'react-icons/ri';

export default function Infos() {
  return (
    <Flex align="center" justify="space-between">
      <Flex
        direction="column"
        justify="center"
        align={['flex-start', 'flex-start', 'center']}
      >
        <Heading
          fontSize={['2xl', '5xl']}
          color="yellow.400"
          fontWeight="medium"
        >
          50
        </Heading>
        <Text fontWeight="semibold" fontSize={['md', 'xl']} color="gray.700">
          países
        </Text>
      </Flex>
      <Flex
        direction="column"
        justify="center"
        align={['flex-start', 'flex-start', 'center']}
      >
        <Heading
          fontSize={['2xl', '5xl']}
          color="yellow.400"
          fontWeight="medium"
        >
          60
        </Heading>
        <Text fontWeight="semibold" fontSize={['md', 'xl']} color="gray.700">
          línguas
        </Text>
      </Flex>
      <Flex
        direction="column"
        justify="center"
        align={['flex-start', 'flex-start', 'center']}
      >
        <Heading
          fontSize={['2xl', '5xl']}
          color="yellow.400"
          fontWeight="medium"
        >
          27
        </Heading>
        <Text fontWeight="semibold" fontSize={['md', 'xl']} color="gray.700">
          cidades +100
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon
                  cursor="pointer"
                  as={RiInformationLine}
                  ml="1"
                  color="gray.400"
                  w={['10px', '16px']}
                  h={['10px', '16px']}
                />
              </span>
            </PopoverTrigger>
          </Popover>
        </Text>
      </Flex>
    </Flex>
  );
}
