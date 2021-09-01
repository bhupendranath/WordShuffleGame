({
    doInit : function(component, event, helper) {
        console.log('Initialization completed');
        //get game mode
        const  gameMode = component.get("v.mode");
        let column =0;
        //"if(gameMode)"" JS smartly check it as "if(gameMode !=null)"
        //double equals "1" == 1 , True (even "1" string and 1 int)[Data type won't be checked here]
        //triple equals "1" === 1, False (as "1" string and 1 int)[here Data type will be checked]
        //get no. of column based on game mode
        if(gameMode && gameMode === "Hard"){
            column = 6;
        }else if(gameMode === "Medium"){
            column = 4;
        }else{
            column = 3;
        }

        //get block width/size
        let blockSize = 12/column;
        component.set("v.blockSize",blockSize);
        
        //get words based on gameMode
        const words = helper.getWords(column*column);
        //build a list of 100 words (we are building in helper file)
        component.set("v.words", words);
        //console.log('words : '+ words);

        //get win word
        const winWords = helper.getWinWord(words);
        component.set("v.winWords", winWords);
        //console.log("Win Word : "+winWord);

        //reset the board
        helper.resetBoard(component);
    },

    doRender : function(component, event, helper) {
        console.log('Render completed');
    },
    
    blockClickHandler : function(component, event, helper){
        //component.get("v.clickCount") => old click count and each time event is firing we increasing it by 1
        let clickCount =component.get("v.clickCount")+1;
        //get event value
        const value = event.getParam("value");

        if(value === component.get("v.winWords")){
            //user has won
            component.set("v.result", "YOU WON");
            console.log("You Won");
            helper.disableBoard(component);
            helper.fireResultEvent("Win");
        }else if(clickCount === 3){
            //user lose
            component.set("v.result", "YOU LOSE");
            console.log("You Lose");
            helper.disableBoard(component);
            helper.fireResultEvent("Lose");
        }
        //set click count
        component.set("v.clickCount",clickCount);
    },

    reShuffleBoard : function(component, event, helper) {
        const words = component.get("v.words");
        const randomizeWords = helper.rendmizeArray(words);
        component.set("v.words", randomizeWords);
        helper.resetBoard(component);
    },
})