import { StatusBar } from "expo-status-bar";
import React from "react";
import image from "../assets/wallet.jpg";
import styles from "./styles";
import {
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
  ActivityIndicator
} from "react-native";
import axios from "axios";

export default function Login({ navigation }) {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const onPressLogin = async e => {
    e.preventDefault();
    setLoading(true);
    if (email === "" || password === "") {
      alert("Los Campos son obligatorios");
    } else {
      let headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };
      let res = await axios.post(
        "https://wallet-stack-react-laravel.herokuapp.com/api/login",
        JSON.stringify({ email, password }),
        { headers }
      );
      let data = res.data;
      console.log(data.res);
      if (data.res == true) {
        navigation.navigate("Home My Wallet");
      } else {
        alert(data.message);
      }
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.containerForm}>
          <Text style={styles.text}>Login</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              textAlign: "center",
              marginTop: 10,
              marginBottom: 10,
              color: "white"
            }}
            placeholder="Email"
            onChangeText={text => onChangeEmail(text)}
            value={email}
          />
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              textAlign: "center",
              marginBottom: 10,
              color: "white"
            }}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={text => onChangePassword(text)}
            value={password}
          />
          <Button
            onPress={onPressLogin}
            title={!loading ? "Send" : <ActivityIndicator />}
            color="#3097D1"
            style={{ margin: 10 }}
          />
          <Text
            onPress={() => navigation.navigate("Register My Wallet")}
            style={styles.registerText}
          >
            Register
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
