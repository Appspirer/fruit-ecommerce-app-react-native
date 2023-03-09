import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Favorite, List, Search } from '../screens';
import { View, Dimensions } from 'react-native'
import Icons from '../themes/Icons';
import Colors from '../themes/Colors';

var { height, width } = Dimensions.get('window')

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 94,
          paddingTop: 20,
          backgroundColor: Colors.gray_80,
          borderTopRightRadius:20,
          borderTopLeftRadius:20,
          paddingHorizontal:10,
          position:'absolute',
          borderTopWidth:0
        }
      }}
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              borderTopWidth: 3,
              height: 83,
              width: width / 4 - 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: focused ? Colors.yellow : Colors.gray_80,
            }}>
              {Icons.Icons({ name: focused ? 'home_focus' : 'home', height: 32, width: 32 })}
            </View>
          )
        }}
      />
      <Tab.Screen name="Search" component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              borderTopWidth: 3,
              height: 83,
              width: width / 4 - 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: focused ? Colors.yellow : Colors.gray_80
            }}>
              {Icons.Icons({ name: focused ? 'search_focus' : 'search', height: 30.06, width: 30.05 })}
            </View>
          )
        }}
      />
      <Tab.Screen name="Favorite" component={Favorite}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              borderTopWidth: 3,
              height: 83,
              width: width / 4 - 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: focused ? Colors.yellow : Colors.gray_80
            }}>
              {Icons.Icons({ name: focused ? 'heart_focus' : 'heart', height: 32, width: 32 })}
            </View>
          )
        }}
      />
      <Tab.Screen name="List" component={List}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              borderTopWidth: 3,
              height: 83,
              width: width / 4 - 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: focused ? Colors.yellow : Colors.gray_80
            }}>
              {Icons.Icons({ name: focused ? 'list_focus' : 'list', height: 30, width: 27.72 })}
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}