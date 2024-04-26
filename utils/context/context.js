import { createContext, useState } from "react";

export const GitaContext = createContext(null);
export const GitaProvider = (props)=>{
    const [currentChapNum,setCurrentChapNum] = useState(1);
    const [currentShlokNum,setCurrentShlokNum] = useState(1);
    const [changeChapter,setChangeChapter] = useState(false);
    const [changeShlok,setChangeShlok] = useState(false);
    const [currentShlok,setCurrentShlok] = useState(null);
    const [allChapters,setAllChapters] = useState([]);

    return (
        <GitaContext.Provider value={
            {
            currentChapNum,
            setCurrentChapNum,
            currentShlokNum,
            setCurrentShlokNum,
            changeChapter,
            setChangeChapter,
            changeShlok,
            setChangeShlok,
            currentShlok,
            setCurrentShlok,
            allChapters,
            setAllChapters}} >
            {props.children}
        </GitaContext.Provider>
    )
} 