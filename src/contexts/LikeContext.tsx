import React, { createContext, useContext, useState, ReactNode } from "react";
import { likeSchool } from "../api/api-utils";

interface LikesContextProps {
  likeSchool: (schoolId: string) => Promise<void>;
  likes: Record<string, boolean>;
}

const LikesContext = createContext<LikesContextProps | undefined>(undefined);

export const LikesProvider = ({ children }: { children: ReactNode }) => {
  const [likes, setLikes] = useState<Record<string, boolean>>({});

  const handleLikeSchool = async (schoolId: string) => {
    try {
      await likeSchool(schoolId);
      setLikes((prevLikes) => ({ ...prevLikes, [schoolId]: true }));
    } catch (error) {
      console.error("Error liking school:", error);
    }
  };

  return (
    <LikesContext.Provider value={{ likeSchool: handleLikeSchool, likes }}>
      {children}
    </LikesContext.Provider>
  );
};

export const useLikes = () => {
  const context = useContext(LikesContext);
  if (!context) {
    throw new Error("useLikes must be used within a LikesProvider");
  }
  return context;
};
