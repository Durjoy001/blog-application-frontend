import React from "react";
import {
  Box,
  Flex,
  AspectRatio,
  Image,
  Text,
  Link,
  Button,
  Stack,
  Collapse,
  Container,
  Spacer
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import BlogExpander from "./blogExpander";

function Blog(props) {
  const { id,name, description, creator ,time} = props;
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
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
          //fontWeight="semibold"
          //href="#"
        >
          {description.substring(0, 150)+"...."}
        </Text>

        <Text my={2} color="gray.500">
          {"Author: " + creator}
        </Text>
        <Text my={2} color="gray.500">
          {time}
        </Text>
        <Button  maxWidth="100px" my={2} align-right>
          <a href ={'http://localhost:3000/blogExpander/' + id }> Show More</a> 
        </Button>
      </Stack>
    </Box>
  );
}


export default Blog;