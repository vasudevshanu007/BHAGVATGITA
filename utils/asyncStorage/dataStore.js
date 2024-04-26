import AsyncStorage from "@react-native-async-storage/async-storage";

export const setData = async(key,data)=>{
    try{
        await AsyncStorage.setItem(key,data);
    }catch(e){
        console.log(e.message);
    }
    
}
export const deleteData = async()=>{
    try{
        await AsyncStorage.clear();
    }catch(e){
        console.log(e.message);
    }
    
}
export const getData = async(key,setCurrent)=>{

    try{
        const data = await AsyncStorage.getItem(key);
        if(data!== null){
            setCurrent(data);
        }else{
        //AsyncStorage me kuch nahi tha yaani app pehli baar chal rha hai.
        //1 se initialise kar do
            setCurrent("1");
        }
    }catch(e){
        console.log(e.message);
    }
    
    
    
}