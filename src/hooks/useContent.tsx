import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { BACKEND_URL } from "../components/config";

export function useContent() {
    const [contents, setContents] = useState([]);

    const refresh = useCallback(() => {
        axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: {
                "Authorization": localStorage.getItem("token") || ""
            },
        })
            .then((response) => {
                setContents(response.data.content)
            })
            .catch((err) => {
                console.error("Error fetching content: ", err);
            });
    }, []);

            useEffect(() => {
                refresh()
                const interval = setInterval(() => {
                    refresh()
                }, 10 * 1000)
                return () => {
                    clearInterval(interval);
                };
            }, [refresh]);

    return { contents, refresh };
}
