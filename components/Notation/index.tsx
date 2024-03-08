"use client"
import {TuneParser, TuneTranslator} from "./TuneTranslator"

function notesStringHandler(data: string) {
    const regexStr = /\|\:|\:\||\(\d\:[\d#]+([\:\w])*\)([1-9/])*|(\|\|)|(\|)|\[( *\(\d\:[\d#]+(\:\w)*\) *)+\]([1-9/])*|z([1-9/])*|\(3/g
    var matches: Array<string> = data.match(regexStr) || []
    var len = 0
    var tripletPreX1 = 1
    var tripletX1 = 1
    var tempTripletChecker = false
    var tempLast = 0
    var tripletCount = 1
    var needTriplet = false
    var results = []
    for(var i = 0; i< matches.length; i ++){
        if(matches[i] == "|:" ){}
        switch(matches[i]){
            case "|":
            case "||":
            case "|:":
            case ":|":
                len+=2
                results.push({
                    type: "bar",
                    note: matches[i],
                    len: 2
                })
                tempLast = len
                break
            case "(3":
                console.log(tempLast)
                needTriplet = true
                tripletX1 = len
                tempTripletChecker = true
                tripletPreX1 = tempLast
                break
            case matches[i].match(/z([1-9/])*/)?.input:
                var l = matches[i].replace("z", "").replace("Z", "")
                if(l == ""){
                    len+=2
                    results.push({
                        type: "relax",
                        note: matches[i],
                        len: 2
                    })
                }else{
                    var check = l.match(/\d+\//g) || []
                    if(check.length > 0){
                        var temp: Array<string> = l.match(/\d+/g) || ["0"]
                        len+=parseInt(temp[0])
                        results.push({
                            type: "relax",
                            note: matches[i],
                            len: parseInt(temp[0])
                        })
                    }
                    var check = l.match(/\d+/g) || []
                    if(check.length > 0){
                        var temp: Array<string> = l.match(/\d+/g) || ["0"]
                        len+=parseInt(temp[0])*2
                        results.push({
                            type: "relax",
                            note: matches[i],
                            len: parseInt(temp[0])*2
                        })
                    }
                    if(l == "/"){
                        var temp: Array<string> = l.match(/\d+/g) || ["0"]
                        len+=1
                        results.push({
                            type: "relax",
                            note: matches[i],
                            len: 1
                        })
                    }else if(l == "//"){
                        var temp: Array<string> = l.match(/\d+/g) || ["0"]
                        len+=0.5
                        results.push({
                            type: "relax",
                            note: matches[i],
                            len: 0.5
                        })
                    }
                }
                if (tempTripletChecker){
                    tempTripletChecker = false
                    tripletX1 = len
                }
                tempLast = len
                break
            case matches[i].match(/\[( *\(\d\:[\d#]+([\:\w])*\) *)+\]([1-9/])*/)?.input:
                var notesMatches = matches[i].match(/\(\d\:\d+(\:\w)*\)/g) || []
                var notes: Array<object> = []
                notesMatches.forEach((x)=>{
                    x = x.replace("(", "").replace(")", "")
                    var noteInfo = x.split(":")
                    if (noteInfo.length < 2) {
                        return
                    }
                    const line = noteInfo[0]
                    const position = noteInfo[1]
                    notes.push({
                        line: line,
                        note: position
                    })
                })
                if(notes.length == 0) {
                    break
                }
                var l = matches[i].replace(/\[( *\(\d\:[\d#]+([\:\w])*\) *)+\]/g, "")
                if(l == ""){
                    len+=2
                    results.push({
                        type: "notes",
                        notes: notes,
                        len: 2
                    })
                }else{
                    var check = l.match(/\d+\//g) || []
                    if(check.length > 0){
                        var temp: Array<string> = l.match(/\d+/g) || ["0"]
                        len+=parseInt(temp[0])
                        results.push({
                            type: "notes",
                            notes: notes,
                            len: parseInt(temp[0])
                        })
                    }
                    var check = l.match(/\d+/g) || []
                    if(check.length > 0){
                        var temp: Array<string> = l.match(/\d+/g) || ["0"]
                        len+=parseInt(temp[0])*2
                        results.push({
                            type: "notes",
                            notes: notes,
                            len: parseInt(temp[0])*2
                        })
                    }
                    if(l == "/"){
                        var temp: Array<string> = l.match(/\d+/g) || ["0"]
                        len+=1
                        results.push({
                            type: "notes",
                            notes: notes,
                            len: 1
                        })
                    }else if(l == "//"){
                        var temp: Array<string> = l.match(/\d+/g) || ["0"]
                        len+=0.5
                        results.push({
                            type: "notes",
                            notes: notes,
                            len: 0.5
                        })
                    }
                }
                if(needTriplet && tripletCount == 3){
                    needTriplet = false
                    tripletCount = 1
                    results.push({
                        type: "triplet",
                        startPre: tripletPreX1,
                        start: tripletX1,
                        end: len,
                        line: "3"
                    })
                }else if(needTriplet){
                    tripletCount++
                }
                if (tempTripletChecker){
                    tempTripletChecker = false
                    tripletX1 = len
                }
                tempLast = len
                break
            default:
                var noteString = (matches[i].match(/\(\d\:\d+([\:\w])*\)/g) || [])[0] || ""
                noteString = noteString.replace("(", "").replace(")", "")
                var noteInfo = noteString.split(":")
                if (noteInfo.length < 2) {
                    break
                }
                const line = noteInfo[0]
                const position = noteInfo[1]
                var l = matches[i].replace(/\(\d\:\d+([\:\w])*\)/g, "")
                var tech = ""
                if ( noteInfo.length >= 3 ){
                    tech = noteInfo[2]
                }
                
                if(l == ""){
                    len+=2
                    results.push({
                        type: "note",
                        line: line,
                        note: position,
                        tech,
                        len: 2
                    })
                }else{
                    var check = l.match(/\d+\//g) || []
                    if(check.length > 0){
                        var temp: Array<string> = l.match(/\d+/g) || ["0"]
                        len+=parseInt(temp[0])
                        results.push({
                            type: "note",
                            tech,
                            line,
                            note: position,
                            len: parseInt(temp[0])
                        })
                    }
                    var check = l.match(/\d+/g) || []
                    if(check.length > 0){
                        var temp: Array<string> = l.match(/\d+/g) || ["0"]
                        len+=parseInt(temp[0])*2
                        results.push({
                            type: "note",
                            tech,
                            line,
                            note: position,
                            len: parseInt(temp[0])*2
                        })
                    }
                    if(l == "/"){
                        var temp: Array<string> = l.match(/\d+/g) || ["0"]
                        len+=1
                        results.push({
                            type: "note",
                            tech,
                            line,
                            note: position,
                            len: 1
                        })
                    }else if(l == "//"){
                        var temp: Array<string> = l.match(/\d+/g) || ["0"]
                        len+=0.5
                        results.push({
                            type: "note",
                            tech,
                            line,
                            note: position,
                            len: 0.5
                        })
                    }
                }
                if(needTriplet && tripletCount == 3){
                    needTriplet = false
                    tripletCount = 1
                    results.push({
                        type: "triplet",
                        startPre: tripletPreX1,
                        start: tripletX1,
                        end: len,
                        line
                    })
                }else if(needTriplet){
                    tripletCount++
                }
                if (tempTripletChecker){
                    tempTripletChecker = false
                    tripletX1 = len
                }
                tempLast = len
        }
    }
    return {
        len,
        notes: results
    }
    
}
function Triplet(x1, x2, noteInfo){
    var dX = (x1+x2)/2
    var y = 100.71
    if(noteInfo.line == "1"){
        y = 126.71
    }else if (noteInfo.line == "2"){
        y = 114.71
    }else if (noteInfo.line == "3"){
        y = 100.71
    }
    console.log(noteInfo)
    return (
        <g data-name="triplet">
            <path d={`M ${x1} ${y} L ${x1} ${y+5}M ${x2} ${y} L ${x2} ${y+5}M ${x1} ${y} L ${dX-4} ${y}M ${dX+4} ${y} L ${x2} ${y}`} data-name="triplet-bracket"></path>
            <text stroke="none" font-size="12" font-style="italic" font-family="Times" font-weight="normal" text-decoration="none" text-anchor="middle" x={dX} y={y+3} data-name="3">
                <tspan x={dX}>3</tspan>
            </text>
        </g>
    )
}

function TimeSignature(){
    return (<g className="abcjs-staff-extra abcjs-time-signature abcjs-l0 abcjs-m0 abcjs-mm0 abcjs-v0" fill="currentColor" stroke="none" data-name="staff-extra time-signature">
    <path data-name="4" d="M 60.941 113.49813196981265c 0.27 -0.09 0.42 -0.12 0.54 -0.03c 0.09 0.06 0.15 0.21 0.15 0.3c -0.03 0.06 -1.92 2.31 -4.23 5.04c -2.31 2.73 -4.23 4.98 -4.26 5.01c -0.03 0.06 0.12 0.06 2.55 0.06l 2.61 0l 0 -2.37c 0 -2.19 0.03 -2.37 0.06 -2.46c 0.03 -0.06 0.21 -0.18 0.57 -0.42c 1.08 -0.72 1.38 -1.08 1.86 -2.16c 0.12 -0.3 0.24 -0.54 0.27 -0.57c 0.12 -0.12 0.39 -0.06 0.45 0.12c 0.06 0.09 0.06 0.57 0.06 3.96l 0 3.9l 1.08 0c 1.05 0 1.11 0 1.2 0.06c 0.24 0.15 0.24 0.54 0 0.69c -0.09 0.06 -0.15 0.06 -1.2 0.06l -1.08 0l 0 0.33c 0 0.57 0.09 1.11 0.3 1.53c 0.36 0.75 0.93 1.17 1.68 1.26c 0.3 0.03 0.39 0.09 0.39 0.3c 0 0.15 -0.03 0.18 -0.09 0.24c -0.06 0.06 -0.09 0.06 -0.48 0.06c -0.42 0 -0.69 -0.03 -2.1 -0.24c -0.9 -0.15 -1.77 -0.15 -2.67 0c -1.41 0.21 -1.68 0.24 -2.1 0.24c -0.39 0 -0.42 0 -0.48 -0.06c -0.06 -0.06 -0.06 -0.09 -0.06 -0.24c 0 -0.21 0.06 -0.27 0.36 -0.3c 0.75 -0.09 1.32 -0.51 1.68 -1.26c 0.21 -0.42 0.3 -0.96 0.3 -1.53l 0 -0.33l -2.7 0c -2.91 0 -2.85 0 -3.09 -0.15c -0.18 -0.12 -0.3 -0.39 -0.27 -0.54c 0.03 -0.06 0.18 -0.24 0.33 -0.45c 0.75 -0.9 1.59 -2.07 2.13 -3.03c 0.33 -0.54 0.84 -1.62 1.05 -2.16c 0.57 -1.41 0.84 -2.64 0.9 -4.05c 0.03 -0.63 0.06 -0.72 0.24 -0.81l 0.12 -0.06l 0.45 0.12c 0.66 0.18 1.02 0.24 1.47 0.27c 0.6 0.03 1.23 -0.09 2.01 -0.33z"></path>
    <path data-name="4" d="M 60.941 128.99813196981265c 0.27 -0.09 0.42 -0.12 0.54 -0.03c 0.09 0.06 0.15 0.21 0.15 0.3c -0.03 0.06 -1.92 2.31 -4.23 5.04c -2.31 2.73 -4.23 4.98 -4.26 5.01c -0.03 0.06 0.12 0.06 2.55 0.06l 2.61 0l 0 -2.37c 0 -2.19 0.03 -2.37 0.06 -2.46c 0.03 -0.06 0.21 -0.18 0.57 -0.42c 1.08 -0.72 1.38 -1.08 1.86 -2.16c 0.12 -0.3 0.24 -0.54 0.27 -0.57c 0.12 -0.12 0.39 -0.06 0.45 0.12c 0.06 0.09 0.06 0.57 0.06 3.96l 0 3.9l 1.08 0c 1.05 0 1.11 0 1.2 0.06c 0.24 0.15 0.24 0.54 0 0.69c -0.09 0.06 -0.15 0.06 -1.2 0.06l -1.08 0l 0 0.33c 0 0.57 0.09 1.11 0.3 1.53c 0.36 0.75 0.93 1.17 1.68 1.26c 0.3 0.03 0.39 0.09 0.39 0.3c 0 0.15 -0.03 0.18 -0.09 0.24c -0.06 0.06 -0.09 0.06 -0.48 0.06c -0.42 0 -0.69 -0.03 -2.1 -0.24c -0.9 -0.15 -1.77 -0.15 -2.67 0c -1.41 0.21 -1.68 0.24 -2.1 0.24c -0.39 0 -0.42 0 -0.48 -0.06c -0.06 -0.06 -0.06 -0.09 -0.06 -0.24c 0 -0.21 0.06 -0.27 0.36 -0.3c 0.75 -0.09 1.32 -0.51 1.68 -1.26c 0.21 -0.42 0.3 -0.96 0.3 -1.53l 0 -0.33l -2.7 0c -2.91 0 -2.85 0 -3.09 -0.15c -0.18 -0.12 -0.3 -0.39 -0.27 -0.54c 0.03 -0.06 0.18 -0.24 0.33 -0.45c 0.75 -0.9 1.59 -2.07 2.13 -3.03c 0.33 -0.54 0.84 -1.62 1.05 -2.16c 0.57 -1.41 0.84 -2.64 0.9 -4.05c 0.03 -0.63 0.06 -0.72 0.24 -0.81l 0.12 -0.06l 0.45 0.12c 0.66 0.18 1.02 0.24 1.47 0.27c 0.6 0.03 1.23 -0.09 2.01 -0.33z"></path>
  </g>)
}
function DoubleBar(x){
    return (<g key={`db-${x}`} className="abcjs-bar abcjs-bar abcjs-l0 abcjs-m0 abcjs-mm0 abcjs-v0" fill="currentColor" stroke="none" data-name="bar">
    <path d={`M ${x} 140.31L ${x} 117.94L ${x+0.5} 116.94L ${x+0.5} 140.31z`} data-name="bar"></path>
    <path d={`M ${x+2.5} 140.31L ${x+2.5} 117.94L ${x+3} 116.94L ${x+3} 140.31z`} data-name="bar"></path>
  </g>)

}
function Bar(x){
    return (<g key={`b-${x}`}  className="abcjs-bar abcjs-bar abcjs-l0 abcjs-m0 abcjs-mm0 abcjs-v0" fill="currentColor" stroke="none" data-name="bar">
    <path d={`M ${x} 140.31L ${x} 117.94L ${x+0.5} 116.94L ${x+0.5} 140.31z`} data-name="bar"></path>
  </g>)

}
function StartBar(x){
    return (
        <g key={`s-${x}`} className="abcjs-bar abcjs-bar abcjs-l0 abcjs-m0 abcjs-mm0 abcjs-v0" fill="currentColor" stroke="none" data-name="bar">
          <path d={`M ${x} 140.41L ${x} 116.94L ${x+4} 116.94L ${x+4} 140.41z`} data-name="bar"></path>
          <path d={`M ${x+8} 140.41L ${x+8} 116.94L ${x+8.6} 116.94L ${x+8.6} 140.41z`} data-name="bar"></path>
          <path data-name="dots.dot" d={`M ${x+12} 124.00813196981264c 0.09 -0.03 0.27 -0.06 0.39 -0.06c 0.96 0 1.74 0.78 1.74 1.71c 0 0.96 -0.78 1.74 -1.71 1.74c -0.96 0 -1.74 -0.78 -1.74 -1.71c 0 -0.78 0.54 -1.5 1.32 -1.68z`}></path>
          <path data-name="dots.dot" d={`M ${x+12} 130.38313196981264c 0.09 -0.03 0.27 -0.06 0.39 -0.06c 0.96 0 1.74 0.78 1.74 1.71c 0 0.96 -0.78 1.74 -1.71 1.74c -0.96 0 -1.74 -0.78 -1.74 -1.71c 0 -0.78 0.54 -1.5 1.32 -1.68z`}></path>
        </g>
    )
}

function EndBar(x){
    return (
        <g key={`e-${x}`} className="abcjs-bar abcjs-bar abcjs-l0 abcjs-m0 abcjs-mm0 abcjs-v0" fill="currentColor" stroke="none" data-name="bar">
          <path data-name="dots.dot" d={`M ${x-12} 124.00813196981264c 0.09 -0.03 0.27 -0.06 0.39 -0.06c 0.96 0 1.74 0.78 1.74 1.71c 0 0.96 -0.78 1.74 -1.71 1.74c -0.96 0 -1.74 -0.78 -1.74 -1.71c 0 -0.78 0.54 -1.5 1.32 -1.68z`}></path>
          <path data-name="dots.dot" d={`M ${x-12} 130.38313196981264c 0.09 -0.03 0.27 -0.06 0.39 -0.06c 0.96 0 1.74 0.78 1.74 1.71c 0 0.96 -0.78 1.74 -1.71 1.74c -0.96 0 -1.74 -0.78 -1.74 -1.71c 0 -0.78 0.54 -1.5 1.32 -1.68z`}></path>
          <path d={`M ${x-8} 140.41L ${x-8} 116.94L ${x-8.6} 116.94L ${x-8.6} 140.41z`} data-name="bar"></path>
          <path d={`M ${x} 140.41L ${x} 116.94L ${x-4} 116.94L ${x-4} 140.41z`} data-name="bar"></path>
        </g>
    )
}
function Relax(x, noteInfo){
    var len = undefined
    var y = 132.71
    var ySub = 142.71
    var yySub = 140.71
    if(noteInfo.len==1){
        len = (<g key={`r-d-g-${x}`}>
            <path d={`M ${x-3} ${ySub-9}L ${x-3} ${ySub-9.5}L ${x+3} ${ySub-9.5}L ${x+3} ${ySub-9}z`} data-name="bar"></path>
            <path d={`M ${x-3} ${ySub-7}L ${x-3} ${ySub-7.5}L ${x+3} ${ySub-7.5}L ${x+3} ${ySub-7}z`} data-name="bar"></path>
            </g>
            )
    }else if(noteInfo.len==2){
        len = (<g key={`r-d-g-${x}`}>
            <path d={`M ${x-3} ${ySub-8}L ${x-3} ${ySub-8.5}L ${x+3} ${ySub-8.5}L ${x+3} ${ySub-8}z`} data-name="bar"></path>
            </g>
            )
    }
    return (
        <g key={`r-g-${x}`} className="abcjs-tabNumber abcjs-note abcjs-d0-125 abcjs-p4 abcjs-l0 abcjs-m0 abcjs-mm0 abcjs-v0 abcjs-n0" fill="currentColor" stroke="none" data-name="tabNumber" data-index="27">
          <path data-name="dots.dot" d={`M ${x} 125.00813196981264c 3 -0.03 3 -0.06 0.39 -0.06c 0.96 0 3.74 0.78 3.74 3.71c 0 0.96 -0.78 3.74 -3.71 3.74c -0.96 0 -3.74 -0.78 -3.74 -3.71c 0 -0.78 0.54 -3.5 3.32 -3.68z`}></path>
            {len}
        </g>
    )

}
function Note(x, noteInfo){
    var y = 144.71
    var ySub = 154.71
    var yySub = 152.71
    if(noteInfo.line == "1"){
        y = 144.71
    }else if (noteInfo.line == "2"){
        y = 132.71
        ySub = 142.71
        yySub = 140.71
    }else if (noteInfo.line == "3"){
        y = 120.71
        ySub = 130.71
        yySub = 128.71
    }
    var tech = undefined
    var len = undefined
    if(noteInfo.tech !== ""){
        switch(noteInfo.tech) {
            case "o":
                tech = (<g key={`n-dt-${x}`} >
                        <path d={`M ${noteInfo.preX} ${yySub-9}L ${noteInfo.preX} ${yySub-15}L ${noteInfo.preX+0.5} ${yySub-16}L ${noteInfo.preX+0.5} ${ySub-9}z`} data-name="bar"></path>
                        <path d={`M ${noteInfo.preX} ${yySub-15}L ${noteInfo.preX} ${yySub-16}L ${x-5} ${yySub-16}L ${x-5} ${yySub-15}z`} data-name="bar"></path>
                        </g>
                        )
                break
            case "s":
            case "sk":
            case "skui":
                tech = (<text stroke="none" font-size="8" font-style="normal" font-family="Arial" font-weight="normal" text-decoration="none" className="abcjs-tab-number" text-anchor="middle" x={x} y={ySub} cursor="default">
                            <tspan x={x}>ス</tspan>
                        </text>)
                break
            case "h":
            case "ha":
            case "hajiki":
                tech = (<text stroke="none" font-size="8" font-style="normal" font-family="Arial" font-weight="normal" text-decoration="none" className="abcjs-tab-number" text-anchor="middle" x={x} y={ySub} cursor="default">
                            <tspan x={x}>ハ</tspan>
                        </text>)
                break
            case "u":
            case "uchi":
                tech = (<text stroke="none" font-size="8" font-style="normal" font-family="Arial" font-weight="normal" text-decoration="none" className="abcjs-tab-number" text-anchor="middle" x={x} y={ySub} cursor="default">
                            <tspan x={x}>ウ</tspan>
                        </text>)
                break
            case "sr":
            case "suri":
                var tempX1 = noteInfo.preX
                var tempX2 = x
                var tempY = yySub - 15
                tech = (<g key={`n-dt-${x}`} >
                        <path d={`M ${tempX1} ${tempY-5} C ${tempX1+4.94} ${tempY-9} ${tempX2-4.94} ${tempY-9} ${tempX2} ${tempY-5} C ${tempX2-4.94} ${tempY-7} ${tempX1+4.94} ${tempY-7} ${tempX1} ${tempY-5} z`} data-name="tie"></path>
                        <text stroke="none" font-size="6" font-style="normal" font-family="Arial" font-weight="normal" text-decoration="none" className="abcjs-tab-number" text-anchor="middle" x={(tempX1+tempX2)/2} y={tempY-10} cursor="default">
                            <tspan x={(tempX1+tempX2)/2}>スリ</tspan>
                        </text>
                    </g>
                    )
                break
        }

    }
    if(noteInfo.len==1){
        len = (<g key={`n-d-${x}`} >
            <path d={`M ${x-3} ${ySub-9}L ${x-3} ${ySub-9.5}L ${x+3} ${ySub-9.5}L ${x+3} ${ySub-9}z`} data-name="bar"></path>
            <path d={`M ${x-3} ${ySub-7}L ${x-3} ${ySub-7.5}L ${x+3} ${ySub-7.5}L ${x+3} ${ySub-7}z`} data-name="bar"></path>
            </g>
            )
    }else if(noteInfo.len==2){
        len = (<g key={`n-d-${x}`} >
            <path d={`M ${x-3} ${ySub-8}L ${x-3} ${ySub-8.5}L ${x+3} ${ySub-8.5}L ${x+3} ${ySub-8}z`} data-name="bar"></path>
            </g>
            )
    }else if(noteInfo.len==0.5){
        len = (<g key={`n-d-${x}`} >
            <path d={`M ${x-3} ${ySub-9}L ${x-3} ${ySub-9.5}L ${x+3} ${ySub-9.5}L ${x+3} ${ySub-9}z`} data-name="bar"></path>
            <path d={`M ${x-3} ${ySub-7.5}L ${x-3} ${ySub-8}L ${x+3} ${ySub-8}L ${x+3} ${ySub-7.5}z`} data-name="bar"></path>
            <path d={`M ${x-3} ${ySub-6}L ${x-3} ${ySub-6.5}L ${x+3} ${ySub-6.5}L ${x+3} ${ySub-6}z`} data-name="bar"></path>
            </g>
            )
    }
    return (
        <g key={`n-${x}`} className="abcjs-tabNumber abcjs-note abcjs-d0-125 abcjs-p4 abcjs-l0 abcjs-m0 abcjs-mm0 abcjs-v0 abcjs-n0" fill="currentColor" stroke="none" data-name="tabNumber" data-index="27">
            <text stroke="none" font-size="15" font-style="normal" font-family="Arial" font-weight="normal" text-decoration="none" className="abcjs-tab-number" text-anchor="middle" x={x} y={y} cursor="default">
              <tspan x={x}>{noteInfo.note}</tspan>
            </text>
            {len}
            {tech}
        </g>
    )
}
function Notes(x, notesInfo){
    var rows = []
    var len = undefined
    var ySub = 130.71
    const {notes} = notesInfo
    for(var i = 0; i < notes.length; i++){
        var y = 144.71
        if(notes[i].line == "1"){
            y = 144.71
            if(ySub<154.71){
                ySub = 154.71
            }
        }else if (notes[i].line == "2"){
            y = 132.71
            if(ySub<142.71){
                ySub = 142.71
            }
        }else if (notes[i].line == "3"){
            y = 120.71
        }
        rows.push(
            <text stroke="none" font-size="15" font-style="normal" font-family="Arial" font-weight="normal" text-decoration="none" className="abcjs-tab-number" text-anchor="middle" x={x} y={y} cursor="default">
              <tspan x={x}>{notes[i].note}</tspan>
            </text>
        )
    }
    if(notesInfo.len==1){
        len = (<g key={`ns-d-${x}`} >
            <path d={`M ${x-3} ${ySub-9}L ${x-3} ${ySub-9.5}L ${x+3} ${ySub-9.5}L ${x+3} ${ySub-9}z`} data-name="bar"></path>
            <path d={`M ${x-3} ${ySub-7}L ${x-3} ${ySub-7.5}L ${x+3} ${ySub-7.5}L ${x+3} ${ySub-7}z`} data-name="bar"></path>
            </g>
            )
    }else if(notesInfo.len==2){
        len = (<g key={`ns-d-${x}`} >
            <path d={`M ${x-3} ${ySub-8}L ${x-3} ${ySub-8.5}L ${x+3} ${ySub-8.5}L ${x+3} ${ySub-8}z`} data-name="bar"></path>
            </g>
            )
    }
    return (
        <g key={`ns-${x}`} className="abcjs-tabNumber abcjs-note abcjs-d0-125 abcjs-p4 abcjs-l0 abcjs-m0 abcjs-mm0 abcjs-v0 abcjs-n0" fill="currentColor" stroke="none" data-name="tabNumber" data-index="27">
            {rows}
            {len}
        </g>
    )
}

function Notation({ props }) {
    var results = []
    const tuneInfo = TuneParser(props)
    for(var k = 0; k < tuneInfo.notes.length; k++){
        var notesString = tuneInfo.notes[k]
        notesString = notesString.trim()
        const rows = []
        const regexStr = /\|\:|\:\||\(\d\:[\d#]+([\:\w])*\)([1-9/])*|(\|\|)|(\|)|\[( *\(\d\:[\d#]+(\:\w)*\) *)+\]([1-9/])*/g
        var matches: Array<string> = notesString.match(regexStr) || []
        if(matches.length == 0){
            continue
        }
        if (notesString.startsWith("|:")){
            notesString = notesString.substring(2, notesString.length)
            rows.push(StartBar(0))
        }else if (notesString.startsWith("||")){
            notesString = notesString.substring(2, notesString.length)
            rows.push(DoubleBar(0))
        }else if (notesString.startsWith("|")){
            notesString = notesString.substring(1, notesString.length)
            rows.push(Bar(0))
        }else{
            rows.push(Bar(0))
        }
        if (notesString.endsWith(":|")){
            notesString = notesString.substring(0, notesString.length-2)
            rows.push(EndBar(700))
        }else if (notesString.endsWith("||")){
            notesString = notesString.substring(0, notesString.length-2)
            rows.push(DoubleBar(696.9))
        }else if (notesString.endsWith("|")){
            notesString = notesString.substring(0, notesString.length-1)
            rows.push(Bar(699.4))
        }else{
            rows.push(Bar(699.4))
        }
        const notesInfo = notesStringHandler(notesString)
        var totalLen = notesInfo.len
        if(totalLen < 30){
            totalLen = 30

        }
        var notePadding = ((697-5)/totalLen)
        var temp = 0
        var preX = 0
        var preTemp = 0
        for(var i = 0; i < notesInfo.notes.length; i ++){
            temp+=notesInfo.notes[i].len || 0
            var x = ((5+(temp*notePadding))+preTemp) / 2
            const noteType = notesInfo.notes[i].type
            if(noteType == "notes"){
                rows.push(Notes(x, notesInfo.notes[i]))
                continue
            }else if(noteType == "relax"){
                rows.push(Relax(x, notesInfo.notes[i]))
                continue
            }else if(noteType == "triplet"){
                x = preX
                console.log(notesInfo.notes[i])
                var startPre = notesInfo.notes[i].startPre || 0
                var start = notesInfo.notes[i].start || 0
                rows.push(Triplet(((5+(startPre*notePadding))+(5+(start*notePadding))) / 2, x, notesInfo.notes[i]))
                continue
            }
            const note = notesInfo.notes[i].note

            if (note == "||"){
                rows.push(DoubleBar(x))
            }else if (note == "|"){
                rows.push(Bar(x))
            }else if(note == "|:"){
                rows.push(StartBar(x))
            }else if(note == ":|"){
                rows.push(EndBar(x))
            }else{
                var data = {
                    ...notesInfo.notes[i],
                    preX: preX
                }
                rows.push(Note(x, data))
            }
            preX = x
            preTemp = 5+(temp*notePadding)
        }
        results.push(
            <svg key={`line-${k}`} xmlns="http://www.w3.org/2000/svg" className="abcjs-container" role="img" fill="#000" stroke="#000" 
            viewBox="0 85.9602222442627 700 77.34977531433105" preserveAspectRatio="xMinYMin meet" aria-label="Sheet Music for &quot;Example&quot; section 2">
                <g className="abcjs-staff abcjs-l0 abcjs-v1">
                <path key={`line-1-${k}`} d="M 0 116.46 L 700 116.46 L 700 117.16 L 0 117.16 z" stroke="none" fill="currentColor"></path>
                <path key={`line-2-${k}`} d="M 0 128.21 L 700 128.21 L 700 128.91 L 0 128.91 z" stroke="none" fill="currentColor"></path>
                <path key={`line-3-${k}`} d="M 0 139.71 L 700 139.71 L 700 140.41 L 0 140.41 z" stroke="none" fill="currentColor"></path>
                </g>
                {rows}
            </svg>
        )
    }

    return (<>{results}</>)
}

export {Notation, TuneTranslator}