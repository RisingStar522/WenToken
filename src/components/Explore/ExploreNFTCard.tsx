import {
  Badge,
  Box,
  Button,
  Flex,
  FlexProps,
  HStack,
  Image,
  Stack,
  Stat,
  StatArrow,
  StatHelpText,
  StatNumber,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { TOKENS } from "../../constants/constants";
import { NFTCard } from "../Portfolio/PortfolioNFTCard";

// const data = {
//   isTradeable: true,
//   imageURL:
//     "https://storage.googleapis.com/prod.static-assets.parallelnft.com/card-art/Marcolian_Orb_Se-1.gif",
//   collection: "Parallel Alpha",
//   name: "Marcolian Parallel Collectible Card Back",
//   value: "0.3 ETH",
//   pnl: "3.1%",
// };

interface NFTCardProps extends NFTCard, FlexProps {
  onClick: () => void;
}

const ExploreNFTCard = ({
  collectionId,
  pnl,
  value,
  imageUrl,
  isTradeable,
  name,
  onClick,
  ...props
}: NFTCardProps) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      border-radius="20 20 0 0"
      {...props}
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        w={"full"}
        borderWidth="0px"
        rounded="lg"
        boxShadow={"lg"}
        position="relative"
      >
        <Image
          src={imageUrl}
          alt={`${name} image`}
          roundedTop="lg"
          width={"60%"}
          mx="auto"
        />

        <Box p="4">
          <Box d="flex" alignItems="flex-start" mb={2}>
            {isTradeable ? (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
                Tradeable
              </Badge>
            ) : (
              <Badge rounded="full" px="2" fontSize="0.8em" color="black">
                Untradeable
              </Badge>
            )}
          </Box>
          <HStack
            justifyContent="space-between"
            alignItems={"flex-start"}
            spacing={1}
            mb={4}
          >
            <Stack width={"67%"} spacing={0}>
              <Text fontSize="sm" fontWeight="normal" isTruncated>
                {TOKENS[collectionId]}
              </Text>
              <Text fontSize="md" fontWeight="semibold" lineHeight={1.1}>
                {name}
              </Text>
            </Stack>
            <Stat
              display={"flex"}
              width={"33%"}
              textAlign={"right"}
              justifyContent={"flex-end"}
            >
              <StatNumber fontSize={"md"}>{value}</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                {pnl}
              </StatHelpText>
            </Stat>
          </HStack>
          <Flex justifyContent="space-evenly">
            <Button minW="30%" maxW="50%" variant={"normal"} onClick={onClick}>
              Buy
            </Button>
            <Button
              minW="30%"
              maxW="50%"
              variant={"normal-dark"}
              isDisabled={!isTradeable}
            >
              Trade
            </Button>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default ExploreNFTCard;
