import axios from "axios";

export const getArtistsByIds = async (ids: string[]) => {
  try {
    const response = await axios.post(
      `https://backend.bemusix.com/primary-artist/all-by-ids`,
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
export const getFeatureArtistsByIds = async (ids: string[]) => {
  try {
    const response = await axios.post(
      `https://backend.bemusix.com/primary-artist/feature-by-ids`,
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
