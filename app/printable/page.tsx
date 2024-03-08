"use client"
import { useState, useEffect } from "react";
import 'abcjs/abcjs-audio.css';
import {Notation} from '../../components/Notation'
import { useSearchParams } from 'next/navigation'
import LZString from "lz-string";


class CursorControl {
  onStart = ()=>{}
  onStop = ()=>{
  }
  onFinished = ()=>{
  }
  onBeat = ()=>{
  }
  onEvent = ()=>{
  }
}

function shamisenTranslator(key: string, source: string) {
}

export default function Home() {
  const abcjs = require('abcjs');
  const searchParams = useSearchParams()
  var defaultTune = searchParams.get("t") || ""
  if ( defaultTune == ""){
    defaultTune = searchParams.get('tune') || ""
    defaultTune = atob(defaultTune)
  }else{
    defaultTune = LZString.decompressFromBase64(decodeURIComponent(defaultTune)) || ""
  }
  const [tune, setTune] = useState(defaultTune);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [sharedLink, setSharedLink] = useState("")
  const handleShare = () => {
    navigator.clipboard.writeText(sharedLink)
  }
  
  
  
  useEffect(() => {
    let compressedTune = LZString.compressToBase64(tune);
    setSharedLink(`https://cylin743.github.io/shamisen-player/?t=${encodeURIComponent(compressedTune)}`)
  }, [tune])

  
  return (
    <main>
      <Notation input={tune}/>
    </main>
  );
}

const InputStyle = {
  padding: "12px 10px",
  width: "90%",
  height: "250px",
}

