import { useQuery } from "@tanstack/react-query";
import { getAlbums } from "../api/apiAlbums";

export function useAlbums() {
  const {
    isLoading,
    data: albums,
    error,
  } = useQuery({
    queryKey: ["albums"],
    queryFn: getAlbums,
  });
  return { isLoading, error, albums };
}
