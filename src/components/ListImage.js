import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";

export default class ListImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={{backgroundColor:'#d6d6d6',margin:2}} onPress={()=>this.props.showDetail(this.props.data)}>
          <Image
            source={{ uri: this.props.data.download_url }}
            style={{
              height: Dimensions.get("window").width / 2,
              width: Dimensions.get("window").width / 2
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
