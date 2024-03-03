import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
        <View style={styles.headerStyle}>
          <Text style={styles.textStyle}>Albums</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    //陰影設定
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2, // Android only
  },
  textStyle: {
    fontSize: 20,
  },
});

export default App;
