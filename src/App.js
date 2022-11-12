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
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Filter from './components/Filters';
import Match from './components/Match';
import Display from './components/Projects';
import Signin from './components/Signin';


function App() {
  return (
    <ChakraProvider>  

      <Router>
       <Routes>
          <Route path= "/" element= {<Signin/>} />
          <Route path= "/filters" element= {<Filter/>} />
          <Route path= "/display" element= {<Display/>} />
          <Route path= "/match" element= {<Match/>}/>

        </Routes>

        </Router>
    </ChakraProvider>
  );
}

export default App;
