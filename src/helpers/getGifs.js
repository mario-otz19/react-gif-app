export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=uwTF38FvTd65i4QAihdArfHqHL6CssQH`,
          resp = await fetch(url),
          { data } = await resp.json(),
          gifs = data.map(img => {
              return {
                  id: img.id,
                  title: img.title,
                  url: img.images?.downsized_medium.url
              }
          });

    return gifs;
}
