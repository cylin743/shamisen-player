"use client"

function removeParentheses(str: string): string {
    return str.replace("(", "").replace(")", "")
}

function TuneParser(source: any){
    const lines = source.split('\n')
    var title = ""
    var key = ""
    var speed = ""
    var defaultNoteLength = ""
    var timeSignature = ""
    var tune = ""
    var notes = []
    for(var i=0; i<lines.length; i++){
      if (lines[i].toLowerCase().startsWith("t:")){
        title = lines[i].substring(2)
      } else if (lines[i].toLowerCase().startsWith("k:")){
        key = lines[i].substring(2)
      }else if (lines[i].toLowerCase().startsWith("q:")){
        speed = lines[i].substring(2)
      } else if (lines[i].toLowerCase().startsWith("m:")){
        timeSignature = lines[i].substring(2)
      } else if (lines[i].toLowerCase().startsWith("l:")){
        defaultNoteLength = lines[i].substring(2)
      } else if (lines[i].toLowerCase().startsWith("r:")){
        tune = lines[i].substring(2)
      } else {
        notes.push(lines[i])
      }
    }
    return {
      title,
      key,
      speed,
      defaultNoteLength,
      tune,
      timeSignature,
      notes
    }
}

function cgcTransformer(note: string){
    const regexStr = /\(\d\:[\d#]+([\:\w])*\)/g
    const matches: Array<string> = note.match(regexStr) || []
    if(matches.length == 0){
        return note
    }
    var result = ""
    for(var i=0; i < matches.length; i++){
        const temp = removeParentheses(matches[i]).split(":")
        if (temp.length < 2){
            continue
        }
        const k = `${temp[0]}:${temp[1]}`
        switch(k){
            case "1:0":
                result += "C,"
                break
            case "1:1":
                result += "^C,"
                break
            case "1:2":
                result += "D,"
                break
            case "1:3":
                result += "^D,"
                break
            case "1:#":
                result += "E,"
                break
            case "1:4":
                result += "F,"
                break
            case "1:5":
                result += "^F,"
                break
            case "1:6":
            case "2:0":
                result += "G,"
                break
            case "1:7":
            case "2:1":
                result += "^G,"
                break
            case "1:8":
            case "2:2":
                result += "A,"
                break
            case "1:9":
            case "2:3":
                result += "^A,"
                break
            case "1:b":
            case "2:#":
                result += "B,"
                break
            case "1:10":
            case "2:4":
            case "3:0":
                result += "C"
                break
            case "1:11":
            case "2:5":
            case "3:1":
                result += "^C"
                break
            case "1:12":
            case "2:6":
            case "3:2":
                result += "D"
                break
            case "1:13":
            case "2:7":
            case "3:3":
                result += "^D"
                break
            case "1:1#":
            case "2:8":
            case "3:#":
                result += "E"
                break
            case "1:14":
            case "2:9":
            case "3:4":
                result += "F"
                break
            case "1:15":
            case "2:b":
            case "3:5":
                result += "^F"
                break
            case "1:16":
            case "2:10":
            case "3:6":
                result += "G"
                break
            case "1:17":
            case "2:11":
            case "3:7":
                result += "_A"
                break
            case "1:18":
            case "2:12":
            case "3:8":
                result += "A"
                break
            case "1:19":
            case "2:13":
            case "3:9":
                result += "^A"
                break
            case "1:1b":
            case "2:1#":
            case "3:b":
                result += "B"
                break
            case "1:20":
            case "2:14":
            case "3:10":
                result += "c"
                break
            case "2:15":
            case "3:11":
                result += "^c"
                break
            case "2:16":
            case "3:12":
                result += "d"
                break
            case "2:17":
            case "3:13":
                result += "^d"
                break
            case "2:18":
            case "3:1#":
                result += "e"
                break
            case "2:19":
            case "3:14":
                result += "f"
                break
            case "2:1b":
            case "3:15":
                result += "^f"
                break
            case "2:20":
            case "3:16":
                result += "g"
                break
            case "3:17":
                result += "^g"
                break
            case "3:18":
                result += "a"
                break
            case "3:19":
                result += "^a"
                break
            case "3:1b":
                result += "b"
                break
            case "3:20":
                result += "c'"
                break
        }
    }
    return result

}
function cfaTransformer(note: string){
    const regexStr = /\(\d\:[\d#]+([\:\w])*\)/g
    const matches: Array<string> = note.match(regexStr) || []
    if(matches.length == 0){
        return note
    }
    var result = ""
    for(var i=0; i < matches.length; i++){
        const temp = removeParentheses(matches[i]).split(":")
        if (temp.length < 2){
            continue
        }
        const k = `${temp[0]}:${temp[1]}`
        switch(k){
            case "1:0":
                result += "C,"
                break
            case "1:1":
                result += "^C,"
                break
            case "1:2":
                result += "D,"
                break
            case "1:3":
                result += "^D,"
                break
            case "1:#":
                result += "E,"
                break
            case "1:4":
            case "2:0":
                result += "F,"
                break
            case "1:5":
            case "2:1":
                result += "^F,"
                break
            case "1:6":
            case "2:2":
                result += "G,"
                break
            case "1:7":
            case "2:3":
                result += "^G,"
                break
            case "1:8":
            case "2:#":
                result += "A,"
                break
            case "1:9":
            case "2:4":
            case "3:0":
                result += "^A,"
                break
            case "1:b":
            case "2:5":
            case "3:1":
                result += "B,"
                break
            case "1:10":
            case "2:6":
            case "3:2":
                result += "C"
                break
            case "1:11":
            case "2:7":
            case "3:3":
                result += "^C"
                break
            case "1:12":
            case "2:8":
            case "3:#":
                result += "D"
                break
            case "1:13":
            case "2:9":
            case "3:4":
                result += "^D"
                break
            case "1:1#":
            case "2:b":
            case "3:5":
                result += "E"
                break
            case "1:14":
            case "2:10":
            case "3:6":
                result += "F"
                break
            case "1:15":
            case "2:11":
            case "3:7":
                result += "^F"
                break
            case "1:16":
            case "2:12":
            case "3:8":
                result += "G"
                break
            case "1:17":
            case "2:13":
            case "3:9":
                result += "_A"
                break
            case "1:18":
            case "2:1#":
            case "3:b":
                result += "A"
                break
            case "1:19":
            case "2:14":
            case "3:10":
                result += "^A"
                break
            case "1:1b":
            case "2:15":
            case "3:11":
                result += "B"
                break
            case "1:20":
            case "2:16":
            case "3:12":
                result += "c"
                break
            case "2:17":
            case "3:13":
                result += "^c"
                break
            case "2:18":
            case "3:1#":
                result += "d"
                break
            case "2:19":
            case "3:14":
                result += "^d"
                break
            case "2:1b":
            case "3:15":
                result += "e"
                break
            case "2:20":
            case "3:16":
                result += "f"
                break
            case "3:17":
                result += "^f"
                break
            case "3:18":
                result += "g"
                break
            case "3:19":
                result += "^g"
                break
            case "3:1b":
                result += "a"
                break
            case "3:20":
                result += "^a"
                break
        }
    }
    return result

}
function cfcTransformer(note: string){
    const regexStr = /\(\d\:[\d#]+([\:\w])*\)/g
    const matches: Array<string> = note.match(regexStr) || []
    if(matches.length == 0){
        return note
    }
    var result = ""
    for(var i=0; i < matches.length; i++){
        const temp = removeParentheses(matches[i]).split(":")
        if (temp.length < 2){
            continue
        }
        const k = `${temp[0]}:${temp[1]}`
        switch(k){
            case "1:0":
                result += "C,"
                break
            case "1:1":
                result += "^C,"
                break
            case "1:2":
                result += "D,"
                break
            case "1:3":
                result += "^D,"
                break
            case "1:#":
                result += "E,"
                break
            case "1:4":
            case "2:0":
                result += "F,"
                break
            case "1:5":
            case "2:1":
                result += "^F,"
                break
            case "1:6":
            case "2:2":
                result += "G,"
                break
            case "1:7":
            case "2:3":
                result += "^G,"
                break
            case "1:8":
            case "2:#":
                result += "A,"
                break
            case "1:9":
            case "2:4":
                result += "^A,"
                break
            case "1:b":
            case "2:5":
                result += "B,"
                break
            case "1:10":
            case "2:6":
            case "3:0":
                result += "C"
                break
            case "1:11":
            case "2:7":
            case "3:1":
                result += "^C"
                break
            case "1:12":
            case "2:8":
            case "3:2":
                result += "D"
                break
            case "1:13":
            case "2:9":
            case "3:3":
                result += "^D"
                break
            case "1:1#":
            case "2:b":
            case "3:#":
                result += "E"
                break
            case "1:14":
            case "2:10":
            case "3:4":
                result += "F"
                break
            case "1:15":
            case "2:11":
            case "3:5":
                result += "^F"
                break
            case "1:16":
            case "2:12":
            case "3:6":
                result += "G"
                break
            case "1:17":
            case "2:13":
            case "3:7":
                result += "_A"
                break
            case "1:18":
            case "2:1#":
            case "3:8":
                result += "A"
                break
            case "1:19":
            case "2:14":
            case "3:9":
                result += "^A"
                break
            case "1:1b":
            case "2:15":
            case "3:b":
                result += "B"
                break
            case "1:20":
            case "2:16":
            case "3:10":
                result += "c"
                break
            case "2:17":
            case "3:11":
                result += "^c"
                break
            case "2:18":
            case "3:12":
                result += "d"
                break
            case "2:19":
            case "3:13":
                result += "^d"
                break
            case "2:1b":
            case "3:1#":
                result += "e"
                break
            case "2:20":
            case "3:14":
                result += "f"
                break
            case "3:15":
                result += "^f"
                break
            case "3:16":
                result += "g"
                break
            case "3:17":
                result += "^g"
                break
            case "3:18":
                result += "a"
                break
            case "3:19":
                result += "^a"
                break
            case "3:1b":
                result += "b"
                break
            case "3:20":
                result += "c'"
                break
        }
    }
    return result

}
function transformer(key : string, note: string){
    switch(key.toUpperCase()){
        case "CFA#":
            return cfaTransformer(note)
        case "CGC":
            return cgcTransformer(note)
        case "CFC":
        default:
            return cfcTransformer(note)
    }

}
function TuneTranslator(tune: string) {
    var tuneInfo = TuneParser(tune)
    const {key} = tuneInfo
    var result = tune.replace(`K:${key}`, "K:C").replace(`k:${key}`, "K:C")
    var regexStr = /\(\d\:[\d#]+([\:\w])*\)/g
    var matches: Array<string> = tune.match(regexStr) || []
    for(var i = 0; i < matches.length; i++){
        result = result.replace(matches[i], transformer(key, matches[i]))
    }

    return result
}
export {TuneParser, TuneTranslator}