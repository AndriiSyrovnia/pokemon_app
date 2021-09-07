import React from "react";
import FavButton  from "./../components/fav_button/FavButton";
import Header  from "./../components/header/header";
import Photo from "./../components/photo/photo";
import Table from "./../components/table/table";

export default function Info() {
    return <h2>Info
      <Header />
      <Photo />
      <Table />
    <FavButton/>
    </h2>;
  };