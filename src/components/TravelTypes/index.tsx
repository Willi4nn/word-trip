import { Grid, GridItem } from '@chakra-ui/react';
import TypeOption from './typeOption';

export default function TravelTypes() {
  return (
    <Grid
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      w="100%"
      mt={['10', '32']}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <TypeOption icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <TypeOption icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <TypeOption icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <TypeOption icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <TypeOption icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
