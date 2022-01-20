import React, { useState, useEffect } from "react"

const useAudio = url => {
  const [audio, setAudio] = useState(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    setAudio(new Audio(url))
  }, [])

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
    if (audio) {
      playing ? audio.play() : audio.pause()
    }
  }, [playing, audio])

  useEffect(() => {
    if (audio) {
      audio.addEventListener("ended", () => setPlaying(false))
      return () => {
        audio.removeEventListener("ended", () => setPlaying(false))
      }
    }
  }, [audio])

  return [playing, toggle]
}

const AudioPlayer = () => {
  const [playing, toggle] = useAudio(
    "https://res.cloudinary.com/philcode2021/video/upload/v1633106898/LEMAT_-_Ensemble_Of_Organic_Amazements_Vol._I_-_01_Wander_xhpdx8.mp3"
  )
  return (
    <div className="audio-player">
      <button
        type="button"
        className="audio-control"
        aria-label="press to play or pause music"
        onClick={toggle}
      >
        {playing ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="pause-button"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="play-button"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
      
    </div>
  )
}

export default AudioPlayer
