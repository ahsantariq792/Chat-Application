import { VStack } from '@chakra-ui/react'
import React from 'react'
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { useToast } from "@chakra-ui/toast";
import { useState } from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios"

const Signup = () => {
    const [show, setShow] = useState(false)
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();
    const [picLoading, setPicLoading] = useState(false);

    const toast = useToast()
    const history = useHistory()

    const handleClick = () => {
        setShow(!show)
    }

    const submitHandler = async () => {
        setPicLoading(true);

        if (!name || !email || !password || !confirmPassword) {
            toast({
                title: "Please Fill all the Feilds",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setPicLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            toast({
                title: "Passwords Do Not Match",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            return;
        }
        console.log(name, email, password, pic);

        try {
            //header API
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const data = await axios.post("http://localhost:5000/api/user", { name, email, password, pic }, config)
            toast({
                title: "Registration Successfull",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });

            setPicLoading(false)
            localStorage.setItem("userinfo", JSON.toStringfy(data))
            history.push("/chats")
        }
        catch {

        }
    }

    const postDetails = (pics) => {
        setPicLoading(true)
        console.log(pics);
        if (pics === undefined) {
            toast({
                title: "Please Select an Image!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            return;
        }

        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "chat-app");
            data.append("cloud_name", "ahsan792");
            fetch("https://api.cloudinary.com/v1_1/ahsan792/image/upload", {
                method: "post",
                body: data,
            })
                .then((res) => res.json())
                .then((data) => {
                    setPic(data.url.toString());
                    console.log("pic : ", data.url.toString());
                    setPicLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setPicLoading(false);
                });
        } else {
            setPicLoading(false);
            console.log("error")
        }
    }
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
                        accept='image/*'
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