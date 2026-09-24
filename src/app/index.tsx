import AntDesign from '@expo/vector-icons/AntDesign';
import { Text, View } from "react-native";


export default function Index() {
  return (
    <View >
      <Text className="bg-blue-500">Edit src/app/index.tsx to edit this screen.</Text>
      <AntDesign name="account-book" size={24} color="black" />
    </View>
  );
}

