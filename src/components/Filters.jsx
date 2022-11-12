import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,

} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function App() {
  let navigate= useNavigate();

  return (

  <ChakraProvider theme={theme}>
      <Box textAlign = "center" fontSize="xl">

        <Box bg='white' height='60px' width='300px' color='#A0AEC0'></Box>

        <Text>
          What are you passionate about?
        </Text>
        <Box bg='white' height='20px' width='300px' color='#A0AEC0'></Box>

        <Button  > Climate Change </Button>
        <Button> Medical Research </Button>
        <Button> Menstruation Equity </Button>
        <Box bg='white' height='60px' width='300px' color='#A0AEC0'></Box>

        <Text>
          What skills do you currently have?
        </Text>
        <Box bg='white' height='20px' width='300px' color='#A0AEC0'></Box>

        <Button> Design </Button>
        <Button> Marketing</Button>
        <Button> Technical Experience </Button>
        <Box bg='white' height='60px' width='300px' color='#A0AEC0'></Box>

        <Text>
          What is your degree?
        </Text>
        <Box bg='white' height='20px' width='300px' color='#A0AEC0'></Box>

        <Button> Bachelors </Button>
        <Button> Masters </Button>
        <Button> High School </Button>
        <Box bg='white' height='60px' width='300px' color='#A0AEC0'></Box>

        <Text>
          What skills do you want to learn?
        </Text>
        <Box bg='white' height='20px' width='300px' color='#A0AEC0'></Box>

        <Button> Python </Button>
        <Button> Javascript </Button>
        <Button> C++/C </Button>

      </Box>
    <Box bg='white' height='20px' width='300px' color='#A0AEC0'></Box>

    <Box textAlign = "center" fontSize="xl">
      <button onClick={()=> {navigate('/display')}} size='lg'variant='solid'>Next</button>
    </Box>

    </ChakraProvider>
  );
}

export default App;