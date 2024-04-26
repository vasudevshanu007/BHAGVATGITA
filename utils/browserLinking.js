import { Linking } from 'react-native';

const browserLinking = (url) => {
    Linking.canOpenURL(url).then(supported=>{
        supported && Linking.openURL(url);
      })};

export default browserLinking
