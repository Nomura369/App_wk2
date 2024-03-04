import { StyleSheet, Text, View, Image } from 'react-native';

const AlbumList = () => {
  return (
    <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
            <Image style={styles.thumbnailStyle} source={require('D:/Dprogram files/nodejs/node_project/wk2/image/yonezu_thumbnail.jpg')} />
            <View style={styles.headerContentStyle}>
            <Text>diorama</Text>
            <Text>Yonezu Kenshi</Text>
            </View>
        </View>
        <View style={styles.cardSectionStyle}>
            <Image style={styles.imageStyle} source={require('D:/Dprogram files/nodejs/node_project/wk2/image/diorama.jpg')} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10,
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderBottomWidth: 1,
  },
  imageStyle: {
    height: 300,
    width: null,
  },
});

export default AlbumList;