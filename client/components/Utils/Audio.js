import React from "react";
import { useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import { atom } from "recoil";

const playTimeDuration = atom({
  key: "playTimeDuration",
  default: 0.0,
});

const playingStatus = atom({
  key: "playingStatus",
  default: false,
});

const Audio = ({ src }) => {
  const player = useRef(null);
  const [isPlaying, setIsPlaying] = useRecoilState(playingStatus);

  const [playTime, setPlayTime] = useRecoilState(playTimeDuration);

  const play = (e) => {
    isPlaying === true ? player.current.pause() : player.current.play();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayTime(parseFloat(player.current.currentTime / 60).toFixed(2));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (player.current !== null) {
    setPlayTime(parseFloat(player.current.currentTime / 60).toFixed(2));
  }

  return (
    <div>
      <audio
        src={src}
        ref={player}
        autoplay={false}
        onEnded={() => setIsPlaying(false)}
      />
      <div>
        <section className="flex items-center justify-between w-36">
          {/* text area */}
          <span className="text-xs text-white">Listen:</span>
          {/* button area */}
          <span>
            <button
              className="w-8 h-16 outline-none"
              onClick={() => {
                isPlaying === true ? setIsPlaying(false) : setIsPlaying(true);
                return play();
              }}
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-9 h-9 text-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10ZM8.4875 6.36625C8.39404 6.29971 8.28408 6.26018 8.16965 6.25198C8.05522 6.24379 7.94074 6.26724 7.83876 6.31978C7.73678 6.37233 7.65122 6.45192 7.59147 6.54986C7.53172 6.64779 7.50007 6.76028 7.5 6.875V13.125C7.50007 13.2397 7.53172 13.3522 7.59147 13.4501C7.65122 13.5481 7.73678 13.6277 7.83876 13.6802C7.94074 13.7328 8.05522 13.7562 8.16965 13.748C8.28408 13.7398 8.39404 13.7003 8.4875 13.6337L12.8625 10.5087C12.9435 10.4509 13.0096 10.3746 13.0551 10.2861C13.1007 10.1976 13.1245 10.0995 13.1245 10C13.1245 9.90047 13.1007 9.80237 13.0551 9.71388C13.0096 9.62539 12.9435 9.54906 12.8625 9.49125L8.4875 6.36625Z"
                    fill="#156AFF"
                  />
                </svg>
              )}
            </button>
          </span>
          {/* song duration */}
          <span className="text-2xl text-icon">{playTime}</span>
        </section>
      </div>
    </div>
  );
};

export default Audio;
