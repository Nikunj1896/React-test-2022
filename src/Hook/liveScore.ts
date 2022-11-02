import { useEffect, useState } from "react";
import { userList } from "../userList";

export const useLiveScore = () => {
  const [users, setUsers] = useState<any[]>(userList);
  const updatedScore = () => {
    let newList = users
      .map((user) => {
        return { ...user, score: Math.floor(Math.random() * (10000000 - 0)) };
      })
      .sort((a: { score: any }, b: { score: any }) => {
        return a.score - b.score;
      })
      .reverse();
    setUsers(newList);
  };
  useEffect(() => {
    const interval = setInterval(updatedScore, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  return { users };
};
