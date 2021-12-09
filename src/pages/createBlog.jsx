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
    Spinner,
    Textarea
}from "@chakra-ui/react";
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
    const [error,setError] = useState();
    const toast = useToast(); 

    const createBlog = (e) => {
        e.preventDefault();
        setRequestState("loading");
        axios.post('https://blog-application-backend101.herokuapp.com/api/v1/blogs',{name,description},{ headers:{"Authorization" : `Bearer ${user.token}`}})
        .then((res) => {
            setRequestState("completed");
            toast({
                title: "Blog successfully created!!",
                duration: 4000,
                status: "success",
                isClosable: true,
            });
        }).catch((err) => {
            setError(err.response.data.errors[0]);
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
                p="5rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
                >
                    <Textarea
                        rows="3"
                        placeholder="Blog Title"
                        type = "text"
                        name = "name"
                        onChange={(e) => setName(e.target.value)}
                        required
                        size="lg"
                    />
                    <Textarea
                        rows="10"
                        placeholder="Blog Description"
                        type="text"
                        name= "description"
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        size="lg"
                    />
                    {
                        requestState === "error" && (
                        <Text display="block" fontSize="sm" color="red">
                        {error}
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