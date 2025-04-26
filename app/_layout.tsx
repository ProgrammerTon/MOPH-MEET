import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import WebView from 'react-native-webview';
import { TouchableOpacity } from 'react-native';
import { ScrollView , Text, View} from 'react-native';
import { Slot,useRouter } from 'expo-router';
import TryWebView from './(tabs)/mophmeet';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: 'https://moph-meet.moph.go.th/' }}
          style={{ flex: 1 }}
        />
      </View> */}
      <View style={{flex:1}}>
        <Slot/>
      </View>
      {/* <View>
        <TouchableOpacity onPress={() => {
          console.log("Button Pressed");
          router.push("./(tabs)/tryWebView");
        }}>
          <Text>MophMeet</Text>
        </TouchableOpacity>
      </View> */}
    </ThemeProvider>
  );
}
