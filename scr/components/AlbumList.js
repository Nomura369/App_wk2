import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const AlbumList = () => {
  return (
    <ScrollView>
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
            <Image style={styles.thumbnailStyle} source={require('D:/Dprogram files/nodejs/node_project/wk2/image/yonezu_thumbnail.jpg')} />
            <View style={styles.headerContentStyle}>
            <Text style={styles.albumTitleStyle}>diorama</Text>
            <Text style={styles.albumSingerStyle}>Yonezu Kenshi</Text>
            </View>
        </View>
        <View style={styles.cardSectionStyle}>
            <Image style={styles.imageStyle} source={require('D:/Dprogram files/nodejs/node_project/wk2/image/diorama.jpg')} />
        </View>      
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
            <Image style={styles.thumbnailStyle} source={require('D:/Dprogram files/nodejs/node_project/wk2/image/yonezu_thumbnail.jpg')} />
            <View style={styles.headerContentStyle}>
            <Text style={styles.albumTitleStyle}>YANKEE</Text>
            <Text style={styles.albumSingerStyle}>Yonezu Kenshi</Text>
            </View>
        </View>
        <View style={styles.cardSectionStyle}>
            <Image style={styles.imageStyle} source={require('D:/Dprogram files/nodejs/node_project/wk2/image/yankee.jpeg')} />
        </View>      
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
            <Image style={styles.thumbnailStyle} source={require('D:/Dprogram files/nodejs/node_project/wk2/image/yonezu_thumbnail.jpg')} />
            <View style={styles.headerContentStyle}>
            <Text style={styles.albumTitleStyle}>Bremen</Text>
            <Text style={styles.albumSingerStyle}>Yonezu Kenshi</Text>
            </View>
        </View>
        <View style={styles.cardSectionStyle}>
            <Image style={styles.imageStyle} source={require('D:/Dprogram files/nodejs/node_project/wk2/image/bremen.jpg')} />
        </View>      
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
            <Image style={styles.thumbnailStyle} source={require('D:/Dprogram files/nodejs/node_project/wk2/image/yonezu_thumbnail.jpg')} />
            <View style={styles.headerContentStyle}>
            <Text style={styles.albumTitleStyle}>BOOTLEG</Text>
            <Text style={styles.albumSingerStyle}>Yonezu Kenshi</Text>
            </View>
        </View>
        <View style={styles.cardSectionStyle}>
            <Image style={styles.imageStyle} source={require('D:/Dprogram files/nodejs/node_project/wk2/image/bootleg.jpg')} />
        </View>      
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
            <Image style={styles.thumbnailStyle} source={require('D:/Dprogram files/nodejs/node_project/wk2/image/yonezu_thumbnail.jpg')} />
            <View style={styles.headerContentStyle}>
            <Text style={styles.albumTitleStyle}>STRAY SHEEP</Text>
            <Text style={styles.albumSingerStyle}>Yonezu Kenshi</Text>
            </View>
        </View>
        <View style={styles.cardSectionStyle}>
            <Image style={styles.imageStyle} source={require('D:/Dprogram files/nodejs/node_project/wk2/image/stray_sheep.jpg')} />
        </View>      
      </View>
    </ScrollView>
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
  albumTitleStyle: {
    fontSize: 16, 
    fontWeight: "bold",
  },
  albumSingerStyle: {
    color: "#595959",
  },
});

export default AlbumList;