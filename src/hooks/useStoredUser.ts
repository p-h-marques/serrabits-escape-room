import { API_URL, USER_KEY } from "@/consts";
import { useCallback, useEffect, useState } from "react";

function getOrCreateUserId() {
  const user = localStorage.getItem(USER_KEY);

  if (user) {
    return user;
  }

  const newUser = crypto.randomUUID();
  localStorage.setItem(USER_KEY, newUser);
  return newUser;
}

export default function useStoredUser() {
  const [user, setUser] = useState<string | null>(null);

  const getUserStep = useCallback(async () => {
    const response = await fetch(`${API_URL.USER}/${user}`);
    const data = await response.json();
    console.log(data)
  }, [user]);

  useEffect(() => {
    const user = getOrCreateUserId();
    setUser(user);
    getUserStep();
  }, [getUserStep]);

  return user
}