"use client";
import useCheckAuth from "@/hooks/useCheckAuth";
import React from "react";

const Home = () => {
  useCheckAuth({
    rootType: "private",
  });
  return (
    <div
      className="
      flex
      flex-col
      items-center
      justify-center
      h-full
      text-black

    "
    >
      <div
        className="w-1/2 
      flex
      flex-col
      items-center
      justify-center
      space-y-4
      text-center
      h-full
      "
      >
        <h1 className="text-4xl font-bold">Turkish Twitter Çok Yakında....</h1>
        <p className="text-xl mt-4">
          Turkish Twitter, Türkçe içerik üreticileri için özel olarak
          tasarlanmış bir sosyal medya platformudur.
        </p>
        <p className="text-xl mt-4">
          Turkish Twitter, kullanıcılarının gizliliğini ön planda tutar.
        </p>

        <p className="text-xl mt-4">
          Turkish Twitter, tinder benzeri bir eşleştirme sistemi ile
          kullanıcıları birbirleri ile tanıştırmaz. Kullanıcılar, kendi
          içeriklerini üretir ve paylaşır. Bu içerikler, diğer kullanıcılar
          tarafından beğenilir ve yorumlanır.
        </p>
      </div>
    </div>
  );
};

export default Home;
