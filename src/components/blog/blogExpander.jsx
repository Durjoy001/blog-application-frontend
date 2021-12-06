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
  ChakraProvider,
  useToast,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import axios from "axios";
import Blog from "./blog";
import { AuthContext } from "../../context/authContext";
import { Redirect, useHistory } from "react-router-dom";

const BlogExpander= (props) =>{
    const { isLoggedIn, login, logout, user } = useContext(AuthContext);
    const { id } = useParams();
    const [blogs, setBlogs] = useState([]);
    const [requestState, setRequestState] = useState(false);
    const toast = useToast(); 
    const [isOpen, setIsOpen] = React.useState(false)
    const onClose = () => setIsOpen(false)
    const cancelRef = React.useRef()

    useEffect(() => {
        axios.get(`/api/v1/blogs/${id}`)
        .then((res) => {
            setBlogs(res.data.blog);
        })
        .catch((err) => {

        });
    },[]);

    const deleteBlog = (e) =>{
      e.preventDefault();
      setRequestState("loading");
      axios.delete(`/api/v1/blogs/${id}`,{ headers:{"Authorization" : `Bearer ${user.token}`}})
      .then((res) => {
          setRequestState("completed");
          toast({
              title: "Blog successfully deleted!!",
              duration: 4000,
              status: "success",
              isClosable: true,
          });
        }).catch((err) => {
            setRequestState("error");
      })
    }
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
                p="2rem"
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
                  >
                    {blogs.description}
                  </Text>

                  <Text my={2} color="gray.500">
                    {"Author: " + blogs.creator}
                  </Text>
                  <Text my={2} color="gray.500">
                    {"Created at: " + blogs.time}
                  </Text>
                    {
                      isLoggedIn && blogs.creator === user.name && (<Button
                          w="920px"
                          variant="outline"
                          _hover={{ bg: "teal.700", borderColor: "teal.700" }}
                        >
                        <a href ={'/blogs/' + id}> Update </a> 
                      </Button>)
                    }
                    {
                      requestState === "error" && (
                        <Text display="block" fontSize="sm" color="red">
                          Something Went Wrong!! Please Try Again.
                        </Text>
                      )
                    }
                    {
                        requestState === "completed" && (<Redirect to='/'/>)
                    }
                    {
                      isLoggedIn && blogs.creator === user.name &&(<><Button colorScheme="red" w="920px" variant="outline"
                        _hover={{ bg: "red.200", borderColor: "red.200" }} onClick={() => setIsOpen(true)}>
                        Delete
                      </Button>
              
                      <AlertDialog
                        isOpen={isOpen}
                        leastDestructiveRef={cancelRef}
                        onClose={onClose}
                      >
                        <AlertDialogOverlay>
                          <AlertDialogContent>
                            <AlertDialogHeader fontSize="lg" fontWeight="bold">
                              Delete
                            </AlertDialogHeader>
                
                            <AlertDialogBody>
                              Are you sure to delete this blog? You can't undo this action afterwards.
                            </AlertDialogBody>
                
                            <AlertDialogFooter>
                              <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                              </Button>
                              <Button colorScheme="red" onClick={deleteBlog} ml={3}>
                                Delete
                              </Button>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialogOverlay>
                     </AlertDialog>
                     </>)
                    }
                </Stack>
             </Box>
          </SimpleGrid>
        </Container>
      </ChakraProvider>
   );
}
export default BlogExpander;