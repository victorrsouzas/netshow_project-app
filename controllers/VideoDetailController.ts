import { useState, useEffect } from "react";
import { getVideoById, updateVideo } from "../services/VideoService";

const useVideoDetailController = (videoId: string) => {
  const [videoDetails, setVideoDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(videoDetails?.likes || 0);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await getVideoById(videoId);
        const videoData = response.data;
        setVideoDetails(videoData);

        await updateVideo(videoId, { views: videoData.views + 1 });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoDetails();
  }, [videoId]);

  const handleLike = async () => {
    try {
      await updateVideo(videoId, { likes: videoDetails.likes + 1 });
      setVideoDetails({ ...videoDetails, likes: videoDetails.likes + 1 });
    } catch (error) {
      console.error(error);
    }
  };

  const toggleLike = () => {
    if (!isLiked) {
      setLikesCount(likesCount + 1);
    }
    setIsLiked(!isLiked);
    handleLike();
  };

  return {
    videoDetails,
    loading,
    toggleLike,
    likesCount,
    isLiked,
  };
};

export default useVideoDetailController;
