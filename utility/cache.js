import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from 'moment';


const prefix = "cache";
const expiredInMinutes = 5;

const isExpired = (item) => {
    const now = moment(Date.now());
    const storeTime = moment(item.timeStamp);
    return isExpired = now.diff(storeTime, "minutes") > expiredInMinutes;
}

const store = async(key,value) => {

    const item = {
        value,
        timeStamp: Date.now()
    }

    try {
        
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item))

    } catch (error) {
        
        console.log(error);
    }
}

const get = async(key) => {

    try {
        
        const value = await AsyncStorage.getItem(prefix + key)

        const item = JSON.parse(value)

        if(isExpired(item)){

            //it violates Command Query Separation(CQS), command = change the value, query = get the value, should separate in single function. However, we ignore this in this practice.
            await AsyncStorage.removeItem(prefix + key);
            
            return null;
        }

        if(!item) return null;

        return item;

    } catch (error) {
        console.log(error)
    }
}

export default { store, get }

