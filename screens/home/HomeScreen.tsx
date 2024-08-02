import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, KeyboardAvoidingView, Platform } from "react-native";

import { RootStackParamList } from "../../types/Types";

import styles from "./styles";

import { useHomeController } from "../../controllers/HomeController";

import VideoList from "../../components/videoList/VideoList";

const HomeScreen: React.FC = () => {
  const { videos, loading, loadingMore, loadMoreVideos } = useHomeController();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <KeyboardAvoidingView
      style={styles.page}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Vídeos</Text>
        <VideoList
          videos={videos}
          loading={loading}
          loadingMore={loadingMore}
          loadMoreVideos={loadMoreVideos}
          navigation={navigation}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
