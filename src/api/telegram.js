const baseUrl =
  "https://api.telegram.org/bot6653111274:AAHZc4GHmGj7WR-uDeuAjvaYf6OV6Xjhl1s/";
export const sendMessage = async (message) => {
  const url = `${baseUrl}sendMessage?chat_id=-4098488431&parse_mode=HTML&text=${encodeURIComponent(
    message
  )}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.description || "Something went wrong");
    }

    console.log("Message sent successfully");
  } catch (error) {
    console.error("Error sending message:", error);
  }
};
