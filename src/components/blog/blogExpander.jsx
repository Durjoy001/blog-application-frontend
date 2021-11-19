import { Input,Container,FormControl,FormLabel } from "@chakra-ui/react"
const BlogExpander= (props) =>{
    const a = "abcd";
    return(
        
      <FormControl id="first-name" isRequired>
        <FormLabel>First name</FormLabel>
        <Input placeholder="First name" />
      </FormControl>
    )
}

export default BlogExpander;