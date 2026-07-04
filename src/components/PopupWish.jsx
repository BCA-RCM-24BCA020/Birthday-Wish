import { useRef, useState } from "react";
import "./PopupWish.css";

export default function PopupWish() {
  const [show, setShow] = useState(false);
  const audioRef = useRef(null);

  const openPopup = () => {
    setShow(true);

    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  };

  const closePopup = () => {
    setShow(false);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <div className="container">
      <audio ref={audioRef} loop>
        <source src="/music/song.mp3" type="audio/mpeg" />
      </audio>

      <button className="magic-btn" onClick={openPopup}>
        🎁 Open Surprise
      </button>

      {show && (
        <div className="overlay">
          <div className="popup">
            <span className="close" onClick={closePopup}>
              ✖
            </span>

            <div className="icons">💖 🌸 ✨ 💐 💖</div>

            <p>
              🎉 I'm wishing you the happiest birthday ever,{" "}
              <b>Lakshmi</b>! 💖
              <br />
              

              🌸 Today is all about celebrating the wonderful person you are.
              Your kindness, strength, and beautiful smile brighten the lives
              of everyone around you. ✨

              <br />
              

              🎂 May your special day be filled with endless love ❤️,
              laughter 😄, unforgettable memories 📸, and beautiful moments
              🌷 that stay with you forever.

              <br />
              

              🌟 May all your dreams come true, your heart always stay happy
              💕, and every new day bring you success 🌈, peace 🕊️, and
              countless reasons to smile. 😊

              <br />
              

              💝 Keep shining, keep smiling, and never stop being the amazing
              person you are.

              <br />
              

              🎈 Wishing you a day as beautiful as your heart.
              <br />
              <b>Happy Birthday, Lakshmi! 🎂🎁💐❤️</b>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}