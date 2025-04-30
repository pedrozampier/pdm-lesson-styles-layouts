import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { Stack } from "expo-router";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ScreenWrapper from "@/components/ScreenWrapper";
import Card from "@/components/Card";
import Title from "@/components/Title";
import MainCard from "@/components/cards/PartyMemberCard";
import InviteCard from "@/components/cards/InviteCard";
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

      <InviteCard>
        <Text>Invite a member</Text>
      </InviteCard>

      <PartyMemberCard
        name="Sophiala"
        username="@bestieee"
        imgUrl="https://example.com/avatar.jpg"
        level={12}
        role="Leader"
        hpPercentage={0.8}
        mpPercentage={0.6}
      />




      <Card>
        <Text>index</Text>
      </Card>
    </ScreenWrapper>
  );
}
