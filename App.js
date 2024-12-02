import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Reaper from Overwatch</Text>
      <Image
        source={{
          uri: "https://hard-drive.net/wp-content/uploads/2022/10/image1-13.jpg",
        }}
        style={styles.image}
      />
      <Button title="Ult" onPress={() => alert("Die, die, die!")}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },     
  image: {
    width: 300, // Adjust as needed
    height: 200, // Adjust as needed
    marginVertical: 20, // Spacing between text and image
    resizeMode: "cover", // Ensures the image fits nicely
  },
});
