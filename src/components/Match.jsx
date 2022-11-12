import React from "react"
import { Box, Button, ButtonGroup, SimpleGrid,Center, Square, Circle, Text, Heading, Divider  } from "@chakra-ui/react"
import { Icon } from '@chakra-ui/react'
import { MdInsertEmoticon } from 'react-icons/md'

export default function  Match (){
    return(

            <div>
              <Box bg='white' height='60px' width='300px' color='#A0AEC0'></Box>

              <Center bg='white' h='100px' w='1650px' color='#CBD5E0'>
                <Heading as='h2' size='2xl' colour='#CBD5E0' noOfLines={1}>
                  Your Matched Job:
                </Heading>
              </Center>

              <Center bg='white' h='400px' w='1650px' color='#CBD5E0'>
                <a href="https://period.org/"></a> {/*trying to hyperlink pictures but its not working :(*/}
                <img src="https://cdn.rightgift.com/organizations/logos/2581d331-d666-4e00-9cd3-df2dcadad1cb/b94c4d9f-a745-41e4-b35b-17a2c4427b07/mobile.png"
                   alt="nonprofit logo" width="500" height="500"/>
              </Center>


              <SimpleGrid columns={3} spacing={5}>


                <Box bg='#CBD5E0' height='100px' width='400px' color='white'>
                  <Center bg='#CBD5E0' h='100px' color='white'>
                    <Heading as='h6' size='lg'>
                      Ideal Skills:
                      <Heading as='h6' size='sm'>
                        Python, Javascript, HTML
                      </Heading>
                    </Heading>
                  </Center>
                </Box>

                <Box bg='#CBD5E0' height='100px' width='400px' color='white'>
                    <Center bg='#CBD5E0' h='100px' color='white'>
                      <Heading as='h6' size='lg'>
                         Cause:
                        <Heading as='h6' size='sm'>
                          Menstruation Equity
                        </Heading>
                      </Heading>
                    </Center>
                  </Box>

                <Box bg='#CBD5E0' height='100px' width='400px' color='white'>
                  <Center bg='#CBD5E0' h='100px' color='white'>
                    <Heading as='h6' size='lg'>
                      Number of Volunteers:
                      <Heading as='h6' size='sm'>
                        3
                      </Heading>
                    </Heading>
                  </Center>
                </Box>
              </SimpleGrid>
              <Box bg='white' height='60px' width='300px' color='#A0AEC0'></Box>

              <SimpleGrid columns={3} spacing={5}>

                <Center bg='white' h='100px' w='200px' color='#A0AEC0'>
                  <Heading as='h6' size='2xl'>
                    Discription
                  </Heading>
                  </Center>


              <Box bg='white' height='100px' width='10px' color='#A0AEC0'></Box>
              <Center height='50px'><Divider orientation='vertical' /></Center>
              <Box bg='white' height='100px' width='10px' color='#A0AEC0'></Box>

              <Box bg='white' height='100px' width='300px' color='#A0AEC0'>
                <Center bg='white' h='100px' w='950px' color='#A0AEC0'>
                  <Text fontSize='lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                  </Center>
                </Box>
              </SimpleGrid>

              <Box bg='white' height='60px' width='300px' color='#A0AEC0'></Box>

              <Center bg='white' h='400px' w='1650px' color='#CBD5E0'>
                <Button colorScheme='#CBD5E0' variant='outline' size='lg'>
                  Volunteer Now!
                </Button>
              </Center>

            </div>


    )
}