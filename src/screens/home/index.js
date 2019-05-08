import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import ListImage from "../../components/ListImage";
import { Actions } from "react-native-router-flux";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    this._getImages();
  }

  _getImages = () => {
    fetch("https://picsum.photos/v2/list")
      .then(res => res.json())
      .then(res => {
        //set images to array

        this.setState({ images: res });
      });
  };
  _keyExtractor = (item, index) => item.id;

  //List Item
  _renderItem = ({ item }) => {
    return (
      <ListImage
        showDetail={data => {
          Actions.detail({ data: data });
        }}
        data={item}
      />
    );
  };

  //Render Images array
  _renderFlatList = () => {
    if (this.state.images.length > 0) {
      return (
        <FlatList
          style={{ height: "100%", width: "100%",backgroundColor:'#ffffff' }}
          data={this.state.images}
          numColumns="2"
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      );
    } else {
      return <ActivityIndicator style={{ alignSelf: "center",justifyContent:"center" }} />;
    }
  };
  render() {
    return <View style={{ height: "100%", width: "100%"}}>{this._renderFlatList()}</View>;
  }
}
