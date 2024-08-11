import { Input, FormControl, FormLabel, FormHelperText, Button, Stack, Box, Center, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { api } from '../action/api';

export const SignUp = () => {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Confirmpassword, setConfirmpassword] = useState('');

    const signup = async () => {
        
      if (!Name || !Email || !Password || !Confirmpassword) {
        alert( "Please fill in all required details.");
        return
    }

        try {
          
            const response = await axios.post(`${api}/signup`, { Name, Email, Password, Confirmpassword });
            if (Password !== Confirmpassword) {
                alert( 'Passwords do not match.' );
                return
            }
            else if (response.data.message) {
                alert('Sign up successful');
            }
             
        } catch (e) {
            console.error(e);
            alert('An error occurred during signup');
        }
    };

    const handleSignInClick = () => {
        window.location.href = '/signin'; // Redirect to Sign In page
    };

    return (
        <Center height="100vh" width="100vw" bgGradient="linear(to-r, #FFB6C1, #FF69B4)">
            <Box 
                bgGradient="linear(to-r, #FF7F50, #FF1493)"
                p={6}
                borderRadius="md"
                boxShadow="0px 6px 20px rgba(0, 0, 0, 0.3)"
                width={{ base: "90%", sm: "80%", md: "60%", lg: "50%", xl: "40%" }}
                maxWidth="500px"
                mx="auto"
                border="1px solid"
                borderColor="gray.300"
                bgColor="#ffffff"
            >
                <Stack spacing={5} align="center">
                    <Text fontSize="xl" fontWeight="bold" color="white" mb={4}>
                        Sign Up
                    </Text>

                    <FormControl>
                        <FormLabel color="white">Full Name</FormLabel>
                        <Input 
                            type='text' 
                            placeholder="Enter your full name" 
                            _placeholder={{ color: 'gray.300' }}
                            textAlign="center"
                            bgColor="white"
                            borderColor="gray.300"
                            borderRadius="md"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel color="white">Email Address</FormLabel>
                        <Input 
                            type='email' 
                            placeholder="Enter your email" 
                            _placeholder={{ color: 'gray.300' }}
                            textAlign="center"
                            bgColor="white"
                            borderColor="gray.300"
                            borderRadius="md"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FormHelperText color="whiteAlpha.700">We'll never share your email.</FormHelperText>
                    </FormControl>

                    <FormControl>
                        <FormLabel color="white">Password</FormLabel>
                        <Input 
                            type='password' 
                            placeholder="Enter your password" 
                            _placeholder={{ color: 'gray.300' }}
                            textAlign="center"
                            bgColor="white"
                            borderColor="gray.300"
                            borderRadius="md"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FormHelperText color="whiteAlpha.700">Your password must be 8-20 characters long.</FormHelperText>
                    </FormControl>

                    <FormControl>
                        <FormLabel color="white">Confirm Password</FormLabel>
                        <Input 
                            type='password' 
                            placeholder="Confirm your password" 
                            _placeholder={{ color: 'gray.300' }}
                            textAlign="center"
                            bgColor="white"
                            borderColor="gray.300"
                            borderRadius="md"
                            onChange={(e) => setConfirmpassword(e.target.value)}
                        />
                    </FormControl>

                    <Button 
                        bgGradient="linear(to-r, #FF1493, #FF7F50)"
                        size="lg"
                        width="full"
                        mt={4}
                        alignSelf="center"
                        borderRadius="full"
                        color="white"
                        _hover={{ bgGradient: 'linear(to-r, #FF7F50, #FF1493)', boxShadow: 'md' }}
                        _active={{ bgGradient: 'linear(to-r, #FF1493, #FF7F50)', boxShadow: 'sm' }}
                        onClick={signup}
                    >
                        Sign Up
                    </Button>

                    <Stack spacing={2} mt={4}>
                        <Text color="whiteAlpha.700">Already have an account?</Text>
                        <Button 
                            bgGradient="linear(to-r, #1E90FF, #00BFFF)"
                            color="white"
                            size="lg"
                            width="full"
                            mt={4}
                            alignSelf="center"
                            borderRadius="full"
                            _hover={{ bgGradient: 'linear(to-r, #00BFFF, #1E90FF)', opacity: 0.8 }}
                            onClick={handleSignInClick}
                        >
                            Sign In
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    );
};
