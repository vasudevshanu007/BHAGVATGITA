import NetInfo from "@react-native-community/netinfo";

export const checkConnection = async(setNetinfo)=>{
    const connected = await NetInfo.fetch();
    if(connected.isConnected){
        setNetinfo(connected.isConnected);
    }else{
        setNetinfo(null);
    }
    
}