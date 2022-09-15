import React, { useEffect, useState } from "react";
const imageUrl = "https://i.imgur.com/fHyEMsl.jpg";
const imageUrl2 = 'http://api.csb.lol/image/young-people-09-05-2021.png'

export default function GetImage() {
  const [img, setImg] = useState();

  const fetchImage = async () => {
    const res = await fetch(imageUrl2);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <>
      <img src={imageUrl2} alt="image" />
    </>
  );
}