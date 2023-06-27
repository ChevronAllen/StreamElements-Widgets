/* /////
    Created by Cirnoble
*/ /////

// Data
let cardList = [
    {'img':'https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg', 'name':'0 THE FOOL','description':'Blissful carelessness,the power of ignorance.'},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg', 'name':'I THE MAGICIAN','description':'A sudden solution, as if by magic - but it may be just an illusion'},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg', 'name':'II THE HIGH PRIESTESS','description':'Secrets and hidden circumstances stand in the way and need to be understood.'},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg', 'name':'III THE EMPRESS','description':'The gentle power that still rules, almost unnoticed and rarely opposed.'},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg', 'name':'IV THE EMPEROR','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg', 'name':'V THE HIEROPHANT','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/3/3a/TheLovers.jpg', 'name':'VI THE LOVERS','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg', 'name':'VII THE CHARIOT','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg', 'name':'VIII STRENGTH','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg', 'name':'IX THE HERMIT','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg', 'name':'X WHEEL OF FORTUNE','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg', 'name':'XI JUSTICE','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg', 'name':'XII THE HANGED MAN','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg', 'name':'XIII DEATH','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg', 'name':'XIV TEMPERANCE','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg', 'name':'XV THE DEVIL','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg', 'name':'XVI THE TOWER','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg', 'name':'XVII THE STAR','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg', 'name':'XVIII THE MOON','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg', 'name':'XIX THE SUN','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg', 'name':'XX JUDGEMENT','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg', 'name':'XXI THE WORLD','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg', 'name':'I of Wands','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/0/0f/Wands02.jpg', 'name':'II of Wands','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/f/ff/Wands03.jpg', 'name':'III of Wands','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/a/a4/Wands04.jpg', 'name':'IV of Wands','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg', 'name':'V of Wands','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wands06.jpg', 'name':'VI of Wands','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/e/e4/Wands07.jpg', 'name':'VII of Wands','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/6/6b/Wands08.jpg', 'name':'VIII of Wands','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/4/4d/Tarot_Nine_of_Wands.jpg', 'name':'IX of Wands','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/0/0b/Wands10.jpg', 'name':'X of Wands','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/6/6a/Wands11.jpg', 'name':'Page of Wands','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/1/16/Wands12.jpg', 'name':'Knight of Wands','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/0/0d/Wands13.jpg', 'name':'Queen of Wands','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/c/ce/Wands14.jpg', 'name':'King of Wands','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/f/fd/Pents01.jpg', 'name':'I of Pentacles','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/9/9f/Pents02.jpg', 'name':'II of Pentacles','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/4/42/Pents03.jpg', 'name':'III of Pentacles','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/3/35/Pents04.jpg', 'name':'IV of Pentacles','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/9/96/Pents05.jpg', 'name':'V of Pentacles','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/a/a6/Pents06.jpg', 'name':'VI of Pentacles','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/6/6a/Pents07.jpg', 'name':'VII of Pentacles','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/4/49/Pents08.jpg', 'name':'VIII of Pentacles','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/f/f0/Pents09.jpg', 'name':'IX of Pentacles','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/4/42/Pents10.jpg', 'name':'X of Pentacles','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/e/ec/Pents11.jpg', 'name':'Page of Pentacles','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/d/d5/Pents12.jpg', 'name':'Knight of Pentacles','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/8/88/Pents13.jpg', 'name':'Queen of Pentacles','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/1/1c/Pents14.jpg', 'name':'King of Pentacles','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg', 'name':'I of Cups','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/f/f8/Cups02.jpg', 'name':'II of Cups','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/7/7a/Cups03.jpg', 'name':'III of Cups','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/3/35/Cups04.jpg', 'name':'IV of Cups','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/d/d7/Cups05.jpg', 'name':'V of Cups','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/1/17/Cups06.jpg', 'name':'VI of Cups','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/a/ae/Cups07.jpg', 'name':'VII of Cups','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/6/60/Cups08.jpg', 'name':'VIII of Cups','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/2/24/Cups09.jpg', 'name':'IX of Cups','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/8/84/Cups10.jpg', 'name':'X of Cups','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/a/ad/Cups11.jpg', 'name':'Page of Cups','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/f/fa/Cups12.jpg', 'name':'Knight of Cups','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/6/62/Cups13.jpg', 'name':'Queen of Cups','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/0/04/Cups14.jpg', 'name':'King of Cups','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg', 'name':'I of Swords','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/9/9e/Swords02.jpg', 'name':'II of Swords','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/0/02/Swords03.jpg', 'name':'III of Swords','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/b/bf/Swords04.jpg', 'name':'IV of Swords','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/2/23/Swords05.jpg', 'name':'V of Swords','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/2/29/Swords06.jpg', 'name':'VI of Swords','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/3/34/Swords07.jpg', 'name':'VII of Swords','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/a/a7/Swords08.jpg', 'name':'VIII of Swords','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/2/2f/Swords09.jpg', 'name':'IX of Swords','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords10.jpg', 'name':'X of Swords','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/4/4c/Swords11.jpg', 'name':'Page of Swords','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/b/b0/Swords12.jpg', 'name':'Knight of Swords','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords13.jpg', 'name':'Queen of Swords','description':''},
    {'img':'https://upload.wikimedia.org/wikipedia/commons/3/33/Swords14.jpg', 'name':'King of Swords','description':''},
]
let cardIndex = 0,
    cardName = "",
    cardDescription = "",
    cardImageURL = "";

