import { Flex, Grid, Icon, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiArrowLeftSLine } from 'react-icons/ri';

export default function Header() {
  const { asPath } = useRouter();
  const continentPage = asPath !== '/';

  return (
    <Flex
      w="100%"
      as="header"
      mx="auto"
      px="1rem"
      h={['50px', '100px']}
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        {continentPage && (
          <Link href="/" legacyBehavior>
            <a>
              <Icon
                as={RiArrowLeftSLine}
                fontSize={[20, 40]}
                justifyContent="start"
              />
            </a>
          </Link>
        )}

        <Image
          w={['81px', '184px']}
          src="/logo.svg"
          alt="logo"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}
