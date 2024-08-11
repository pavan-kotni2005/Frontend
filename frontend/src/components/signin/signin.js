import { Input, FormControl, FormLabel, FormHelperText, Button, Stack, Box, Center, Text } from '@chakra-ui/react';
import axios from 'axios';
import {useState} from 'react'
import { api } from '../action/api';
export const SignIn = () => {
    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')
    const signin =async()=>{
        await axios.post(api+'/login',{Email,Password})
                .then((res)=>{
                    if(res.data.message){
                        console.log(res?.data?.value)
                        alert("login sucessfully")
                    } else {
                        alert("user not found")
                        window.location.href="/signup"
                    }
                })
                .catch((e)=>console.log(e))
    } 
  return (
    <Center height="100vh" bg="green.100"> {/* Background color for the whole viewport */}
      <Box 
        bgGradient="linear(to-r, #c34fc9, #6f2fde)" // Gradient background combining both colors
        p={8} 
        borderRadius="md" 
        boxShadow="xl" // Refined shadow
        maxW="xl" // Increased width for the form container
        mx="auto" // Centering the box horizontally
      >
        <Stack spacing={4}> {/* Reduced spacing between elements */}
          <Text fontSize="2xl" fontWeight="bold" color="white" mb={4}>
            Sign In
          </Text>

          <FormControl>
            <FormLabel color="white" >Email Address</FormLabel>
            <Input 
              type='email' 
              placeholder="Enter your email" 
              _placeholder={{ color: 'gray.300' }} // Placeholder color
              onChange={(e)=> setEmail( e.target.value)}
            />
            <FormHelperText color="whiteAlpha.800">We'll never share your email.</FormHelperText>
          </FormControl>
          
          <FormControl>
            <FormLabel color="white" >Password</FormLabel>
            <Input 
              type='password' 
              placeholder="Enter your password" 
              _placeholder={{ color: 'gray.300' }} // Placeholder color
              onChange={(e)=>setPassword(e.target.value)}
            />
            <FormHelperText color="whiteAlpha.800">Your password must be 8-20 characters long.</FormHelperText>
          </FormControl>

          <Button 
            bg="#ff4081" // Custom background color for the Sign In button
            size="md" // Medium size button
            mt={4} 
            alignSelf="center"
            borderRadius="full" // Makes the button pill-shaped
            color="white" // Text color
            _hover={{ bg: '#ff60a0', boxShadow: 'md' }} // Hover background color and shadow
            _active={{ bg: '#ff007a', boxShadow: 'sm' }} // Active state background color and shadow
            onClick={signin}
          >
            Sign In
          </Button>

          <Stack spacing={2} mt={4} align="center"> {/* Reduced spacing for stack */}
            <Button 
              variant="outline" 
              colorScheme="purple" 
              size="md"
              borderRadius="full" // Makes the button pill-shaped
              _hover={{ bg: 'purple.50' }} // Hover background color
              onClick={() => window.location.href = '/signup'} 
            >
              Sign Up
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};
