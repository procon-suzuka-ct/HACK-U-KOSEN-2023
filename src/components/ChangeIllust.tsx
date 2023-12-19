import React from 'react';
import { useState } from 'react';

export const changeIllust = () => {
    const[normal, setNormal] = useState("../assets/cakes/normal.png");
    const[cross, setCross] = useState("../assets/cakes/cross.png");
    const[side, setSide] = useState("../assets/cakes/side.png");

    const changeNormal = (nor: string) => {
        switch(nor){
            case "white": setNormal(normal = "../assets/cakes/normal.png"); break;
            case "brown": setNormal(normal = "../assets/cakes/normal_2.png"); break;
            case "pink" : setNormal(normal = "../assets/cakes/normal_3.png"); break;
        }
    };
    
};
