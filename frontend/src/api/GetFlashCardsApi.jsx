import { useQuery } from "react-query";

const API_BASE_URL = import.meta.VITE_API_BASE_URL;

export const useGetFlashCards = () => {
    const getFlashCardsRequest = async () => {
        const response = await fetch(`${API_BASE_URL}/problems`, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error("Failed to get restaurant!");
        }

        return response.json();
    }

    const {
        data: problems,
        isLoading,
    } = useQuery(
        "fetchProblems",
        getFlashCardsRequest
    );

    return {
        problems,
        isLoading,
    };
}