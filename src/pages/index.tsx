import { useQuery } from "@tanstack/react-query";
import React from "react";
import { QueryKey, quran } from "src/services/quran";

const Home: React.FC<{}> = () => {
  const surahQuery = useQuery({
    queryKey: [QueryKey.GetAllSurah],
    queryFn: quran.getAllSurah,
  });

  const juzQuery = useQuery({
    queryKey: [QueryKey.GetAllJuz],
    queryFn: quran.getAllJuz,
  });

  return (
    <div>
      <div className="max-w-screen-sm mx-auto flex">
        <div className="w-full text-center">
          {surahQuery.isLoading ? (
            <p>Loading..</p>
          ) : surahQuery.error ? (
            <p>{surahQuery.error.message}</p>
          ) : (
            surahQuery.data && (
              <div>
                <ul>
                  {surahQuery.data.map((surah) => (
                    <li
                      className="py-3 hover:bg-gray-100 cursor-pointer rounded-md"
                      key={surah.index}
                    >
                      {surah.titleAr}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>

        <div className="w-full text-center">
          {juzQuery.isLoading ? (
            <p>Loading..</p>
          ) : juzQuery.error ? (
            <p>{juzQuery.error.message}</p>
          ) : (
            juzQuery.data && (
              <div>
                <ul>
                  {juzQuery.data.map((juz) => (
                    <li
                      className="py-3 hover:bg-gray-100 cursor-pointer rounded-md"
                      key={juz.index}
                    >
                      {juz.index}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
