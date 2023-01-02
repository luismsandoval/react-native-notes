import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListProvider from "./context/ListProvider";
import Home from "./components/home/Home";
import Form from "./components/form/Form";
import List from "./components/list/List";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <ListProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: "Take a note..." }}
            />
            <Stack.Screen
              name="Form"
              component={Form}
              options={{ title: "Take a note..." }}
            />
            <Stack.Screen
              name="List"
              component={List}
              options={{ title: "List" }}
            />
          </Stack.Navigator>
        </ListProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
