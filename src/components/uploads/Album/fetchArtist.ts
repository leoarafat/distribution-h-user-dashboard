import axios from "axios";

export const getArtistsByIds = async (ids: string[]) => {
  try {
    const response = await axios.post(
      `http://localhost:7001/primary-artist/all-by-ids`,
      {
        ids,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching artists:", error);
    throw error;
  }
};
