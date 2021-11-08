import { Alert } from "react-native";

export function CalcImc(height, width) {
  const imc = (width / (height * height)).toFixed(2);

  Alert.alert("Resultado", `Seu imc: ${imc}`, [
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);

  return imc;
}
