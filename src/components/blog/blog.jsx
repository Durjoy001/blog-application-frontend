import React from "react";
import {
  Box,
  Flex,
  AspectRatio,
  Image,
  Text,
  Link,
  Button,
  Stack
} from "@chakra-ui/react";

function Blog(props) {
  const { name, description, creator } = props;

  return (
    <Box
      p={4}
      display={{ md: "flex" }}
      maxWidth="32rem"
      borderWidth={1}
      margin={2}
    >
      {/* <AspectRatio ratio={1 / 1}>
        <Image
          maxWidth="200px"
          margin="auto"
          src="https://picsum.photos/id/237/250/250"
          alt="Woman paying for a purchase"
        />
      </AspectRatio> */}
      <Stack
        align={{ base: "center", md: "stretch" }}
        textAlign={{ base: "center", md: "left" }}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
      >
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="lg"
          letterSpacing="wide"
          color="teal.600"
        >
          {name}
        </Text>
        <Text
          my={1}
          display="block"
          fontSize="md"
          lineHeight="normal"
          fontWeight="semibold"
          //href="#"
        >
          {description}
        </Text>
        <Text my={2} color="gray.500">
          {creator}
        </Text>
        <Button maxWidth="100px" my={2}>
          Click me!
        </Button>
      </Stack>
    </Box>
  );
}


export default Blog;