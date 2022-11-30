import React, { useState } from "react";
import {
  NativeBaseProvider,
  Box,
  Heading,
  Text,
  Menu,
  Divider,
  HamburgerIcon,
  useToast,
  Center,
  VStack,
  HStack,
  Input,
  Icon,
  IconButton,
  Feather,
  Entypo,
  Checkbox,
  useColorMode,
  useColorModeValue,
  Button,
  extendTheme,
} from "native-base";
import { Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};

// const config = {
//   useSystemColorMode: true,
//   initialColorMode: "dark",
// };
// const customTheme = extendTheme({ config });

export default function App() {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("Light", "Dark");
  const bg = useColorModeValue("warmGray.50", "coolGray.800");

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
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
    <NativeBaseProvider config={config}>
      <Box
        flex={1}
        bg={{
          linearGradient: {
            colors: ["lightBlue.300", "violet.800"],
            start: [0, 0],
            end: [1, 0],
          },
        }}
        // bg={bg}
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
            <Heading mb="2" size="md">
              To do list
            </Heading>
            <VStack space={4}>
              <HStack space={2}>
                <Input
                  flex={1}
                  onChangeText={(value) => setInput(value)}
                  value={input}
                  placeholder="Take a note..."
                />
                <IconButton
                  borderRadius="sm"
                  variant="solid"
                  icon={
                    <Icon
                      as={Feather}
                      name="plus"
                      size="sm"
                      color="warmGray.50"
                    />
                  }
                  onPress={() => {
                    addItem(input);
                    setInput("");
                  }}
                />
              </HStack>
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
                      onPress={() => handleStatusChange(itemI)}
                    >
                      {item.title}
                    </Text>
                    <IconButton
                      size="sm"
                      colorScheme="trueGray"
                      icon={
                        <Icon
                          as={Entypo}
                          name="minus"
                          size="xs"
                          color="trueGray.400"
                        />
                      }
                      onPress={() => handleDelete(itemI)}
                    />
                  </HStack>
                ))}
              </VStack>
            </VStack>
          </Box>
        </Center>
        {/* <Box position="relative" float="right">
          <Menu
            placement="right top"
            w="190"
            trigger={(triggerProps) => {
              return (
                <Pressable {...triggerProps}>
                  <HamburgerIcon />
                </Pressable>
              );
            }}
          >
            <Menu.Group title="Account">
              <Menu.Item>Sign in</Menu.Item>
              <Menu.Item>Notifications</Menu.Item>
              <Menu.Item>Roboto</Menu.Item>
            </Menu.Group>
            <Divider mt="3" w="100%" />
            <Menu.Group title="System">
              <Menu.Item>Change theme</Menu.Item>
              <Menu.Item>Advanced</Menu.Item>
            </Menu.Group>
          </Menu>
        </Box> */}
        <Button onPress={() => toggleColorMode()} h={10}>
          Toggle
        </Button>
      </Box>
    </NativeBaseProvider>
  );
}
