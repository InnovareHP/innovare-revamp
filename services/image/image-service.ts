import axios from "axios";

export const imageService = {
  uploadImage: async (image: File) => {
    const formData = new FormData();
    formData.append("image", image);
    const response = await axios.post("/api/image", formData);

    return response.data as {
      url: string;
    };
  },

  deleteImage: async (image: string) => {
    const response = await axios.delete(`/api/image`, {
      data: {
        image,
      },
    });

    return response.data;
  },
};
