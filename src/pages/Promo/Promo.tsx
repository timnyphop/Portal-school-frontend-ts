import { useState } from "react";

export const PromoPage = () => {
  const [text, setText] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Введите ваш никнейм"
        value={text}
        onChange={(e) => setText(e.target.value)}
        minLength={2}
        maxLength={10}
      ></input>
      <p>
        Okey,{text} теперь ты должен загрузить ниже скриншоты с потверждениями
        лайков и комментария
      </p>
    </>
  );
};
