import { IlikeResponse, Ischool } from "../types/types";
import { API_BASE_URL } from "./connect";

export const getSchool = async (url: string): Promise<Ischool[]> => {
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error("Ошибка получения данных");
    }
    const data: Ischool[] = await response.json();
    return data;
  } catch (error) {
    console.error(`во время получени всех школ возникла ошибка: ${error}`);
    throw error;
  }
};
export const getToken = (): string | null => {
  const tokenData = localStorage.getItem("token");
  if (tokenData) {
    const token = JSON.parse(tokenData);
    return token.token;
  }
  return null;
};

export const likeSchool = async (schoolId: string): Promise<IlikeResponse> => {
  const token = getToken();
  if (!token) {
    throw new Error("No token found");
  }

  const response = await fetch(`${API_BASE_URL}/like/${schoolId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to like school");
  }

  return response.json();
};
