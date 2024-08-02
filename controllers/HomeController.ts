import React, { useState, useEffect } from "react";
import { getVideos } from "../services/VideoService";
import IVideo from "../models/Video";

export const useHomeController = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchVideos(page);
  }, [page]);

  const fetchVideos = async (page: number) => {
    if (loadingMore) return;

    setLoadingMore(true);
    try {
      const response = await getVideos(page);
      setVideos((prevVideos) => [...prevVideos, ...response.data.data]);
      setHasMore(response.data.data.length > 0);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingMore(false);
      setLoading(false);
    }
  };

  const loadMoreVideos = () => {
    if (hasMore && !loadingMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return {
    videos,
    loading,
    loadingMore,
    loadMoreVideos,
  };
};
