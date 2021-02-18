import {
    StyleSheet,
  } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    containerForm: {
      flex: 0,
      margin: 30,
      backgroundColor: "#3097d13b",
      padding: 30,
      borderRadius: 5,
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center"
    },
    registerText: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      color: "white",
      marginTop:40
    }
  });
  
  export default styles