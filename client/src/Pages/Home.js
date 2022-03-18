import React from "react";
import "../App.css"
import { Container, Box, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Signup from "../components/Forms/Signup";
import Login  from "../components/Forms/Login";


const Home = () => {

    return (
        <>
            <div className="Home">
                <Container maxW="xl" centerContent>

                    {/* you can write CSS in Tags in this UI Library */}

                    <Box
                        d="flex"
                        justifyContent=" center"
                        p={3}
                        w="100%"
                        m=" 40px 0 15px 0px"
                        borderRadius="lg"
                        borderWidth="1px"
                        backgroundColor="white"
                    >
                        <Text color="black" fontSize={"2xl"}> Chat Application </Text>
                    </Box>

                    <Box p={6} w="100%" mb="20px" borderRadius="lg" borderWidth="1px" backgroundColor="white" >

                        <Tabs variant='soft-rounded'
                            color="black"
                            colorScheme='green'>
                            <TabList>
                                <Tab width="50%">Login</Tab>
                                <Tab width="50%">SignUp</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Login />
                                </TabPanel>
                                <TabPanel>
                                    <Signup />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>

                    </Box>
                </Container>
            </div>
        </>
    )
}

export default Home;