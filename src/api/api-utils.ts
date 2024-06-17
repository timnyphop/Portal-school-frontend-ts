import { Ischool } from "../types/types";

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
