import React from 'react'
import { VStack } from '@chakra-ui/react'
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { useToast } from "@chakra-ui/toast";
import { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const toast = useToast()

    const handleClick = () => {
        setShow(!show)
    }
    const submitHandler = () => { }



    return (
        <>
            <VStack spacing="10px" color={"black"}>
                <FormControl>
                    <FormLabel>
                        Email
                    </FormLabel>
                    <Input
                        onChange={(e) => setEmail(e.target.value)} />
                </FormControl>

                <FormControl>
                    <FormLabel>
                        Password
                    </FormLabel>
                    <InputGroup>
                        <Input
                            type={show ? "text" : "password"}
                            onChange={(e) => setPassword(e.target.value)} />
                        <InputRightElement width={"4.5rem"}>
                            <Button h="1.5rem" size="sm" onClick={handleClick}>{show ? "Hide" : "Show"}</Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                <Button
                    colorScheme="blue"
                    width="100%"
                    style={{ marginTop: 20 }}
                    onClick={submitHandler}
                >
                    Login
                </Button>
            </VStack>

        </>
    )
}

export default Login