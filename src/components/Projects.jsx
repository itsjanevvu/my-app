import { GridItem, Heading, Text } from '@chakra-ui/react';
import React from "react";
import {useNavigate} from "react-router-dom";
import { Container } from "@chakra-ui/react";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";

import { Center } from "@chakra-ui/react";
export default function Display (props){
    let navigate= useNavigate();
    return(

        

            <div>
              <Center bg='white' margin= "80px" height= "300px" color='#CBD5E0'>
                <Heading as='h2' size='2xl' colour='#CBD5E0' noOfLines={1}>
                  Recommended Jobs:
                </Heading>
              </Center>

                <Center margin= "80px" height= "300px" >
                  <Box bg='#A0AEC0' height='300px' width='1400px' color='white'>
                    <Heading as='h6' size='2xl'>
                      Discription
                    </Heading>
                    <Box bg='#A0AEC0' height='60px' width='1400px' ></Box>
                    <Center bg='#A0AEC0' h='100px' w='1100px' color='white'>
                      <Text fontSize='lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    </Center>
                  </Box>
                </Center>
              <Center margin= "10px" height= "5px" >
                <button size='md' variant= 'outline' onClick={()=> {navigate('/match')}}>Select this cause</button>
              </Center>

              <Center margin= "80px" height= "300px" >
                <Box bg='#A0AEC0' height='300px' width='1400px' color='white'>
                  <Heading as='h6' size='2xl'>
                    Discription
                  </Heading>
                  <Box bg='#A0AEC0' height='60px' width='1400px' ></Box>
                  <Center bg='#A0AEC0' h='100px' w='1400px' color='white'>
                    <Text fontSize='lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                  </Center>
                </Box>
              </Center>
              <Center margin= "10px" height= "5px" >
                <button size='md' variant= 'outline' onClick={()=> {navigate('/match')}}>Select this cause</button>
              </Center>

              <Center margin= "80px" height= "300px" >
                <Box bg='#A0AEC0' height='300px' width='1400px' color='white'>
                  <Heading as='h6' size='2xl'>
                    Discription
                  </Heading>
                  <Box bg='#A0AEC0' height='60px' width='1400px' ></Box>
                  <Center bg='#A0AEC0' h='100px' w='1400px' color='white'>
                    <Text fontSize='lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                  </Center>
                </Box>
              </Center>
              <Center margin= "10px" height= "5px" >
                <button size='md' variant= 'outline' onClick={()=> {navigate('/match')}}>Select this cause</button>
              </Center>

            </div>
           




    )
}