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
  🎉 Wishing you the happiest birthday, <b>Lakshmi</b>! 💖
  <br />

  🌸 May your day be filled with love ❤️, laughter 😄, and beautiful memories you'll always cherish.
  <br />

  🎶 Keep singing and sharing your beautiful voice, because it brings joy to everyone around you. May your passion for music always lead you to happiness and new opportunities. 🎤✨
  <br />

  🌟 May all your dreams come true, your heart stay full of happiness 💕, and every new day bring you success, peace, and countless reasons to smile. 😊
  <br />

  🎂 Stay the amazing person you are, keep smiling, and never stop shining.
  <br />

  <b>Happy Birthday, Lakshmi! 🎂🎁💐❤️</b>
</p>
          </div>
        </div>
      )}
    </div>
  );
}