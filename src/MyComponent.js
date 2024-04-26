import React from "react";
import {
  ChakraProvider,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

const MyComponent = () => {
  return (
    <ChakraProvider>
      <Box p={5} shadow="md" borderWidth="1px">
        <FormControl>
          <FormLabel htmlFor="email">Name</FormLabel>
          <Input id="email" type="name" />
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input id="email" type="email" />

          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </FormControl>
      </Box>
    </ChakraProvider>
  );
};

export default MyComponent;
