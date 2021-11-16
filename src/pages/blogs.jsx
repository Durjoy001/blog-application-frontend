import React from "react";
import axios from "axios";
import { Center, Box, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Blog from "../components/blog/blog";
import { ChakraProvider, SimpleGrid, Container } from "@chakra-ui/react";

const Blogs = (props) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/blogs')
        .then((res) => {
            setBlogs(res.data.blog);
        })
        .catch((err) => {

        });
    },[]);

    return (
       <ChakraProvider>
          <Container maxW="80rem" centerContent>
            <SimpleGrid columns={[1, 1, 1, 1]}>
              {blogs.map(function (blog) {
                const { id, name, description, creator } = blog;
                return (
                  <Blog
                    key={id}
                    name={name}
                    description={description}
                    creator={creator}
                  />
                );
              })}
            </SimpleGrid>
          </Container>
        </ChakraProvider>
      );
}

export default Blogs;