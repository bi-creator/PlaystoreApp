import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen";
import Compscreen from "./src/screens/componentscreen";
import Listscreen from "./src/screens/Listscreen";
import Imagescreen from "./src/screens/imagescreen";
import Counter from "./src/screens/counterscreen";
import Randcolour from "./src/screens/colourscreen";
import Newcolour from "./src/screens/newcolour";
import Mainpropage from "./src/products/allproductpage";
import Textscreen from "./src/screens/textscreen";
import { StatusBar } from 'react-native';
import { View } from 'react-native';
import { useLayoutEffect } from 'react';
import { createStore } from 'redux';
import reducer from './src/redux/store';
import { Provider } from 'react-redux';
const store=createStore(reducer)
// const navigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Comp:Compscreen,
//     List:Listscreen,
//     Img:Imagescreen,
//     Count:Counter,
//     randcolour:Randcolour,
//     newcolour:Newcolour,
//     productpage:Mainpropage,
//     textpage:Textscreen
//   },
//   {
//     initialRouteName: "Home",
//     defaultNavigationOptions: {
//       title: "App",
//     },
//   }
// );

const App=()=>{
  const Stack=createNativeStackNavigator()
  // const navigate = useNavigation();
  // useLayoutEffect(()=>{
  //   navigate.setOptions( {headerShown: false })
      
  // },[])
  return (
    
      <>
      <StatusBar  barStyle={'dark-content'}/>
      <Provider store={store}>
    <NavigationContainer  >
      <Stack.Navigator  >
        <Stack.Screen  name="Home" component={HomeScreen} />
        <Stack.Screen name="Comp" component={Compscreen} />
        <Stack.Screen name="List" component={Listscreen} />
        <Stack.Screen name="Img" component={Imagescreen} />
        <Stack.Screen name="Count" component={Counter} />
        <Stack.Screen name="randcolour" component={Randcolour} />
        <Stack.Screen name="newcolour" component={Newcolour} />
        <Stack.Screen name="productpage" component={Mainpropage} />
        <Stack.Screen name="textpage" component={Textscreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    </>
    
  );
}
export default App;
