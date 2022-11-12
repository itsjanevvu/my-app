import React from "react"

import { Box } from '@chakra-ui/react'
// import Filter from './components/filtercauses';
import {useNavigate} from "react-router-dom"

import { Input } from '@chakra-ui/react'

import { Button } from "@chakra-ui/react"

import { Center } from "@chakra-ui/react"


import { ThemeProvider } from "@emotion/react"

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'


export default function Signin (){

  let navigate= useNavigate();
  return(
//



    <div>

      <Box mt= "50px" textAlign="center">
        <Box pb= '20px' pt= '20px'>Welcome to girlCode</Box>



        <FormControl>
          < FormLabel textAlign="center">Email address</FormLabel>
          <Input maxWidth={60} type='email' />
          <FormHelperText></FormHelperText>


          < FormLabel  textAlign="center">Password</FormLabel>
          <Input maxWidth={60} type='email' />
          <FormHelperText></FormHelperText>

          <Button onClick={()=> {navigate('/filters')}} colorScheme='blue'>Sign in</Button>
          {/* <button  onClick={()=> {navigate('/filters')}}>Sign in</button> */}


        </FormControl>

      </Box>




    </div>





  )
}