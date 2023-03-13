import {
    Text,
    Button,
    Image,
    Heading,
    Stack,
    Flex,
    Box,
    Container,
} from '@chakra-ui/react';
import hero from '../../images/manOnTable.svg';

const Header = () => {

    return (
        <>
            <Container maxW='8xl' as='main' style={{background:"#1D1D1D"}}>

                <Stack
                    py={{ base: 8, md: 20 }}
                    spacing={{ base: 4, md: 10 }}
                    direction={{ base: 'column', md: 'row' }}
                    align='center'>

                    <Stack flex={1} direction={'column'} spacing={4}>
                        <Heading
                            fontSize={{ base: '3xl', md: '5xl' }}
                            bgGradient="linear(to-r, crimson, #e3405f)"
                            bgClip="text">
                            Getting a JOB is now EASY !
                        </Heading>

                        <Text color={'white'} lineHeight={1.7} style={{ fontFamily: 'Poppins' }}>
                            Forget spending hours formatting your resume, or choosing complimentary fonts for your cover letter. Creating a resume online with ResGen's free resume builder will give you a sleek and attractive resume, without the fuss.
                        </Text>
                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={{ base: 'column', sm: 'row' }}
                        >
                            <Button
                                as={'a'}
                                href={'#builder'}
                                rounded={'md'}
                                size={'lg'}
                                px={6}
                                colorScheme={'pink'}
                            >
                                Build Resume
                            </Button>
                        </Stack>

                    </Stack>

                    <Flex
                        flex={1}
                    >
                        <Box
                            position={'relative'}
                            height={'400px'}
                            width={'full'}
                            overflow={'hidden'}
                        >
                            <Image
                                alt={'Hero Image'}
                                fit={'contain'}
                                align={'center'}
                                w={'100%'}
                                h={'100%'}
                                src={hero}
                                draggable='false'
                            />
                        </Box>
                    </Flex>
                </Stack>

            </Container>
        </>
    )
}

export default Header
