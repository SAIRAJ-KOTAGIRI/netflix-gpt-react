const getRandomMovie = () => {
    const movieLists = [
      "Andaz Apna Apna, Hera Phero, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan",
      "Dil Chahta Hai, Lagaan, Gangs of Wasseypur, Queen, Rang De Basanti",
      "3 Idiots, Dilwale Dulhania Le Jayenge, PK, Zindagi Na Milegi Dobara, Gully Boy",
      "Sholay, Taare Zameen Par, Mughal-e-Azam, Omkara, Barfi!",
      "Kabhi Khushi Kabhie Gham, Dil Se.., Devdas, Kahaani, Article 15",
      "Dangal, Padmaavat, Udta Punjab, Bajrangi Bhaijaan, Andhadhun",
      "Wake Up Sid, Dhobi Ghat, Rockstar, Satyam Shivam Sundaram, Anand",
      "Guide, Masaan, Kaagaz Ke Phool, Mother India, Bareilly Ki Barfi",
      "Chak De! India, Bombay, Black, Jab We Met, Swades",
      "A Wednesday!, Tumbbad, Gol Maal, Pyaasa, Kahaani",
      "Bhool Bhulaiyaa, Dil Dhadakne Do, Fashion, Gangs of Wasseypur 2, Hera Pheri",
      "Jab We Met, Lage Raho Munna Bhai, Newton, Paan Singh Tomar, Piku",
      "Raanjhanaa, Rocket Singh: Salesman of the Year, Talaash, Vicky Donor, Zindagi Na Milegi Dobara",
      "Yeh Jawaani Hai Deewani, Zindagi Na Milegi Dobara, Dabangg, Dhamaal, Dev.D",
      "Gangs of Wasseypur, Gully Boy, Haider, Kabir Singh, Kal Ho Naa Ho",
      "Kaminey, Kapoor & Sons, Khakee, Lakshya, Lagaan",
      "Mission Kashmir, M.S. Dhoni: The Untold Story, Mujhse Shaadi Karogi, Om Shanti Om, Once Upon a Time in Mumbaai",
      "Phir Hera Pheri, Pink, P.K., Queen, Raanjhanaa",
      "Rang De Basanti, Rockstar, Saala Khadoos, Sholay, Slumdog Millionaire",
      "Swades, Tanu Weds Manu, Taare Zameen Par, Talaash: The Answer Lies Within, The Lunchbox"
    ];
  
    const randomIndex = Math.floor(Math.random() * movieLists.length);
    return movieLists[randomIndex];
  }


  export default getRandomMovie;
  
  