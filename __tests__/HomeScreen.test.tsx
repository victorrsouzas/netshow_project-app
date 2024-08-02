import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import HomeScreen from "../screens/home/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { useHomeController } from "../controllers/HomeController";

jest.mock("../controllers/HomeController", () => ({
  useHomeController: jest.fn(),
}));

const mockNavigate = jest.fn();

const mockData = {
  videos: [
    {
      id: "1",
      title: "Video 1",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      title: "Video 2",
      thumbnail: "https://via.placeholder.com/150",
    },
  ],
  loading: false,
  loadingMore: false,
  loadMoreVideos: jest.fn(),
  showScrollToTop: false,
  handleScroll: jest.fn(),
  scrollToTop: jest.fn(),
};

const renderComponent = () =>
  render(
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );

describe("HomeScreen", () => {
  beforeEach(() => {
    (useHomeController as jest.Mock).mockReturnValue(mockData);
  });

  it("renders the HomeScreen correctly", () => {
    const { getByText } = renderComponent();
    expect(getByText("Videos")).toBeTruthy();
    expect(getByText("Video 1")).toBeTruthy();
    expect(getByText("Video 2")).toBeTruthy();
  });

  it("navigates to VideoDetail when a video is clicked", () => {
    const { getByText } = renderComponent();
    fireEvent.press(getByText("Video 1"));
    expect(mockNavigate).toHaveBeenCalledWith("VideoDetail", { videoId: "1" });
  });
});
