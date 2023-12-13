// Inside Button.js

const Button = ({ label, onPress, buttonStyle, labelStyle }) => {
    // Function to get dynamic styles based on buttonStyle prop
    const getButtonStyle = () => {
        switch (buttonStyle) {
            case "primary":
                return { backgroundColor: "#3498db" }; // Blue
            case "danger":
                return { backgroundColor: "#e74c3c" }; // Red
            // Add more cases for other styles
            default:
                return {}; // Default style
        }
    };

    return (
        <TouchableOpacity
            style={[styles.button, getButtonStyle(), buttonStyle]}
            onPress={onPress}>
            <Text style={[styles.label, labelStyle]}>{label}</Text>
        </TouchableOpacity>
    );
};
