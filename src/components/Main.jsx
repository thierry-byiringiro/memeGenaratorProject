import { useState } from "react";

export default function Main() {
    const [meme,setMeme] = useState({
        topText : "ONE DOES NOT SIMPLY",
        bottomText : "WALK INTO MORDOR",
        imageUrl: "http://i.imgflip.com/1bij.jpg",
    })
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
              className="bg-white w-55 p-2 rounded-sm border border-[#D1D5DB] placeholder-[#6B7280] px-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[#374151] mt-2">Bottom Text</label>
            <input
              type="text"
              placeholder="Walk into Mordor"
              name="bottomText"
              className="bg-white w-55 p-2 rounded-sm border border-[#D1D5DB] placeholder-[#6B7280] px-2"
            />
          </div>
        </div>
        <button className="col-span-2 bg-linear-to-r from-[#711F8D] to-[#A818DA] w-110 h-10 rounded-md">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="grid">
        <img src={meme.imageUrl} className="w-110" />
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
