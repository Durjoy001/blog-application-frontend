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
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import { Redirect, useHistory } from "react-router-dom";
import { FaUserAlt, FaLock } from "react-icons/fa";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const UpdateBlog = (props) =>{
    const [loaded,setLoaded] = useState(false);
    const  id  = useParams().id;
    const [blogs, setBlogs] = useState([]);
    const [name,setName] = useState();
    const [author,setAuthor] = useState();
    const [description,setDescription] = useState();
    const [requestState, setRequestState] = useState(false);
    const toast = useToast(); 
    const { isLoggedIn, login ,user} = useContext(AuthContext);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/v1/blogs/${id}`)
        .then((res) => {
            setBlogs(res.data.blog)
            setName(res.data.blog.name);
            setDescription(res.data.blog.description);
            setAuthor(res.data.blog.creator);
            setRequestState(true)
            setLoaded(true);
        })
        .catch((err) => {

        });
    },[]);

    const updateBlog = (e) =>{
        e.preventDefault();
        setRequestState("loading");
        axios.patch(`http://127.0.0.1:8000/api/v1/blogs/${id}`,{name,description},{ headers:{"Authorization" : `Bearer ${user.token}`}})
        .then((res) => {
            setRequestState("completed");
            toast({
                title: "Blog successfully updated!!",
                duration: 4000,
                status: "success",
                isClosable: true,
            });
        }).catch((err) => {
            setRequestState("error");
        })
    }
    if(!loaded){
        return <h1>loading...</h1>
    }
    else {
        if(!isLoggedIn || author !== user.name){
            return <Redirect to={'/blogExpander/' + id }/>
        }
        else{
            return (
                <form onSubmit={updateBlog}>
                    <Stack
                        spacing={4}
                        p="10rem"
                        backgroundColor="whiteAlpha.900"
                        boxShadow="md"
                    >
                        <Textarea
                            rows="3"
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoFocus
                            size="lg"
                        />
                        <Textarea
                            rows="10"
                            value = {description}
                            type="text"
                            name= "description"
                            onChange={(e) => setDescription(e.target.value)}
                            size="lg"
                        />
                        {
                            requestState === "error" && (
                            <Text display="block" fontSize="sm" color="red">
                            Something Went Wrong!! Please Try Again.
                            </Text>
                        )}
                        {
                            requestState === "completed" && (<Redirect to={'/blogExpander/' + id }/>)
                        }
                        <Button
                            borderRadius={0}
                            type="submit"
                            variant="solid"
                            colorScheme="teal"
                            width="full"
                        >
                        UPDATE
                        </Button>
                    </Stack>
                </form>
            )
        } 
    }   
}
export default UpdateBlog;