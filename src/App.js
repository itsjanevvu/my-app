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

const projectlist = [

  {
      title: "Period Movement",

      role: "Web Development",

      description: "Helping women gain access to menstruation products",

      skills: "React.js",

      time: "1-2 weeks",


  },

  {
      title: "Period Project",
       
      role: "Data analyst",

      description: "Analyzing data about marginalized groups of people",

      skills: "Python, SQl",

      time: "1 month"


  } ]











function App() {


  const cards = projectlist.map(item => {
    return (
        <Display
            title={item.title}
            role={item.role}
    
            description={item.description}
            skills={item.skills}
         
            time = {item.time}
        />
    )
}) 
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
