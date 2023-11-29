import axios, { Axios } from "axios";

type Juz = {
  index: string;
  start: {
    index: string;
    verse: string;
    name: string;
  };
  end: {
    index: string;
    verse: string;
    name: string;
  };
};

type Surah = {
  place: string;
  type: string;
  count: number;
  title: string;
  titleAr: string;
  index: string;
  pages: string;
  juz: Array<{
    index: string;
    verse: {
      start: string;
      end: string;
    };
  }>;
};

export enum QueryKey {
  GetAllSurah = "GetAllSurah",
  GetAllJuz = "GetAllJuz",
}

const client = axios.create({
  baseURL:
    "https://raw.githubusercontent.com/islamic-software/quranjson/master/source",
});

class Quran {
  public async getAllSurah(): Promise<Surah[]> {
    const { data } = await client.get<Surah[]>("/surah.json");
    return data;
  }

  public async getAllJuz(): Promise<Juz[]> {
    const { data } = await client.get<Juz[]>("/juz.json");
    return data;
  }
}

export const quran = new Quran();
