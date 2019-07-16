import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Playlist from './Components/Playlist/Playlist'
import { createStackNavigator, createAppContainer } from "react-navigation";


const MainNavigator = createStackNavigator(
  {
    Home: Login,
    Dashboard: Dashboard,
    Playlist: Playlist
  },
  {
    initialRouteName: "Home",
    // defaultNavigationOptions:{
    //   headerStyle:{
    //     backgroundColor: '#1d3253'
    //   },
    //   headerTintColor: 'white'
    // },
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

const App = createAppContainer(MainNavigator)

export default App

