import React, { Component } from "react";
import { View, Text, FlatList, Dimensions,Image } from "react-native";

export default class Detail extends Component {

  render() {
    return (
      <View style={{flexDirection:'column'}}>
        <Image
          source={{ uri: this.props.data.download_url }}
          style={{
            height: Dimensions.get("window").width,
            width: Dimensions.get("window").width
          }}
        />
        <Text  style={{fontSize:18}}>Author : {this.props.data.author}</Text>
        <Text style={{fontSize:16}}>{this.props.data.url}</Text>
      </View>
    );
  }
}
