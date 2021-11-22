import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext, useState } from "react";


const Header = (props) => {
  const { isLoggedIn, login, logout, user } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Blog Application  
        </Heading>
      </Flex>
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        {
          user && (
            <Button
              variant="outline"
              _hover={{ bg: "teal.700", borderColor: "teal.700" }}
            >
              {
                user.name
              }
            </Button>
          )
        }
        {
          isLoggedIn && (<Button as = {RouterLink} to="/createBlog"
            variant="outline"
            _hover={{ bg: "teal.700", borderColor: "teal.700" }}
          >
            Create Blog
          </Button>)
       }
        {
          !isLoggedIn && (<Button as = {RouterLink} to="/login"
            variant="outline"
            _hover={{ bg: "teal.700", borderColor: "teal.700" }}
          >
            LogIn or SignUp
          </Button>)
        }
        {
          isLoggedIn && (<Button onClick={logout}
          variant="outline"
          _hover={{ bg: "teal.700", borderColor: "teal.700" }}
        >
          Log Out
        </Button>)
        }
        {/* <Button
          variant="outline"
          _hover={{ bg: "teal.700", borderColor: "teal.700" }}
        >
          Create account
        </Button> */}
      </Box>
    </Flex>
  );
};

export default Header;
