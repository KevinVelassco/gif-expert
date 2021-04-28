export async function getGifs(category) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ADWbaWzWxzmvj1RwlWZuVgLZIRSizaU3&q=${encodeURI(category)}`;

    const response = await fetch(url);

    const { data } = await response.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
    }));

    return gifs;
}