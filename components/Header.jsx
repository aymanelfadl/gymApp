import { Image, Text, View, Dimensions } from 'react-native';
import FitFlexLogo from '../assets/Fitflex-HD.png';

const Header = () => {
  const windowHeight = Dimensions.get('window').height;

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        height: windowHeight * 0.1, // 10% of window height
        backgroundColor: 'white', 
      }}>
      <View>
        <Image 
          source={FitFlexLogo} 
          style={{ 
            width: 100, 
            height: '100%', 
            resizeMode: 'contain' 
          }} 
        />
      </View>
      <View style={{ justifyContent: 'center' }}>
        <Text style={{color:"black"}}>ayman</Text>
      </View>
    </View>
  );
};

export default Header;
