import {
    Text,
    Stack,
    Box,
    Container,
    useColorModeValue
} from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box
            bg={"#1D1D1D"}
            color={useColorModeValue('white', 'gray.200')}>

            <Container
            style={{textAlign:"center"}}
                >

                <Stack fontWeight={'medium'} >
                    <Text>ResGen | &copy; 2023. All rights reserved.</Text>
                </Stack>


                

            </Container>
        </Box>
    )
}

export default Footer