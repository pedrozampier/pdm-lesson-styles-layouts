import { View, Text, TouchableOpacity, StatusBar, ScrollView } from "react-native";
import React from "react";

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
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text>INVITE A MEMBER</Text>
        </View>
      </Card>
       

    <ScrollView >
        <View style={{gap:16}}>
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
            name="Aidowu"
            username="@getthatbread3"
            imgUrl="https://e7.pngegg.com/pngimages/419/395/png-clipart-nyan-cat-youtube-cat-animals-text.png"
            level={11}
            role="Leader"
            hpPercentage={0.9}
            mpPercentage={0.7}
          />
        </View>
      </ScrollView>

    </ScreenWrapper>
  );
}
