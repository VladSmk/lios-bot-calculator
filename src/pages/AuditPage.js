import React, {useEffect, useState} from 'react';
import './AuditPage.css';
import { explosives, sulfurPerOne, woodDoor, stoneDoor, ironDoor, steelDoor, titaniumDoor, garageDoor,
    woodWall, stoneWall, ironWall, steelWall, titaniumWall,
    woodBase, stoneBase, ironBase, steelBase, titaniumBase,
    vendingMachine, ironWindowBar, steelWindowBar, titaniumAlloyBarrier,
    ironFoldingLadder, steelFoldingLadder, titaniumAlloyFolding,
    shotgunTrap, automaticRifleDevice, autoCannon, rocketTurret, teslaTurret } from '../data/tableData';

export default function AuditPage({ selectedExplosives, selectedItems }) {
    const [sulfur, setSulfur] = useState(true);
    const [list, setList] = useState([]);
    let amountOfSulfur;

    useEffect(() => {
        amountOfSulfur = 0;
        selectedItems.forEach((item, index) => {
            // console.log("log1: item: " + item);
            const bestExp = findTheBestExplosives(item);
            // console.log("log2: findTheBestExplosives(item): " + findTheBestExplosives(item));
            const countOfTheBestExp = findTheNecessaryExplosives(item, bestExp);
            // console.log("log3: countOfTheBestExp(item): " + findTheNecessaryExplosives(item, bestExp));
            amountOfSulfur+=getNumberPart(item)*getSulfurByExplosive(bestExp)*countOfTheBestExp;
            // console.log("all: " + getNumberPart(item)*getSulfurByExplosive(bestExp)*countOfTheBestExp);
            // console.log("log4: getNumberPart(item): " + getNumberPart(item));
            // console.log("log5: getSulfurByExplosive(bestExp): " + getSulfurByExplosive(bestExp));
            // console.log("log6: amountOfSulfur: " + amountOfSulfur);
            // console.log("next");
            // console.log("next");
            // console.log("next");
            // console.log("next");
            setSulfur(amountOfSulfur);
            list[index] = item + ': ' + findTheNecessaryExplosives(item, bestExp)*getNumberPart(item) + ' ' + findTheBestExplosives(item);
        })
    }, []);


    const findTheBestExplosives = (item) => {
        const itemType = removeLastHyphenatedNumber(item);

        switch (itemType) {
            case 'wood-wall/ceiling':
                return findCheapestExplosive(woodWall);
            case 'wood-door':
                return findCheapestExplosive(woodDoor);
            case 'wood-base':
                return findCheapestExplosive(woodBase);
            case 'stone-door':
                return findCheapestExplosive(stoneDoor);
            case 'stone-wall/ceiling':
                return findCheapestExplosive(stoneWall);
            case 'stone-base':
                return findCheapestExplosive(stoneBase);
            case 'iron-door':
                return findCheapestExplosive(ironDoor);
            case 'iron-wall/ceiling':
                return findCheapestExplosive(ironWall);
            case 'iron-base':
                return findCheapestExplosive(ironBase);
            case 'iron-window bar':
                return findCheapestExplosive(ironWindowBar);
            case 'iron-folding ladder':
                return findCheapestExplosive(ironFoldingLadder);
            case 'steel-door':
                return findCheapestExplosive(steelDoor);
            case 'steel-wall/ceiling':
                return findCheapestExplosive(steelWall);
            case 'steel-base':
                return findCheapestExplosive(steelBase);
            case 'steel-window bar':
                return findCheapestExplosive(steelWindowBar);
            case 'steel-folding ladder':
                return findCheapestExplosive(steelFoldingLadder);
            case 'titanium-door':
                return findCheapestExplosive(titaniumDoor);
            case 'titanium-wall/ceiling':
                return findCheapestExplosive(titaniumWall);
            case 'titanium-base':
                return findCheapestExplosive(titaniumBase);
            case 'titanium-alloy folding':
                return findCheapestExplosive(titaniumAlloyFolding);
            case 'titanium-alloy barrier':
                return findCheapestExplosive(titaniumAlloyBarrier);
            case 'device-automatic rifle device':
                return findCheapestExplosive(automaticRifleDevice);
            case 'device-shotgun trap':
                return findCheapestExplosive(shotgunTrap);
            case 'device-garage door':
                return findCheapestExplosive(garageDoor);
            case 'device-vending machine':
                return findCheapestExplosive(vendingMachine);
            case 'device-auto cannon':
                return findCheapestExplosive(autoCannon);
            case 'device-rocket turret':
                return findCheapestExplosive(rocketTurret);
            case 'device-tesla turret':
                return findCheapestExplosive(teslaTurret);
            default:
                return null;
        }
    }

    const findTheNecessaryExplosives = (item, bestExp) => {
        const itemType = removeLastHyphenatedNumber(item);

        let list;

        switch (itemType) {
            case 'wood-wall/ceiling':
                list = woodWall;
                break;
            case 'wood-door':
                list = woodDoor;
                break;
            case 'wood-base':
                list = woodBase;
                break;
            case 'stone-door':
                list = stoneDoor;
                break;
            case 'stone-wall/ceiling':
                list = stoneWall;
                break;
            case 'stone-base':
                list = stoneBase;
                break;
            case 'iron-door':
                list = ironDoor;
                break;
            case 'iron-wall/ceiling':
                list = ironWall;
                break;
            case 'iron-base':
                list = ironBase;
                break;
            case 'iron-window bar':
                list = ironWindowBar;
                break;
            case 'iron-folding ladder':
                list = ironFoldingLadder;
                break;
            case 'steel-door':
                list = steelDoor;
                break;
            case 'steel-wall/ceiling':
                list = steelWall;
                break;
            case 'steel-base':
                list = steelBase;
                break;
            case 'steel-window bar':
                list = steelWindowBar;
                break;
            case 'steel-folding ladder':
                list = steelFoldingLadder;
                break;
            case 'titanium-door':
                list = titaniumDoor;
                break;
            case 'titanium-wall/ceiling':
                list = titaniumWall;
                break;
            case 'titanium-base':
                list = titaniumBase;
                break;
            case 'titanium-alloy folding':
                list = titaniumAlloyFolding;
                break;
            case 'titanium-alloy barrier':
                list = titaniumAlloyBarrier;
                break;
            case 'device-automatic rifle device':
                list = automaticRifleDevice;
                break;
            case 'device-shotgun trap':
                list = shotgunTrap;
                break;
            case 'device-garage door':
                list = garageDoor;
                break;
            case 'device-vending machine':
                list = vendingMachine;
                break;
            case 'device-auto cannon':
                list = autoCannon;
                break;
            case 'device-rocket turret':
                list = rocketTurret;
                break;
            case 'device-tesla turret':
                list = teslaTurret;
                break;
            default:
                return 0;
        }

        return list[explosives.indexOf(bestExp)];
    }




    function findCheapestExplosive(list) {
        const costs = sulfurPerOne.map((price, index) => price * list[index] * (selectedExplosives.includes(explosives[index]) ? 1 : 9999));
        const minCostIndex = costs.indexOf(Math.min(...costs));
        return explosives[minCostIndex];
    }

    function removeLastHyphenatedNumber(str) {
        const lastHyphenIndex = str.lastIndexOf('-');
        if (lastHyphenIndex === -1) return str;
        const segmentAfterHyphen = str.slice(lastHyphenIndex + 1);
        if (!isNaN(segmentAfterHyphen.trim())) {
            return str.slice(0, lastHyphenIndex);
        }
        return str;
    }

    function getNumberPart(str) {
        return str.split('-').pop();
    }

    function getSulfurByExplosive(name) {
        const index = explosives.indexOf(name);
        if (index !== -1) {
            return sulfurPerOne[index];
        } else {
            return null;
        }
    }


    return (
        <>
            <h2 className="audit-header">AuditPage</h2>
            <div className="audit-container">
                <ul className="audit-list">
                    {list.map((item, index) => (
                        <li key={index} className="audit-list-item">{item}</li>
                    ))}
                </ul>
            </div>
            <div className="sulfur-info">
                sulfur: {sulfur}
            </div>
        </>
    );
}
