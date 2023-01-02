import { View, Button } from "native-base";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.navigate("List")}>notes...</Button>
      <Button onPress={() => navigation.navigate("Form")}>
        Take a note...
      </Button>
    </View>
  );
};

export default Home;
