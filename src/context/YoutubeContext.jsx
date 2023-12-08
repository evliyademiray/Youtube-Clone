import { createContext, useEffect, useState } from "react";
import { categories } from "../constants";
import { getData } from "../helpers/getData";

export const youtubeContext = createContext();

//context'de tutulan verileri uygulamaya aktarır.

export function YoutubeProvider({ children }) {
  //seçili kategoriyi tutar
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  //videoları tutar
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    //API'den videolar alınır
    if (
      selectedCategory.type === "home" ||
      selectedCategory.type === "trending"
    ) {
      //Yardımcı fonksiyonu kullanıp API isteği atma
      getData(`/${selectedCategory.type}`).then((res) =>
        setVideos(res.data.data)
      );
    }
    //tip kategori ise o kategori için istek at
    if (selectedCategory.type === "category") {
      getData(`/search?query=${selectedCategory.name}&type=video`).then((res) =>
        setVideos(res.data.data)
      );
    }
  }, [selectedCategory]);

  return (
    <youtubeContext.Provider
      value={{ selectedCategory, setSelectedCategory, videos }}
    >
      {children}
    </youtubeContext.Provider>
  );
}