// Constants
let deckSize = 78;
let majourArcanaLength = 22;
let nodeRoot = document.getElementById("main-container");
// Settings
let fieldData;
let amountToDraw = 1,
    reverseAllowed = false, 
    includeMinorArcana = false,
    reversedProbability = 0.5,
    canUprightFlair = true,
    canReverseFlair = true,
    cardDelay=[0,0,0],
    rollTriggerEvent = undefined;

//	Working Variables
let cardCount;
let drawnCards = [];


function setCard(index){  
 	var nodeImage = document.getElementById("card-image"), 
        nodeTitle = document.getElementById("card-title"), 
        nodeDescription = document.getElementById("card-description");
    	
  
    nodeRoot.classList.add('revealNode');
    nodeImage.src = cardList[index]['img'];
    nodeTitle.innerHTML = cardList[index]['name'];
    nodeDescription.innerHTML = cardList[index]['description'];
}

function initialize()
{
  amountToDraw = parseInt(fieldData['NumCardsToDraw']) | 0;
  reverseAllowed = fieldData['allowReversedCards'];
  reversedProbability = parseInt( fieldData['reversedProbability'])/100.0;
   console.log(`Reverse odds = ${reversedProbability}`);
  includeMinorArcana = fieldData['allowMinorArcana'];
  cardDelay = [
    			parseFloat( fieldData['CardAppearanceDelay1']) | 1,
  				parseFloat( fieldData['CardAppearanceDelay2']) | 1,
  				parseFloat( fieldData['CardAppearanceDelay3']) | 1
  			];
  
  deckSize = (includeMinorArcana) ? cardList.length:majourArcanaLength; 
  canUprightFlair = !!fieldData['showUprightFlair'];
  canReverseFlair = !!fieldData['showReversedFlair'];
}


function drawCards()
{  
  for(var i = 0; i < amountToDraw; i++)
  {
    var val = Math.floor(Math.random()*deckSize);
    while(drawnCards.includes(val))
    {
      val = Math.floor(Math.random()*deckSize);
    }
    drawnCards.push(val);
    console.log(val);
    var node = addCard(
                        cardList[val]['name'],
                        cardList[val]['img'] ,
                        cardList[val]['description'] )
    node.classList.add(`card-${i+1}`);
    nodeRoot.appendChild(node);
  }  
}

function addCard(cardTitle, cardImgURL,cardDescription)
{
  var tCardNode = document.createElement('div');
  var tTitleNode = document.createElement('span');
  var tImgNode = document.createElement('img');
  var tDescNode = document.createElement('span');
  
  tCardNode.appendChild(tTitleNode);
  tCardNode.appendChild(tImgNode);
  tCardNode.appendChild(tDescNode);  
  tCardNode.classList.add("card-container");
  
  tTitleNode.classList.add("title");
  tTitleNode.innerHTML = cardTitle;
  tImgNode.setAttribute("src",cardImgURL);
  tDescNode.classList.add("description");
  tDescNode.innerHTML = cardDescription;  
  
  if(reverseAllowed)
  {
    var reverseRoll = Math.random();
    console.log(`${cardTitle} Reverse roll = ${reverseRoll}. Against ${reversedProbability} `);
    if(reverseRoll < reversedProbability)
    {
      if(canReverseFlair){
        tImgNode.classList.add("reverse");
      }
    }else{
      if(canUprightFlair){
        tImgNode.classList.add("upright");
      }
    }
  }
  tCardNode.classList.add("revealNode");
  return tCardNode;
}



window.addEventListener('onEventReceived', function (obj) {
    
});

window.addEventListener('onWidgetLoad', function (obj) {
  fieldData = obj.detail.fieldData;
  initialize();
  drawCards();
});


