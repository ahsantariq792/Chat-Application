import { VStack } from '@chakra-ui/react'
import React from 'react'
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { useToast } from "@chakra-ui/toast";
import { useState } from 'react';
const Signup = () => {
    const [show, setShow] = useState(false)
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();
    const [picLoading, setPicLoading] = useState(false);

    const handleClick = () => {
        setShow(!show)
    }

    const submitHandler = () => { }
    const postDetails = () => { }

    return (
        <>
            <VStack spacing="10px" color={"black"}>
                <FormControl>
                    <FormLabel>
                        Name
                    </FormLabel>
                    <Input
                        // placeholder='Enter Your Name'
                        onChange={(e) => setName(e.target.value)} />
                </FormControl>

                <FormControl>
                    <FormLabel>
                        Email
                    </FormLabel>
                    <Input
                        // placeholder='Enter Your Email'
                        onChange={(e) => setEmail(e.target.value)} />
                </FormControl>

                <FormControl>
                    <FormLabel>
                        Password
                    </FormLabel>
                    <InputGroup>
                        <Input
                            type={show ? "text" : "password"}
                            // placeholder='Enter Your Password'
                            onChange={(e) => setPassword(e.target.value)} />
                        <InputRightElement width={"4.5rem"}>
                            <Button h="1.5rem" size="sm" onClick={handleClick}>{show ? "Hide" : "Show"}</Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                <FormControl>
                    <FormLabel>
                        Confirm Password
                    </FormLabel>
                    <InputGroup>
                        <Input
                            type={show ? "text" : "password"}
                            // placeholder='Enter Your Password'
                            onChange={(e) => setConfirmPassword(e.target.value)} />
                        <InputRightElement width={"4.5rem"}>
                            <Button h="1.5rem" size="sm" onClick={handleClick}>{show ? "Hide" : "Show"}</Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                <FormControl>
                    <FormLabel>
                        Upload Image
                    </FormLabel>
                    <Input
                        type="file"
                        accept='images/*'
                        onChange={(e) => postDetails(e.target.files[0])} />
                </FormControl>
                <Button
                    colorScheme="blue"
                    width="100%"
                    style={{ marginTop: 20 }}
                    onClick={submitHandler}
                    isLoading={picLoading}
                >
                    Sign Up
                </Button>
            </VStack>
        </>
    )
}

export default Signup