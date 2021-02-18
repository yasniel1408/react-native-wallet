import { StatusBar } from "expo-status-bar";
import React from "react";
import image from "../assets/wallet.jpg";
import styles from './styles';
import {
  Text,
  View,
  ImageBackground
} from "react-native";

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={image} style={styles.image}>
          <Text style={styles.text}>Welcome Home</Text>
          <Text
            onPress={() => navigation.navigate("Login My Wallet")}
            style={styles.registerText}
          >
            Salir
          </Text>
      </ImageBackground>
    </View>
  );
}
