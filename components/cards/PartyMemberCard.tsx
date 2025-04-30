import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "../Card";

type PartyMemberCardProps = {
  name: string;
  username: string;
  imgUrl: string;
  level: number;
  hpPercentage: number; // ex: 0.75 (75%)
  mpPercentage: number; // ex: 0.60 (60%)
  role: string;
};

export default function PartyMemberCard({
  name,
  username,
  imgUrl,
  level,
  hpPercentage,
  mpPercentage,
  role,
}: PartyMemberCardProps) {
  return (
    <Card>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={{ uri: imgUrl }} style={styles.avatar} />
          <View style={styles.headerRight}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.username}>{username}</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.icon}>
            <MaterialCommunityIcons name="sword" size={24} color="black" />
          </View>

          <View style={styles.statsRight}>
            <View style={styles.barContainer}>
              <View style={{ ...styles.barRed, width: `${hpPercentage * 100}%` }} />
            </View>
            <Text style={styles.hpText}>{Math.floor(hpPercentage * 100)}% HP</Text>

            <View style={styles.barContainer}>
              <View style={{ ...styles.barBlue, width: `${mpPercentage * 100}%` }} />
            </View>
            <Text style={styles.mpText}>{Math.floor(mpPercentage * 100)}% MP</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Level {level} • {role}</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  headerRight: {
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
  },
  username: {
    opacity: 0.6,
    fontSize: 12,
  },
  statsContainer: {
    flexDirection: "row",
    width: "100%",
    gap: 12,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1,
  },
  statsRight: {
    flex: 1,
  },
  barContainer: {
    width: "100%",
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgb(225 224 227)",
    position: "relative",
    marginTop: 4,
  },
  barRed: {
    backgroundColor: "rgb(255 97 101)",
    height: 8,
    borderRadius: 4,
    position: "absolute",
  },
  barBlue: {
    backgroundColor: "rgb(0 122 255)",
    height: 8,
    borderRadius: 4,
    position: "absolute",
  },
  hpText: {
    fontSize: 12,
    opacity: 0.6,
    marginTop: 4,
  },
  mpText: {
    fontSize: 12,
    opacity: 0.6,
    marginTop: 4,
  },
  footer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  footerText: {
    padding: 8,
    fontSize: 12,
  },
});
