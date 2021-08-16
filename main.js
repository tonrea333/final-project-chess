//Const query selectors for html IDs heading, startgame masterdiv, pieces, and gameboard

const boardGame = document.querySelector("#gameboard");
const chessPieces = document.querySelector("#gamepieces");
const headingChess = document.querySelector("#chessheading");
const buttonStart = document.querySelector("#StartGame");
const toprow1 = document.querySelector("#toprow")

//Function and event listner to build board and add pieces

buttonStart.addEventListener("click", startGame);

function startGame() {

    let blackAlphaRow8 = document.createElement("div");
    blackAlphaRow8.setAttribute("id", "8");
    boardGame.appendChild(blackAlphaRow8);

    let blackAlphaRow8a = document.createElement("div");
    blackAlphaRow8a.setAttribute("id", "a8");
    boardGame.appendChild(blackAlphaRow8a);

    let blackAlphaRow8b = document.createElement("div");
    blackAlphaRow8b.setAttribute("id", "b8");
    boardGame.appendChild(blackAlphaRow8b);

    let blackAlphaRow8c = document.createElement("div");
    blackAlphaRow8c.setAttribute("id", "c8");
    boardGame.appendChild(blackAlphaRow8c);

    let blackAlphaRow8d = document.createElement("div");
    blackAlphaRow8d.setAttribute("id", "d8");
    boardGame.appendChild(blackAlphaRow8d);

    let blackAlphaRow8e = document.createElement("div");
    blackAlphaRow8e.setAttribute("id", "e8");
    boardGame.appendChild(blackAlphaRow8e);

    let blackAlphaRow8f = document.createElement("div");
    blackAlphaRow8f.setAttribute("id", "f8");
    boardGame.appendChild(blackAlphaRow8f);

    let blackAlphaRow8g = document.createElement("div");
    blackAlphaRow8g.setAttribute("id", "g8");
    boardGame.appendChild(blackAlphaRow8g);

    let blackAlphaRow8h = document.createElement("div");
    blackAlphaRow8h.setAttribute("id", "h8");
    boardGame.appendChild(blackAlphaRow8h);
    
//==================================================================
let blackAlphaRow7 = document.createElement("div");
blackAlphaRow7.setAttribute("id", "7");
boardGame.appendChild(blackAlphaRow7);

let blackAlphaRow7a = document.createElement("div");
blackAlphaRow7a.setAttribute("id", "a7");
boardGame.appendChild(blackAlphaRow7a);

let blackAlphaRow7b = document.createElement("div");
blackAlphaRow7b.setAttribute("id", "b7");
boardGame.appendChild(blackAlphaRow7b);

let blackAlphaRow7c = document.createElement("div");
blackAlphaRow7c.setAttribute("id", "c7");
boardGame.appendChild(blackAlphaRow7c);

let blackAlphaRow7d = document.createElement("div");
blackAlphaRow7d.setAttribute("id", "d7");
boardGame.appendChild(blackAlphaRow7d);

let blackAlphaRow7e = document.createElement("div");
blackAlphaRow7e.setAttribute("id", "e7");
boardGame.appendChild(blackAlphaRow7e);

let blackAlphaRow7f = document.createElement("div");
blackAlphaRow7f.setAttribute("id", "f7");
boardGame.appendChild(blackAlphaRow7f);

let blackAlphaRow7g = document.createElement("div");
blackAlphaRow7g.setAttribute("id", "g7");
boardGame.appendChild(blackAlphaRow7g);

let blackAlphaRow7h = document.createElement("div");
blackAlphaRow7h.setAttribute("id", "h7");
boardGame.appendChild(blackAlphaRow7h);
//==================================================================
let blackAlphaRow6 = document.createElement("div");
    blackAlphaRow6.setAttribute("id", "6");
    boardGame.appendChild(blackAlphaRow6);

    let blackAlphaRow6a = document.createElement("div");
    blackAlphaRow6a.setAttribute("id", "a6");
    boardGame.appendChild(blackAlphaRow6a);

    let blackAlphaRow6b = document.createElement("div");
    blackAlphaRow6b.setAttribute("id", "b6");
    boardGame.appendChild(blackAlphaRow6b);

    let blackAlphaRow6c = document.createElement("div");
    blackAlphaRow6c.setAttribute("id", "c6");
    boardGame.appendChild(blackAlphaRow6c);

    let blackAlphaRow6d = document.createElement("div");
    blackAlphaRow6d.setAttribute("id", "d6");
    boardGame.appendChild(blackAlphaRow6d);

    let blackAlphaRow6e = document.createElement("div");
    blackAlphaRow6e.setAttribute("id", "e6");
    boardGame.appendChild(blackAlphaRow6e);

    let blackAlphaRow6f = document.createElement("div");
    blackAlphaRow6f.setAttribute("id", "f6");
    boardGame.appendChild(blackAlphaRow6f);

    let blackAlphaRow6g = document.createElement("div");
    blackAlphaRow6g.setAttribute("id", "g6");
    boardGame.appendChild(blackAlphaRow6g);

    let blackAlphaRow6h = document.createElement("div");
    blackAlphaRow6h.setAttribute("id", "h6");
    boardGame.appendChild(blackAlphaRow6h);
//=================================================================

//=================================================================
let blackAlphaRow5 = document.createElement("div");
    blackAlphaRow5.setAttribute("id", "5");
    boardGame.appendChild(blackAlphaRow5);

    let blackAlphaRow5a = document.createElement("div");
    blackAlphaRow5a.setAttribute("id", "a5");
    boardGame.appendChild(blackAlphaRow5a);

    let blackAlphaRow5b = document.createElement("div");
    blackAlphaRow5b.setAttribute("id", "b5");
    boardGame.appendChild(blackAlphaRow5b);

    let blackAlphaRow5c = document.createElement("div");
    blackAlphaRow5c.setAttribute("id", "c5");
    boardGame.appendChild(blackAlphaRow5c);

    let blackAlphaRow5d = document.createElement("div");
    blackAlphaRow5d.setAttribute("id", "d5");
    boardGame.appendChild(blackAlphaRow5d);

    let blackAlphaRow5e = document.createElement("div");
    blackAlphaRow5e.setAttribute("id", "e5");
    boardGame.appendChild(blackAlphaRow5e);

    let blackAlphaRow5f = document.createElement("div");
    blackAlphaRow5f.setAttribute("id", "f5");
    boardGame.appendChild(blackAlphaRow5f);

    let blackAlphaRow5g = document.createElement("div");
    blackAlphaRow5g.setAttribute("id", "g5");
    boardGame.appendChild(blackAlphaRow5g);

    let blackAlphaRow5h = document.createElement("div");
    blackAlphaRow5h.setAttribute("id", "h5");
    boardGame.appendChild(blackAlphaRow5h);
//================================================================
let blackAlphaRow4 = document.createElement("div");
    blackAlphaRow4.setAttribute("id", "4");
    boardGame.appendChild(blackAlphaRow4);

    let blackAlphaRow4a = document.createElement("div");
    blackAlphaRow4a.setAttribute("id", "a4");
    boardGame.appendChild(blackAlphaRow4a);

    let blackAlphaRow4b = document.createElement("div");
    blackAlphaRow4b.setAttribute("id", "b4");
    boardGame.appendChild(blackAlphaRow4b);

    let blackAlphaRow4c = document.createElement("div");
    blackAlphaRow4c.setAttribute("id", "c4");
    boardGame.appendChild(blackAlphaRow4c);

    let blackAlphaRow4d = document.createElement("div");
    blackAlphaRow4d.setAttribute("id", "d4");
    boardGame.appendChild(blackAlphaRow4d);

    let blackAlphaRow4e = document.createElement("div");
    blackAlphaRow4e.setAttribute("id", "e4");
    boardGame.appendChild(blackAlphaRow4e);

    let blackAlphaRow4f = document.createElement("div");
    blackAlphaRow4f.setAttribute("id", "f4");
    boardGame.appendChild(blackAlphaRow4f);

    let blackAlphaRow4g = document.createElement("div");
    blackAlphaRow4g.setAttribute("id", "g4");
    boardGame.appendChild(blackAlphaRow4g);

    let blackAlphaRow4h = document.createElement("div");
    blackAlphaRow4h.setAttribute("id", "h4");
    boardGame.appendChild(blackAlphaRow4h);
//=================================================================
let blackAlphaRow3 = document.createElement("div");
    blackAlphaRow3.setAttribute("id", "3");
    boardGame.appendChild(blackAlphaRow3);

    let blackAlphaRow3a = document.createElement("div");
    blackAlphaRow3a.setAttribute("id", "a3");
    boardGame.appendChild(blackAlphaRow3a);

    let blackAlphaRow3b = document.createElement("div");
    blackAlphaRow3b.setAttribute("id", "b3");
    boardGame.appendChild(blackAlphaRow3b);

    let blackAlphaRow3c = document.createElement("div");
    blackAlphaRow3c.setAttribute("id", "c3");
    boardGame.appendChild(blackAlphaRow3c);

    let blackAlphaRow3d = document.createElement("div");
    blackAlphaRow3d.setAttribute("id", "d3");
    boardGame.appendChild(blackAlphaRow3d);

    let blackAlphaRow3e = document.createElement("div");
    blackAlphaRow3e.setAttribute("id", "e3");
    boardGame.appendChild(blackAlphaRow3e);

    let blackAlphaRow3f = document.createElement("div");
    blackAlphaRow3f.setAttribute("id", "f3");
    boardGame.appendChild(blackAlphaRow3f);

    let blackAlphaRow3g = document.createElement("div");
    blackAlphaRow3g.setAttribute("id", "g3");
    boardGame.appendChild(blackAlphaRow3g);

    let blackAlphaRow3h = document.createElement("div");
    blackAlphaRow3h.setAttribute("id", "h3");
    boardGame.appendChild(blackAlphaRow3h);
//=================================================================
let blackAlphaRow2 = document.createElement("div");
    blackAlphaRow2.setAttribute("id", "2");
    boardGame.appendChild(blackAlphaRow2);

    let blackAlphaRow2a = document.createElement("div");
    blackAlphaRow2a.setAttribute("id", "a2");
    boardGame.appendChild(blackAlphaRow2a);

    let blackAlphaRow2b = document.createElement("div");
    blackAlphaRow2b.setAttribute("id", "b2");
    boardGame.appendChild(blackAlphaRow2b);

    let blackAlphaRow2c = document.createElement("div");
    blackAlphaRow2c.setAttribute("id", "c2");
    boardGame.appendChild(blackAlphaRow2c);

    let blackAlphaRow2d = document.createElement("div");
    blackAlphaRow2d.setAttribute("id", "d2");
    boardGame.appendChild(blackAlphaRow2d);

    let blackAlphaRow2e = document.createElement("div");
    blackAlphaRow2e.setAttribute("id", "e2");
    boardGame.appendChild(blackAlphaRow2e);

    let blackAlphaRow2f = document.createElement("div");
    blackAlphaRow2f.setAttribute("id", "f2");
    boardGame.appendChild(blackAlphaRow2f);

    let blackAlphaRow2g = document.createElement("div");
    blackAlphaRow2g.setAttribute("id", "g2");
    boardGame.appendChild(blackAlphaRow2g);

    let blackAlphaRow2h = document.createElement("div");
    blackAlphaRow2h.setAttribute("id", "h2");
    boardGame.appendChild(blackAlphaRow2h);
//=================================================================
let blackAlphaRow1 = document.createElement("div");
    blackAlphaRow1.setAttribute("id", "1");
    boardGame.appendChild(blackAlphaRow1);

    let blackAlphaRow1a = document.createElement("div");
    blackAlphaRow1a.setAttribute("id", "a1");
    boardGame.appendChild(blackAlphaRow1a);

    let blackAlphaRow1b = document.createElement("div");
    blackAlphaRow1b.setAttribute("id", "b1");
    boardGame.appendChild(blackAlphaRow1b);

    let blackAlphaRow1c = document.createElement("div");
    blackAlphaRow1c.setAttribute("id", "c1");
    boardGame.appendChild(blackAlphaRow1c);

    let blackAlphaRow1d = document.createElement("div");
    blackAlphaRow1d.setAttribute("id", "d1");
    boardGame.appendChild(blackAlphaRow1d);

    let blackAlphaRow1e = document.createElement("div");
    blackAlphaRow1e.setAttribute("id", "e1");
    boardGame.appendChild(blackAlphaRow1e);

    let blackAlphaRow1f = document.createElement("div");
    blackAlphaRow1f.setAttribute("id", "f1");
    boardGame.appendChild(blackAlphaRow1f);

    let blackAlphaRow1g = document.createElement("div");
    blackAlphaRow1g.setAttribute("id", "g1");
    boardGame.appendChild(blackAlphaRow1g);

    let blackAlphaRow1h = document.createElement("div");
    blackAlphaRow1h.setAttribute("id", "h1");
    boardGame.appendChild(blackAlphaRow1h);
//=================================================================
//=================================================================

//Alphabet row
    let blackAlphaRow1X = document.createElement("div");
    blackAlphaRow1X.setAttribute("id", "row1X");
    toprow1.appendChild(blackAlphaRow1X);

    let blackAlphaRow1H = document.createElement("div");
    blackAlphaRow1H.setAttribute("id", "row1H");
    toprow1.appendChild(blackAlphaRow1H);

    let blackAlphaRow1G = document.createElement("div");
    blackAlphaRow1G.setAttribute("id", "row1G");
    toprow1.appendChild(blackAlphaRow1G);

    let blackAlphaRow1F = document.createElement("div");
    blackAlphaRow1F.setAttribute("id", "row1F");
    toprow1.appendChild(blackAlphaRow1F);

    let blackAlphaRow1E = document.createElement("div");
    blackAlphaRow1E.setAttribute("id", "row1E");
    toprow1.appendChild(blackAlphaRow1E);

    let blackAlphaRow1D = document.createElement("div");
    blackAlphaRow1D.setAttribute("id", "row1D");
    toprow1.appendChild(blackAlphaRow1D);

    let blackAlphaRow1C = document.createElement("div");
    blackAlphaRow1C.setAttribute("id", "row1C");
    toprow1.appendChild(blackAlphaRow1C);

    let blackAlphaRow1B = document.createElement("div");
    blackAlphaRow1B.setAttribute("id", "row1B");
    toprow1.appendChild(blackAlphaRow1B);

    let blackAlphaRow1A = document.createElement("div");
    blackAlphaRow1A.setAttribute("id", "row1A");
    toprow1.appendChild(blackAlphaRow1A);

  

    //======================================================================
//===================================================================

//Add white pieces place holders

let pawnWa = document.createElement("div");
pawnWa.setAttribute("id", "pawnWa");
toprow1.appendChild(pawnWa);

let pawnWb = document.createElement("div");
pawnWb.setAttribute("id", "pawnWb");
toprow1.appendChild(pawnWb);

let pawnWc = document.createElement("div");
pawnWc.setAttribute("id", "pawnWc");
toprow1.appendChild(pawnWc);

let pawnWd = document.createElement("div");
pawnWd.setAttribute("id", "pawnWd");
toprow1.appendChild(pawnWd);

let pawnWe = document.createElement("div");
pawnWe.setAttribute("id", "pawnWe");
toprow1.appendChild(pawnWe);

let pawnWf= document.createElement("div");
pawnWf.setAttribute("id", "pawnWf");
toprow1.appendChild(pawnWf);

let pawnWg = document.createElement("div");
pawnWg.setAttribute("id", "pawnWg");
toprow1.appendChild(pawnWg);

let pawnWh = document.createElement("div");
pawnWh.setAttribute("id", "pawnWh");
toprowa.appendChild(pawnWh);
//=========
let rookieWa = document.createElement("div");
rookieWa.setAttribute("id", "rookieWa");
toprow1.appendChild(rookieWa);

let knightWb = document.createElement("div");
knightWb.setAttribute("id", "knightWb");
toprow1.appendChild(knightWb);

let bishopWc = document.createElement("div");
bishopWc.setAttribute("id", "bishopWc");
toprow1.appendChild(bishopWc);

let queenWd = document.createElement("div");
queenWd.setAttribute("id", "queenWd");
toprow1.appendChild(queenWd);

let kingWe = document.createElement("div");
kingWe.setAttribute("id", "kingWe");
toprow1.appendChild(kingWe);

let bishopWf = document.createElement("div");
bishopWf.setAttribute("id", "bishopWf");
toprow1.appendChild(bishopWf);

let knightWg = document.createElement("div");
knightWg.setAttribute("id", "knightWg");
toprow1.appendChild(knightWg);

let rookieWh = document.createElement("div");
rookieWh.setAttribute("id", "rookieWh");
toprow1.appendChild(rookieWh);
//=================================================
//add black pieces place holders

let pawnBa = document.createElement("div");
pawnBa.setAttribute("id", "pawnBa");
toprow1.appendChild(pawnBa);

let pawnBb = document.createElement("div");
pawnBb.setAttribute("id", "pawnBb");
toprow1.appendChild(pawnBb);

let pawnBc = document.createElement("div");
pawnBc.setAttribute("id", "pawnBc");
toprow1.appendChild(pawnBc);

let pawnBd = document.createElement("div");
pawnBd.setAttribute("id", "pawnBd");
toprow1.appendChild(pawnBd);

let pawnBe = document.createElement("div");
pawnBe.setAttribute("id", "pawnBe");
toprow1.appendChild(pawnBe);

let pawnBf= document.createElement("div");
pawnBf.setAttribute("id", "pawnBf");
toprow1.appendChild(pawnBf);

let pawnBg = document.createElement("div");
pawnBg.setAttribute("id", "pawnBg");
toprow1.appendChild(pawnBg);

let pawnBh = document.createElement("div");
pawnBh.setAttribute("id", "pawnBh");
toprowa.appendChild(pawnBh);
//=========
let rookieBa = document.createElement("div");
rookieBa.setAttribute("id", "rookieBa");
toprow1.appendChild(rookieBa);

let knightBb = document.createElement("div");
knightBb.setAttribute("id", "knightBb");
toprow1.appendChild(knightBb);

let bishopBc = document.createElement("div");
bishopBc.setAttribute("id", "bishopBc");
toprow1.appendChild(bishopBc);

let queenBd = document.createElement("div");
queenBd.setAttribute("id", "queenBd");
toprow1.appendChild(queenBd);

let kingBe = document.createElement("div");
kingBe.setAttribute("id", "kingBe");
toprow1.appendChild(kingBe);

let bishopBf = document.createElement("div");
bishopBf.setAttribute("id", "bishopBf");
toprow1.appendChild(bishopBf);

let knightBg = document.createElement("div");
knightBg.setAttribute("id", "knightBg");
toprow1.appendChild(knightBg);

let rookieBh = document.createElement("div");
rookieBh.setAttribute("id", "rookieBh");
toprow1.appendChild(rookieBh);

//==================================================


}
