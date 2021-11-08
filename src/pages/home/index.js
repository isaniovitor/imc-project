import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { CalcImc } from "./utils/index";
import * as Sty from "./style";

export function Home() {
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const [imc, setImc] = useState();

  function handleImc() {
    const newImc = CalcImc(height, width);
    setImc(newImc);
  }

  return (
    <Sty.SafeArea>
      <Sty.Conteiner>
        <Sty.Image
          source={{
            uri: "https://play-lh.googleusercontent.com/BsxeytCfCmCnuSgaRczKDzsyRSyPqsQmGZ45qfwT7S9HAT1AAHILY0gZeQqsdw1o4B9N",
          }}
        />
        <Sty.Imput
          value={height}
          onChangeText={setHeight}
          placeholder="altura"
          keyboardType="numeric"
        />
        <Sty.Imput
          value={width}
          onChangeText={setWidth}
          placeholder="peso"
          keyboardType="numeric"
        />
        <Sty.Button
          onPress={() => handleImc()}
          title="Calcular IMC"
          accessibilityLabel="Calcule o seu imc"
        />
        <StatusBar style="auto" />
      </Sty.Conteiner>
    </Sty.SafeArea>
  );
}
