import { useState } from "react";

export const PromoPage = () => {
  const [text, setText] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Введите ваш никнейм тик ток"
        value={text}
        onChange={(e) => setText(e.target.value)}
        minLength={2}
        maxLength={10}
      ></input>
      <p>Okey, if your nickname in TikTok is: {text}</p>
    </>
  );
};
