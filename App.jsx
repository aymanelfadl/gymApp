import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs' 
import LoginScreen from './screens/LoginScreen';
import UsersScreen from './screens/UsersScreen';
import MoneyScreen from './screens/MoneyScreen';
import CustomTabBar from './components/CustomTabBar';
import Header from './components/Header';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();


const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, lazy: true }}
      tabBarPosition='bottom'
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="العملاء" component={UsersScreen} />
      <Tab.Screen name="النقود" component={MoneyScreen} />
    </Tab.Navigator>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Home" component={HomeScreen} options={{header: () => <Header />}} />
        <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
