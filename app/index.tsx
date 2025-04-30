import { View, Text, TouchableOpacity, StatusBar, ScrollView } from "react-native";
import React from "react";
import { Stack } from "expo-router";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ScreenWrapper from "@/components/ScreenWrapper";
import Card from "@/components/Card";
import Title from "@/components/Title";
import MainCard from "@/components/cards/MainCard";
import PartyMemberCard from "@/components/cards/PartyMemberCard";

export default function index() {
  return (
    <ScreenWrapper title="Your Party">
      <MainCard
        title="Vice Awakens"
        participating={3}
        imgUrl="https://cdn-icons-png.flaticon.com/512/2603/2603009.png"
        name="Vice, The Shadow Wyrm"
        hp={1224}
        damageDone={21}
      />

      <Title>MEMBERS</Title>

      <Card>
        <Text>INVITE A MEMBER</Text>
      </Card>
       

    <ScrollView>
      <PartyMemberCard
        name="Sophiala"
        username="@bestieee"
        imgUrl="https://e7.pngegg.com/pngimages/358/619/png-clipart-legend-of-zelda-link-pixelated-illustration-the-legend-of-zelda-breath-of-the-wild-link-pixel-art-video-game-excited-person-gif-video-game-fictional-character-thumbnail.png"
        level={12}
        role="Leader"
        hpPercentage={0.8}
        mpPercentage={0.6}
      />

      <PartyMemberCard
        name="Sophiala"
        username="@bestieee"
        imgUrl="https://e7.pngegg.com/pngimages/8/893/png-clipart-the-legend-of-zelda-pixel-the-legend-of-zelda-breath-of-the-wild-link-pixel-art-pixel-miscellaneous-video-game.png"
        level={12}
        role="Leader"
        hpPercentage={0.8}
        mpPercentage={0.6}
      />
      </ScrollView>

    </ScreenWrapper>
  );
}
