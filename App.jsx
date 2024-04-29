import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LoginScreen from './screens/LoginScreen';
import UsersScreen from './screens/UsersScreen';
import MoneyScreen from './screens/MoneyScreen';
import CustomTabBar from './components/CustomTabBar';
import Header from './components/Header';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

const HomeTabs = () => {
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

const HomeDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      gestureEnabled={true}
    >
      <Drawer.Screen name="Home" component={HomeTabs} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeDrawer} options={({ navigation }) => ({
            header: () => <Header />
          })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
