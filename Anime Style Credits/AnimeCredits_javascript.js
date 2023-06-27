let EVENT_BLOCK_SIZE = 5;
const POSITIONS = [
    "position-top-right-1", "position-top-left-1", "position-bottom-right-1", "position-bottom-left-1",
    "position-top-right-2", "position-top-left-2", "position-bottom-right-2", "position-bottom-left-2",
    "position-top-right-3", "position-top-left-3", "position-bottom-right-3", "position-bottom-left-3"
];

let session = {};
let totalEvents = 0;
let fSize = 0, sSize = 0, cSize = 0, tSize = 0, mSize = 0, pSize = 0;
let blockIndex = 0, blockCount = 0;
let currentBlock = null;
let fBlock = null, sBlock = null, tBlock = null;
let followers = [], subscribers = [], donators = [], mods = [], patreons = [], artists = [];
let minTip = 0, minCheer = 0;

let intDelay, titleDuration, duration, blockFadeTime, blockHangTime;
let titleCss, block;
let fieldData = [];

function getFollowers()
{
    let count = session['follower-session'].count | 0;  
    for (let i = 0; i < count; i++) 
    {
    	if(session['follower-recent'][i] !== undefined)
        {
    		followers.push(session['follower-recent'][i]);
        }
  	} 
}

function getSubscribers()
{
    let count = session['subscriber-session'].count | 0;
  	for (let i = 0; i < count; i++) 
    {
     	if(session['subscriber-recent'][i] !== undefined)
        {
          subscribers.push(session['subscriber-recent'][i]);
        }
    }
}

function includesIgnoreCase(arr, str)
{
    if(arr == undefined || str == undefined){return false;}          
    found = false;
    for( let i = 0 ; i < arr.length ; i++)
    {
        first = arr[i].toLowerCase();
        second = str.toLowerCase();
        if(first === second)
        { 
            found = true;
        }  
    }
    return found;
}

function getTippers()
{
  	
    
    let cCount = session['cheer-recent'].length;
    let tCount = session['tip-recent'].length;
  	let cSum = session['cheer-session'].amount;
  	let tSum = session['tip-session'].amount;
  
  	console.log(`${cCount} cheers found. ${tCount} tips found`);
  
    // Tips       
	for( i = 0; i < tCount; i++)
    {
      	if(!fieldData['enabletip']) { break;}
      	if(tSum <= 0) { break;}
        if(session['tip-recent'][i] == undefined){ continue;}
      
      	if( !includesIgnoreCase(donators, session['tip-recent'][i].name) && 
            session['tip-recent'][i].amount >= minTip)
        {
          	tSum = tSum - session['tip-recent'][i].amount;
          	if(tSum<0)
            {
              continue;
            }
			donators.push(session['tip-recent'][i].name);
          	console.log(tSum);
        }
    }
  
  	// Cheers
  	for( i = 0; i < cCount; i++)
    {
      	if(!fieldData['enablecheer']) { break;}
      	if(cSum <= 0) { break;}
        if(session['cheer-recent'][i] == undefined){ continue; }
      
      	if(!includesIgnoreCase(donators, session['cheer-recent'][i].name) && 
            session['cheer-recent'][i].amount >= minCheer)
        {
          	cSum = cSum - session['cheer-recent'][i].amount;
          	if(cSum<0)
            {
              continue;
            }
			donators.push( session['cheer-recent'][i].name);
          	
        }
    }      

}


window.addEventListener('onWidgetLoad', function (obj) {
    const recents = obj.detail.recents;
    session = obj.detail.session.data;
    if (typeof session['follower-session'] === "undefined") session['follower-session'] = { count: 0 };
    if (typeof session['subscriber-session'] === "undefined") session['subscriber-session'] = {count: 0};
    if (typeof session['cheer-session'] === "undefined") session['cheer-session'] = { amount: 0 };
    if (typeof session['tip-count'] === "undefined") session['tip-count'] = { count: 0 };

    fieldData = obj.detail.fieldData;
    userCurrency = obj.detail.currency;

    //console.log(obj.detail.session);
    //console.log(recents);

	EVENT_BLOCK_SIZE = parseInt(fieldData["listSize"]) | 0;
    initDelay = parseInt(fieldData["delay"]) | 0;
    titleDuration = parseInt(fieldData["titleDuration"]) | 0;
    mods = fieldData["modCredits"].split(',');
    patreons = fieldData["patreonCredits"].split(',');
    artists = fieldData["customCredits"].split(',');
  	
  	minCheer =  parseInt(fieldData["cheerMinimum"]) ;
	minTip = parseInt(fieldData["tipMinimum"]);
  
  	console.log(minCheer);
  
    getFollowers();
    getSubscribers();
    getTippers();

    if (fieldData['enablefollower'])
    {
      	followers.forEach(item => addEvent('follower', item['name']));
    }
    if (fieldData['enablesubscriber'])
    {
      	subscribers.forEach((item) => {
          addEvent('subscriber', item.name);
        });
    }
 
    if (fieldData['enablecheer'] || fieldData['enabletip'])
    {
      	donators.forEach((item) => {  
          addEvent('donators', item);          
        });
    }

  	if (fieldData['enablecustom']) {
        blockCount += 1;
        $("#app").append(`<div id="block-${blockCount}" class="block position-special special-block"> <label>{{customCreditsHeader}}</label> </div>`);
        for (index in artists) {
            if (artists[index].trim().length == 0) continue;
            totalEvents += 1;
            $(`#block-${blockCount}`).append(`<div id="event-${totalEvents}">${artists[index].trim()}</div>`);
        }
    }

    if (fieldData['enablemods'])
      	console.log(mods);
        processGroup('mods', mods);
    if (fieldData['enablepatreon'])
        processGroup('patreons', patreons);


    duration = parseInt(fieldData['duration']) | 0;
    blockFadeTime = Math.min(duration / blockCount * 0.2, 1.5);
    blockHangTime = Math.max(0.1, (duration / blockCount) - (blockFadeTime * 2));
    console.log(`duration: ${duration}, fadeTime: ${blockFadeTime}, displayTime: ${blockHangTime}`);


    $(`#title`).delay(titleDuration * 1000).animate({ "opacity": 0 }, blockFadeTime * 1000, "linear");

    animateNext();

});

