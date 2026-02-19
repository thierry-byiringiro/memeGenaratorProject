import { useEffect, useState } from "react";

export default function Main() {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setArr(data.data.memes));
  }, []);

  function handleImageUrl() {
    const getRandomIndex = Math.floor(Math.random() * arr.length);
    const getTheUrl = arr[getRandomIndex].url;

    setMeme((prevValue) => {
      return {
        ...prevValue,
        imageUrl: getTheUrl,
      };
    });
  }
  const [meme, setMeme] = useState({
    topText: "ONE DOES NOT SIMPLY",
    bottomText: "WALK INTO MORDOR",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMeme((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  return (
    <main className="flex flex-col space-y-6">
      <div className="flex flex-col text-white space-y-10">
        <div className="flex space-x-6">
          <div className="flex flex-col">
            <label className="text-[#374151] mt-2">Top Text</label>
            <input
              type="text"
              placeholder="One does not simply"
              name="topText"
              onChange={handleChange}
              value={meme.topText}
              className="bg-white w-55 p-2 rounded-sm border border-[#D1D5DB] placeholder-[#6B7280] px-2 text-black"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[#374151] mt-2">Bottom Text</label>
            <input
              type="text"
              placeholder="Walk into Mordor"
              name="bottomText"
              onChange={handleChange}
              value={meme.bottomText}
              className="bg-white w-55 p-2 rounded-sm border border-[#D1D5DB] placeholder-[#6B7280] px-2 text-black"
            />
          </div>
        </div>
        <button
          onClick={handleImageUrl}
          className="col-span-2 bg-linear-to-r from-[#711F8D] to-[#A818DA] w-110 h-10 rounded-md"
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="grid">
        <img src={meme.imageUrl} className="w-110 max-h-full object-contain" />
        <span className="justify-self-center self-center text-4xl text-white font-bold -mt-116 anton [-webkit-text-stroke:2px_black]">
          {meme.topText.toUpperCase()}
        </span>
        <span className="justify-self-center self-center text-4xl text-white font-bold -mt-16 anton [-webkit-text-stroke:2px_black]">
          {meme.bottomText.toUpperCase()}
        </span>
      </div>
    </main>
  );
}
