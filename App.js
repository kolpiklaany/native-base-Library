import React from "react";
import { Divider, Heading, Box, Center, NativeBaseProvider } from "native-base";

const Example = () => {
  return <Box alignItems="center" >
      <Box w="140">
        <Heading mx="3" alignItems="center" flexDirection="row">
          Hello
        </Heading>
        <Divider bg="emerald.500" mx="2" my="2" />
        <Heading mx="3" alignItems="center" flexDirection="row">
          World!
        </Heading>
      </Box>
    </Box>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    