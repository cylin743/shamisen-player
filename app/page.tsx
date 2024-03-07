"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import 'abcjs/abcjs-audio.css';
import {Notation, TuneTranslator} from '../components/Notation'


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
  const [tune, setTune] = useState('X:1\nT:Example\nM:4/4\nC:Trad.\nK:G\n|:Gccc dedB|dedB dedB|c2ec B2dB|c2A2 A2BA|');
  const abcjs = require('abcjs');
  
  
  
  useEffect(() => {
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
      sequenceCallback:(e)=>{ console.log(e)
        return [] },
      pan: [1.3, 2.3],
      program: 106,
      chordsOff: true
    });

  }, [tune])

  
  return (
    <main>
      <h1>Shamisen Player</h1>
      <textarea
        value={tune}
        onChange={(e) => setTune(e.target.value)}
      ></textarea>
      <div>
        <div id="main-midi"></div>
        <div id="paper"></div>
      </div>
      <Notation props={tune}/>
    </main>
  );
}
