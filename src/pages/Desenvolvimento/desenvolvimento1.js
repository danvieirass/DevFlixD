import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import logoImg from "../../assets/logo.png";
import Style from "./style";
import { WebView } from 'react-native-webview';
import {Feather} from '@expo/vector-icons'

export default function Desenvolvimento1({ navigation }) {
  return (
    <View style={Style.container}>
      <View style={Style.header}>
        <View style={Style.header}>
        <Feather style={Style.icon} name='arrow-left' size={30} color='#c70c18' onPress={() => navigation.navigate("Disciplinas")}/>
          <Image source={logoImg} style={Style.logoImg}/>
        </View>
        <Text style={Style.title}>Desenvolvimento de Sistemas 1</Text>

            <View style={Style.player}>
                <WebView source={{ uri: 'https://www.youtube.com/embed/6vE0oFFSE7chttps://www.youtube.com/watch?v=4tBeeMcw2sM&list=PLmY5AEiqDWwDjjE7dEFT1jdrgh6-z7UCg'}} allowsFullscreenVideo={true} style={Style.video} />
            </View>
      </View>
    </View>
  );
}  
