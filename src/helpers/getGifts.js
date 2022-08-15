export const getGifs = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=szQN7Ud1pib955X4YZMqN40D4JcolfQS&q=${category}&limit=10`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {

    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};