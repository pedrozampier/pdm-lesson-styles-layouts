import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "../Card";

type MainCardProps = {
  title: string;
  participating: number;
  imgUrl: string;
  name: string;
  hp: number;
  damageDone: number;
};

export default function MainCard({
  title,
  participating,
  imgUrl,
  name,
  hp,
  damageDone,
}: MainCardProps) {
  return (
    <Card>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.participating}>{participating}/10 Participating</Text>

        <Image source={{ uri: imgUrl }} width={100} height={100} />

        <View style={styles.statsContainer}>
          <View style={styles.icon}>
            <MaterialCommunityIcons name="sword" size={24} color="black" />
          </View>

          <View style={styles.statsRight}>
            <Text style={styles.name}>{name}</Text>

            <View style={styles.barContainer}>
              <View style={{ ...styles.bar, width: "80%" }} />
            </View>

            <Text style={styles.hp}>{hp} / 1500 HP</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.damage}>{damageDone} Damage Done</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 16,
  },
  statsContainer: {
    flexDirection: "row",
    width: "100%",
  },
  statsRight: {
    flex: 1,
  },
  participating: {
    opacity: 0.5,
  },
  title: {
    fontWeight: "bold",
  },
  name: {
    fontWeight: "bold",
    paddingBottom: 6,
  },
  hp: {
    opacity: 0.5,
    paddingTop: 6,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1,
  },
  barContainer: {
    width: "100%",
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgb(225 224 227)",
    position: "relative",
  },
  bar: {
    backgroundColor: "rgb(255 97 101)",
    height: 8,
    borderRadius: 4,
    position: "absolute",
  },
  footer: {
    backgroundColor: "rgb(255 166 36)",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  damage: {
    padding: 8,
  }
});