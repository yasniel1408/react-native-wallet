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

export default function Register({ navigation }) {
  const [name, onChangeName] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [repeatPassword, onChangeRepeatPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const onPressLearnMore = async e => {
    e.preventDefault();
    setLoading(true);
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      repeatPassword === ""
    ) {
      alert("Los Campos son obligatorios");
      return;
    }
    if (
      password !== repeatPassword
    ) {
      alert("Las Contraseñas no coinciden");
      return;
    }
    
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    let res = await axios.post(
      "https://wallet-stack-react-laravel.herokuapp.com/api/users",
      JSON.stringify({ name, email, password }),
      { headers }
    );
    let data = res.data;
    if (data.res == true) {
      alert(data.message);
      navigation.navigate("Login My Wallet");
    } else {
      alert(data.message);
    }
    console.log(data);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.containerForm}>
          <Text style={styles.text}>Register</Text>
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
            placeholder="Name"
            onChangeText={text => onChangeName(text)}
            value={name}
          />
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
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text => onChangePassword(text)}
            value={password}
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
            placeholder=" Repeat Password"
            onChangeText={text => onChangeRepeatPassword(text)}
            value={repeatPassword}
          />
          <Button
            onPress={onPressLearnMore}
            title={!loading ? "Send" : <ActivityIndicator />}
            color="#3097D1"
            style={{ margin: 10 }}
          />
          <Text
            onPress={() => navigation.navigate("Login My Wallet")}
            style={styles.registerText}
          >
            Login
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
