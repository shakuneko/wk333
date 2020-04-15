import React from "react";
import { View } from "react-native";
import Header from "./scr/Header";
import Drawer from "./scr/Drawer";
import Bottom from "./scr/Bottom";
import Album from "./scr/Album";
import Black from "./scr/Black";


const App = () => {
  return (
    
     <View>
      <Header />
      <Album />
      <Bottom />
    
    
    </View>
  );
};

export default App;