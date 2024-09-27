let suaidade;
let corpo;
let gênero;
let título;
let simulação;
let ação;
let mplayer;
let jogos = {
  menor10:{
   simulação: "Stardew valley",
   ação:      "Minicraft",
   mplayer:   "Amongus"
 },
  entre10e14:{
    simulação: "Avakin Life",
    ação:      "Planta Vs Zoombie",
    mplayer:   "Roblox"
  },
  entre14e16:{
    simulação:  "The sims",
    ação:       "Fortinite",
    mplayer:    "league of legends"
  },
  entre16e18:{
    simulação:   "Plant Coast",
    ação:        "celeste",
    mplayer:     "Roct League"
},
  maior18:{
    simulação:    "Vida real",
    ação:         "carteira assinada",
    mplayer:      "ser sociavél" 
  }
};

let botao;

function setup() {
  createCanvas(850, 400).position(100,100);
  titulo ="Pacifico"
  corpo = "Nerko One"
  gênero = "Handjet"
  createSpan ("Qual sua idade? 🤷‍♀️").position(590,540).addClass("esconde");
  suaidade = createInput ("").position(600,590).addClass("esconde");
  simulação = createCheckbox ("Você gosta de jogos de simulação? 👾").position(100,600).addClass("esconde");
  ação = createCheckbox ("Você gosta de jogos de ação? 🐱‍👤").position(100,650).addClass("esconde");
  mplayer = createCheckbox ("Você gosta de jogos de multiplayer? 👨‍👨‍👧‍👦").position(100,700).addClass("esconde");
  
  botao = createButton ("aperte aqui👉👈").position(width/2,520);
  botao.mousePressed(bota);
  botao.addClass ("botao");
}

function bota(){
  selectAll ('.esconde').forEach((el)=>el.removeClass('esconde'));
  botao.hide();
}

function draw() {
  background("white");
  let idade = parseInt (suaidade.value());
  let checksimulação = simulação.checked();
  let checkação = ação.checked();
  let checkmplayer = mplayer.checked();
  let jogo = "insira suas preferências";
  if (suaidade.value()!==""){
    jogo = mostrajogo (idade, checksimulação, checkação, checkmplayer);
}
 fill ("lightblue");
  textAlign(CENTER, CENTER);
  textSize (20);
  text("MELHOR INDICADOR DE JOGOS ATUALIZADO SEM HACK",width/2, 30);
  textFont (gênero);
  
  fill ("blue");
  stroke ("black");
  textAlign (CENTER,CENTER);
  textSize (40);
  text (jogo, width/2, height/2);
  textFont (titulo)
}    
  function  mostrajogo (idade, checksimulação, checkação, checkmplayer)
{
 if(idade < 5){
return "Vai comer barro 👶" 
 }  else
   if(idade > 120){
    return "confirme se você é um robô🤖" 
 }
  if (idade >=5 && idade <10){
    if(checksimulação){
      return jogos["menor10"]["simulação"];
 }
    if(checkação){
      return jogos["menor10"]["ação"];
 }  
    if(checkmplayer){
      return jogos["menor10"]["mplayer"];
    }   
  }
  
  else if (idade >=10 && idade <14){
    if(checksimulação){
      return jogos["entre10e14"]["simulação"];
 }
    if(checkação){
      return jogos["entre10e14"]["ação"];
 }  
    if(checkmplayer){
      return jogos["entre10e14"]["mplayer"];
    }   
  } 
  
  else  if (idade >=14 && idade <16){
    if(checksimulação){
      return jogos["entre14e16"]["simulação"];
 }
    if(checkação){
      return jogos["entre14e16"]["ação"];
 }  
    if(checkmplayer){
      return jogos["entre14e16"]["mplayer"];
    }   
  }
  
   else if (idade >=16 && idade <18){
    if(checksimulação){
      return jogos["entre16e18"]["simulação"];
 }
    if(checkação){
      return jogos["entre16e18"]["ação"];
 }  
    if(checkmplayer){
      return jogos["entre16e18"]["mplayer"];
    }   
  }
  
  else  if (idade >=18){
    if(checksimulação){
      return jogos["maior18"]["simulação"];
 }
    if(checkação){
      return jogos["maior18"]["ação"];
 }  
    if(checkmplayer){
      return jogos["maior18"]["mplayer"];
    }   
 } return  "idade BB...😑";
}



