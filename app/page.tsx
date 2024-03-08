"use client"
import { useState, useEffect } from "react";
import 'abcjs/abcjs-audio.css';
import {Notation, TuneTranslator} from '../components/Notation'
import { useSearchParams } from 'next/navigation'
import LZString from "lz-string";
import {ShareModal} from '../components/Modal'
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


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
    const t3 = TuneTranslator(tune)
    const abcObj = abcjs.renderAbc('*', t3, {
      scale: 1,
      staffwidth: 700,
      paddingleft: 0,
      paddingright: 0,
      responsive: 'resize',
      oneSvgPerLine: true,
      add_classes: true,
    });
    const [visualObj] = abcObj
    var cursorControl = new CursorControl();
    var synthControl = new abcjs.synth.SynthController();
    synthControl.load('#main-midi', cursorControl, {
      displayRestart: true,
      displayPlay: true,
      displayProgress: true,
      displayLoop: true,
      displayWarp: true,
      showCursor: true,
    })
    synthControl.setTune(visualObj, false, {
      soundFontUrl: 'https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/',
      // program: 24,
      programOffsets:{
      },
      fadeLength:1000,
      millisecondsPerMeasure:1000,
      pan: [1.3, 2.3],
      program: 106,
      chordsOff: true
    });

  }, [tune])

  
  return (
    <main>
      <h1>Shamisen Player</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Editor
        </AccordionSummary>
        <AccordionDetails>
          <textarea
            value={tune}
            onChange={(e) => setTune(e.target.value)}
            style={InputStyle}
          ></textarea>
        </AccordionDetails>
      </Accordion>
      <Button onClick={handleOpen}>Share</Button>
      <div>
        <div id="main-midi"></div>
        <div id="paper"></div>
      </div>
      <Notation input={tune}/>
      <ShareModal
        isOpen={open}
        onClose={handleClose}
        link={sharedLink}
        onCopy={handleShare}
      />
    </main>
  );
}

const InputStyle = {
  padding: "12px 10px",
  width: "90%",
  height: "250px",
}

