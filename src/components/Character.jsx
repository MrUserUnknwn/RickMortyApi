import React from "react";
import { Image, Box, HStack, Heading, Text, Flex,Stack,  Card, CardBody, CardFooter,Button, Tooltip, Tag,Spacer } from "@chakra-ui/react";

export default function Character({ character }) {

  

  function Feacture({ character }) {
    return (
 
      <Card margin="20px" direction={{base: "column", lg: "row"}} overflow="hidden" variant="outline">
      
        <Image  borderRadius="2px" objectFit="cover" maxW={{base: "100%", "lg": "200px"}} src={character.image} alt={character.name}/>
        
            <CardBody minW="500px">
                <Box marginLeft="20px">
                <Heading size="md">{character.name}</Heading>
                <Button marginTop="20px" bgColor={character.status === "Alive" ? "green.400" : character.status === "Dead" ? "red.700" : null} py="2">{character.status}</Button>
                <Spacer>

                </Spacer>
                <Tag marginTop="20px" bgColor="gren">Specie: {character.species}</Tag>
                
               
                <CardFooter display="flex" justifyContent="center" >
                <Text fontWeight="bold" fontSize="lg">Its origin is: {character.origin.name}</Text>
                </CardFooter>
                </Box>
            </CardBody>

      </Card>

    );
  }

  function StackEx() {
    return (
      <HStack spacing={24} marginTop="20px">
        <Feacture character={...character}/>
      </HStack>
    );
  }

  return (
    StackEx()
  );
}
