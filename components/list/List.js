import React, { useContext } from "react";
import {
  Box,
  Center,
  VStack,
  HStack,
  Checkbox,
  Text,
  Button,
} from "native-base";

import ListContext from "../../context/ListContext";

const List = ({ navigation }) => {
  const { list, setList } = useContext(ListContext);

  const handleDelete = (idx) => {
    setList((prevList) => {
      const temp = prevList.filter((_, item) => item !== idx);
      return temp;
    });
  };

  const handleStatus = (idx) => {
    setList((prevList) => {
      const newList = [...prevList];
      newList[idx].isCompleted = !newList[idx].isCompleted;
      return newList;
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
            <VStack space={2}>
              {list.map((item, itemI) => (
                <HStack
                  w="100%"
                  justifyContent="space-between"
                  alignItems="center"
                  key={item.title + itemI.toString()}
                >
                  <Checkbox
                    isChecked={item.isCompleted}
                    onChange={() => handleStatus(itemI)}
                    value={item.title}
                  ></Checkbox>
                  <Text
                    width="100%"
                    flexShrink={1}
                    textAlign="left"
                    mx="2"
                    strikeThrough={item.isCompleted}
                    _light={{
                      color: item.isCompleted ? "gray.400" : "coolGray.800",
                    }}
                    _dark={{
                      color: item.isCompleted ? "gray.400" : "coolGray.50",
                    }}
                    onPress={() => handleStatus(itemI)}
                  >
                    {item.title}
                  </Text>
                  <Button
                    size="sm"
                    colorScheme="trueGray"
                    onPress={() => handleDelete(itemI)}
                  >
                    -
                  </Button>
                </HStack>
              ))}
            </VStack>
          </VStack>
        </Box>
      </Center>
      <Button onPress={() => navigation.navigate("Form")}>+</Button>
    </Box>
  );
};

export default List;
