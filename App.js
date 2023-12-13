// Inside your App component
import { SafeAreaView, Alert } from "react-native";
import Button from "./components/Button";

const App = () => {
    const handlePress = () => {
        Alert.alert("Button Pressed", "You pressed the styled button!");
    };

    return (
        <SafeAreaView>
            <Button
                label={"Primary Button"}
                onPress={handlePress}
                buttonStyle={"primary"}
            />
            <Button
                label={"Danger Button"}
                onPress={handlePress}
                buttonStyle="danger"
            />
            {/* Add more Button instances with different styles */}
        </SafeAreaView>
    );
};

export default App;
