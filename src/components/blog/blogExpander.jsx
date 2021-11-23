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
  Spacer,
  SimpleGrid,
  ChakraProvider
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import axios from "axios";
import Blog from "./blog";
import { AuthContext } from "../../context/authContext";

const BlogExpander= (props) =>{

  const { isLoggedIn, login, logout, user } = useContext(AuthContext);

  const { id } = useParams();
  
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/v1/blogs/${id}`)
        .then((res) => {
            setBlogs(res.data.blog);
            console.log(res.data.blog);
            console.log(blogs.name)
        })
        .catch((err) => {

        });
    },[]);
      return (
        <ChakraProvider>
        <Container maxW="80rem" centerContent>
        <SimpleGrid columns={[1, 1, 1, 1]}>
        <Box 
          p={4}
          w="1000px"
          display={{ md: "flex" }}
          //maxWidth="62rem"
          borderWidth={1}
          margin={2}
        >
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
              {blogs.name}
            </Text>
            <Text
              my={1}
              display="block"
              fontSize="md"
              lineHeight="normal"
              //fontWeight="semibold"
              //href="#"
            >
            {blogs.description}
            </Text>

            <Text my={2} color="gray.500">
              {"Author: " + blogs.creator}
            </Text>
            <Text my={2} color="gray.500">
              {blogs.time}
            </Text>
            {
              isLoggedIn && blogs.creator === user.name && (<Button
                   w="920px"
                  variant="outline"
                  _hover={{ bg: "teal.700", borderColor: "teal.700" }}
                >
                  <a href ={'http://localhost:3000/updateBlog/' + id}> Update </a> 
                </Button>)
            }
            {/* <Button as = {RouterLink} to="/blogExpander" maxWidth="100px" my={2} align-right>
              Show more!
            </Button> */}
          </Stack>
        </Box>
        </SimpleGrid>
        </Container>
        </ChakraProvider>
      );
}
export default BlogExpander;