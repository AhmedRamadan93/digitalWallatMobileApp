const LoginView = props => {
    const [viewPassword, setViewPassword] = useState('password');
    const {toggleColorMode} = useColorMode();
  
    return (
      <Box height={'full'} bgColor={useColorModeValue('light.100', 'dark.200')}>
        <Center my="auto">
          <Container>
            <Box>
              <Box>
                <Heading
                  textAlign={'center'}
                  color={useColorModeValue('dark.100', 'light.100')}>
                  Hello Again !
                </Heading>
                <Text
                  textAlign="center"
                  fontSize={'lg'}
                  color={useColorModeValue('gray.600', 'light.200')}>
                  welcome back you have been missed !
                </Text>
              </Box>
              <Box width="full" mt={'16'}>
                <FormControl isRequired>
                  <Input
                    py={3}
                    px={5}
                    bgColor={useColorModeValue('white', 'light.200')}
                    type="text"
                    color={'dark.100'}
                    placeholderTextColor={'dark.100'}
                    rounded="2xl"
                    width="full"
                    defaultValue=""
                    borderWidth={0}
                    placeholder="enter username"
                  />
                </FormControl>
  
                <FormControl isRequired mt={6} position="relative">
                  <Input
                    py={3}
                    px={5}
                    bgColor={useColorModeValue('white', 'light.200')}
                    type="text"
                    color={'dark.100'}
                    placeholderTextColor={'dark.100'}
                    rounded="2xl"
                    width="full"
                    defaultValue=""
                    borderWidth={0}
                    placeholder="enter passowrd"
                  />
                  <Text
                    textAlign="right"
                    fontSize={'sm'}
                    color={useColorModeValue('primary.200', 'primary.600')}
                    mt={5}
                    mr={1}>
                    forget password ?
                  </Text>
                </FormControl>
                <Box mt={8}>
                  <Button
                    onPress={() => toggleColorMode()}
                    rounded="xl"
                    size="lg"
                    backgroundColor={useColorModeValue(
                      'primary.100',
                      'dark.300',
                    )}>
                    login
                  </Button>
                </Box>
  
                <Box mt={8}>
                  <Text
                    color={useColorModeValue('gray.600', 'light.200')}
                    textAlign={'center'}>
                    or continue with
                  </Text>
                  <Button.Group mt={8} justifyContent={'center'}>
                    <Button
                      borderColor={useColorModeValue('white', 'dark.300')}
                      borderWidth={2}
                      _text={{color: useColorModeValue('gray.600', 'light.200')}}
                      variant="outline"
                      rounded={'xl'}
                      size="lg">
                      fb
                    </Button>
                    <Button
                      borderColor={useColorModeValue('white', 'dark.300')}
                      rounded={'xl'}
                      borderWidth={2}
                      _text={{color: useColorModeValue('gray.600', 'light.200')}}
                      variant="outline"
                      size="lg">
                      go
                    </Button>
                  </Button.Group>
                  <Divider mt={6} />
                  <Box
                    mt={3}
                    py={2}
                    display="flex"
                    flexDirection={'row'}
                    justifyContent="center"
                    alignItems="center">
                    <Text color={useColorModeValue('gray.600', 'light.200')}>
                      not a member ?
                    </Text>
                    <Button
                      variant={'ghost'}
                      _text={{
                        color: useColorModeValue('primary.200', 'secondary.200'),
                      }}>
                      register now
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Center>
      </Box>
    );
  };