// a custom hook, that encapsulates some function and state, we will return the location in this case.

import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default useLocation = () => {

  const [location, setLocation] = useState();
  
  const getLocation = async () => {
  
      try {
          
          const { granted } = await Location.requestForegroundPermissionsAsync();
          if (!granted) return;
          const {
            coords: { latitude, longitude },
          } = await Location.getLastKnownPositionAsync();
          setLocation({ latitude, longitude });
        
      } catch (error) {
          
          console.log(error);
      }
  
  
  useEffect(() => {
    getLocation();
  }, []);
  
  return location;
  }
}