function processGroup(type, arr) {
    for (index in arr) {
        addEvent(type, arr[index]);
    }
}

function addEvent(type, name) {
  //console.log(`${type} - ${name}`);
    if ((name|"").length == 0) {
        return;
    }

    totalEvents += 1;

    if (type === 'follower') {

        if (fSize >= EVENT_BLOCK_SIZE) {
            fSize = 0;
        }

        if (fSize == 0) {
            blockCount += 1;
            $("#app").append(`<div id="block-${blockCount}" class="block"> <label>{{followLabel}}</label> </div>`);
            fBlock = $(`#block-${blockCount}`);
            fBlock.addClass(POSITIONS[Math.floor(POSITIONS.length * Math.random())]);
        }
        fBlock.append(`<div id="event-${totalEvents}">${name}</div>`);
        fSize += 1;
    } else if (type === 'subscriber') {
        if (sSize >= EVENT_BLOCK_SIZE) {
            sSize = 0;
        }

        if (sSize == 0) {
            blockCount += 1;
            $("#app").append(`<div id="block-${blockCount}" class="block">  <label>{{subLabel}}</label> </div>`);
            sBlock = $(`#block-${blockCount}`);
            sBlock.addClass(POSITIONS[Math.floor(POSITIONS.length * Math.random())]);
        }
        sBlock.append(`<div id="event-${totalEvents}">${name}</div>`);
        sSize += 1;
    } else if (type === 'donators') {
        if (tSize >= EVENT_BLOCK_SIZE) {
            tSize = 0;
        }

        if (tSize == 0) {
            blockCount += 1;
            $("#app").append(`<div id="block-${blockCount}" class="block"> <label>{{donationLabel}}</label></div>`);
            tBlock = $(`#block-${blockCount}`);
            tBlock.addClass(POSITIONS[Math.floor(POSITIONS.length * Math.random())]);
        }
        tBlock.append(`<div id="event-${totalEvents}">${name}</div>`);
        tSize += 1;
    } else if (type === 'mods') {
        //mSum += 1;
        if (mSize >= EVENT_BLOCK_SIZE) {
            mSize = 0;
        }

        if (mSize == 0) {
            blockCount += 1;
            $("#app").append(`<div id="block-${blockCount}" class="block"> <label>{{modsLabel}}</label></div>`);
            mBlock = $(`#block-${blockCount}`);
            mBlock.addClass(POSITIONS[Math.floor(POSITIONS.length * Math.random())]);
        }
        mBlock.append(`<div id="event-${totalEvents}">${name}</div>`);
        mSize += 1;
    } else if (type === 'patreons') {
        //pSum += 1;
        if (pSize >= EVENT_BLOCK_SIZE) {
            pSize = 0;
        }

        if (pSize == 0) {
            blockCount += 1;
            $("#app").append(`<div id="block-${blockCount}" class="block"><label>{{patreonLabel}}</label></div>`);
            pBlock = $(`#block-${blockCount}`);
            pBlock.addClass(POSITIONS[Math.floor(POSITIONS.length * Math.random())]);
        }
        pBlock.append(`<div id="event-${totalEvents}">${name}</div>`);
        pSize += 1;
    }
}

function animateNext() {
    blockIndex += 1;
    if (blockIndex > blockCount) {
        return;
    }
    fadeIn();
}
function fadeIn() {
    if (blockIndex <= 1) {
        $(`#block-${blockIndex}`).delay(initDelay * 1000).animate({ "opacity": 1 }, blockFadeTime * 1000, "linear", fadeOut);
    } else {
        $(`#block-${blockIndex}`).animate({ "opacity": 1 }, blockFadeTime * 1000, "linear", fadeOut);
    }
}
function fadeOut() {
    $(`#block-${blockIndex}`).delay(blockHangTime * 1000).animate({ "opacity": 0 }, blockFadeTime * 1000, "linear", animateNext);
}
