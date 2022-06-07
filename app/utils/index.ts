import { Platform } from "react-native"

const isAndroid = () => {
    if(Platform.OS=== 'android'){
        return true
    }
    return false
}


export default {isAndroid}