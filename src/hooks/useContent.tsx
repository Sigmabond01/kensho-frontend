import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { BACKEND_URL } from "../pages/config";

interface Content {
  title: string;
  link: string;
  type: "youtube" | "twitter";
}

export function useContent() {
  const [contents, setContents] = useState<Content[]>([]);

  const refresh = useCallback(() => {
    axios.get(`${BACKEND_URL}/api/v1/content`, {
      headers: { Authorization: localStorage.getItem("token") || "" },
    })
    .then(res => setContents(res.data.content))
    .catch(err => console.error(err));
  }, []);

  const remove = useCallback((link: string) => {
    setContents(prev => prev.filter(c => c.link !== link));
  }, []);

  useEffect(() => {
    refresh();
    const interval = setInterval(refresh, 10000);
    return () => clearInterval(interval);
  }, [refresh]);

  return { contents, refresh, remove };
}

