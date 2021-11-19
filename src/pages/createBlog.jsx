import React from "react"
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    useToast,
    FormHelperText,
    InputRightElement,
    Text,
    Spinner
  } from "@chakra-ui/react";
  import { FaUserAlt, FaLock } from "react-icons/fa";
  import { AuthContext } from "../context/authContext";
  import { useContext, useState } from "react";
  import { Redirect, useHistory } from "react-router-dom";
  import axios from "axios";

  const CFaUserAlt = chakra(FaUserAlt);
  const CFaLock = chakra(FaLock);

const CreateBlog = (props) => {
    
    const { isLoggedIn, login ,user} = useContext(AuthContext);
    const [name,setName] = useState();
    const [description,setDescription] = useState();
    const [requestState, setRequestState] = useState("not-requested");
    const toast = useToast(); 

    const createBlog = (e) => {
        e.preventDefault();
        setRequestState("loading");
        console.log(name)
        console.log(description)
        axios.post('http://127.0.0.1:8000/api/v1/blogs',{name,description},{ headers:{"Authorization" : `Bearer ${user.token}`}})
        .then((res) => {
            setRequestState("completed");
            toast({
                title: "Blog successfully created!!",
                duration: 4000,
                status: "success",
                isClosable: true,
            });
        }).catch((err) => {
            setRequestState("error");
        })
    }
    if(!isLoggedIn){
        return <Redirect to="/" />;
    }
    else{
        return (
            <form onSubmit={createBlog}>
            <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
            >
            <FormControl>
                <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                />
                <Input 
                    placeholder="Blog Title"
                    type="text"
                    resize="vertical"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoFocus
                />
                </InputGroup>
            </FormControl>
            <FormControl>
                <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                />
                <Input 
                    placeholder="Blog Description"
                    type="text"
                    //m={1}
                    name= "description"
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                </InputGroup>
            </FormControl>
                {
                    requestState === "error" && (
                    <Text display="block" fontSize="sm" color="red">
                    Something Went Wrong!! Please Try Again.
                    </Text>
                )}
                {
                    requestState === "completed" && (<Redirect to="/" />)
                }
            <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
            >
              SUBMIT
            </Button>
            
            </Stack>
        </form>
        )
    }
  }

export default CreateBlog;