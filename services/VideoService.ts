import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.20.0.174:3000',
  timeout: 10000,
});

export const getVideos = (page: number) => api.get(`/videos?_page=${page}&_per_page=10`);
export const getVideoById = (id: string) => api.get(`/videos/${id}`);
export const updateVideo = (id: string, data: any) => api.patch(`/videos/${id}`, data);
