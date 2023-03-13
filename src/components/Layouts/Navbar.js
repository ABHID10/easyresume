import { IconButton } from '@chakra-ui/button';
import {
    Stack,
    Flex,
    Heading,
    Spacer,
    HStack,
    Text,
    Button,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
        <Stack
            p={5}
            bg={'#1D1D1D'}
            as='header'
        >
            <Flex
                w='full'
                alignItems={'center'}
            >
                <Heading as='h3' ml={{ base: 0, sm: 8 }} size='lg' fontWeight={'thin'} color='#e3405f' style={{ fontFamily: "Pacifico" }}>ResGen</Heading>
                <Spacer></Spacer>
                {/* <HStack spacing={10} mr={{ base: 0, sm: 8 }} as='nav' style={{ fontFamily: 'Poppins' }}>
                    
                </HStack> */}
            </Flex>

        </Stack>
    )
}

export default Navbar