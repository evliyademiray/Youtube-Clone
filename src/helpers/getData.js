import axios from "axios";

//İstek ile göndermemiz gereken kimliğimiz
const options = {
  params: { geo: "TR",lang:"tr"},
  headers: {
    "X-RapidAPI-Key": "4a33083243mshd021647818f6392p16c21cjsne7d5015d461b",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};
//Bütün isteklerin (baseUrl) başlangıcı olan url'i tanımlama
axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";
//API'ye verdiğimiz endpoint için istek atıp verileri geri döndüren bir fonk
export const getData = async (path) => {
  try {
    //Parametre olarak gelen yol istek atar
    //Aldığı verileri döndürür
    return await axios.get(path, options);
  } catch (err) {
    console.log("verileri çekerken hata oluştu");
  }
};
