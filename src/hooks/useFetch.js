import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function ambilData() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(" Server membalas dengan error");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError("Data gagal dimuat, coba lagi nanti");
      } finally {
        setLoading(false);
      }
    }

    ambilData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
