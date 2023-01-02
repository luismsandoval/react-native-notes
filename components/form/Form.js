import React, { useState, useContext } from "react";
import {
  Box,
  Center,
  VStack,
  HStack,
  Input,
  Button,
  useToast,
} from "native-base";
import ListContext from "../../context/ListContext";

const Form = ({ navigation }) => {
  const [input, setInput] = useState("");
  const { setList } = useContext(ListContext);
  const toast = useToast();

  const addItem = (title) => {
    if (title === "") {
      toast.show({
        title: "Please enter a note",
        status: "warning",
      });
      return;
    }
    setList((prevList) => {
      return [
        ...prevList,
        {
          title: title,
          isCompleted: false,
        },
      ];
    });
  };

  return (
    <Box
      flex={1}
      bg={{
        linearGradient: {
          colors: ["lightBlue.300", "violet.800"],
          start: [0, 0],
          end: [1, 0],
        },
      }}
      p="12"
      rounded="xl"
      _text={{
        fontSize: "md",
        fontWeight: "medium",
        color: "warmGray.50",
        textAlign: "center",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Center w="100%">
        <Box w="100%">
          <VStack space={4}>
            <HStack space={2}>
              <Input
                flex={1}
                onChangeText={(value) => setInput(value)}
                value={input}
                placeholder="Take a note..."
              />
              <Button
                borderRadius="sm"
                variant="solid"
                onPress={() => {
                  addItem(input);
                  setInput("");
                  navigation.navigate("List");
                }}
              >
                +
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
};

export default Form;
