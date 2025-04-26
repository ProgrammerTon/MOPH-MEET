import { ScrollView,View,SafeAreaView,TouchableOpacity,Text,StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import { useRef } from 'react';

export default function TryWebView() {
  const ref = useRef<WebView>(null);
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flexDirection : 'row'}}>
        <TouchableOpacity onPress = {() => {
          ref.current?.goBack();
        }}
          style={styles.button}
        >
          <Text style={styles.text}>Back</Text>  
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => {
          ref.current?.reload();
        }}
          style={styles.button}
        >
          <Text style={styles.text}>Reload</Text>  
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <WebView
          ref={ref}
          source={{ uri: 'https://moph-meet.moph.go.th/' }}
          style={{ flex: 1 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center', 
  },
  button:{
    marginRight: 10,
    marginLeft : 10,
  }
});
