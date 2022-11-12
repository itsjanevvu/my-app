import { GridItem } from "@chakra-ui/react";
import React from "react"
import {useNavigate} from "react-router-dom"
import { Container } from "@chakra-ui/react";
import { Box } from "framer-motion";

import { Center } from "@chakra-ui/react";
export default function Display (props){
  let navigate= useNavigate();
  return(



    <div>

      <Center margin= "80px" height= "300px" bg='tomato'>

        <Container centerContent={false} margin={1}>

          <h1 color="white">Web developer</h1>

        </Container>




      </Center>

      <button  onClick={()=> {navigate('/match')}}>Select a cause</button>


    </div>





  )
}

