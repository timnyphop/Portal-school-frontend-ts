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
  return localStorage.getItem("token");
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

export const registerUser = async (
  name: string,
  email: string,
  password: string,
  age: number
) => {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password, age }),
  });

  if (!response.ok) {
    throw new Error("Failed to register");
  }

  const data = await response.json();
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user)); // Сохраняем данные пользователя
  return data;
};

export const loginUser = async (email: string, password: string) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Failed to login");
  }

  const data = await response.json();
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user)); // Сохраняем данные пользователя
  return data;
};
export const getSchoolsByClass = async (
  className: string
): Promise<Ischool[]> => {
  try {
    const url = `${API_BASE_URL}/schools`;
    const allSchools = await getSchool(url);
    return allSchools.filter((school) => school.classes === className);
  } catch (error) {
    console.error(
      `Во время получения школ по классу ${className} возникла ошибка: ${error}`
    );
    throw error;
  }
};
