({
    doInit : function(component, event, helper) {
        console.log("Initialization complete");

        //get game mode
        const gameMode = component.get("v.mode");
        
        //double equals "1" == 1 , return true, as JS check it's value not datatype
        //triple equals "1" == 1 , return false, as JS check it's datatyp not value
        //gameMode : in JS it automatically identifes as gameMode!=null

        //get no. of column based on game mode
        let column = 0;
        if(gameMode && gameMode === 'hard'){
            column = 6;
        }else if(gameMode === 'medium'){
            column = 4;
        }else{
            column = 3;
        }

        //get block width/size
        let blockSize = 12/column;
        component.set("v.blockSize",blockSize);

        //to get column * column tiles
        const words = helper.getWords(column * column);
        component.set("v.words",words);
        //console.log("Words: "+ words);
        
        //get win word and setting winWords\
        const winWord = helper.getWinWord(words);
        component.set("v.winWord",winWord);
        //console.log("Win word: "+ helper.getWinWord(words));

        //calling resetBoard helper method
        helper.resetBoard(component);
    },

    doRender : function(component, event, helper) {
        console.log("Render completed");
    },

    blockClickHandler : function(component, event, helper) {

        //get click count, adding 1 to get latest click count
        let clickCount = component.get("v.clickCount")+1;
        //get event value
        const value = event.getParam("value");

        if(value === component.get("v.winWord")){
            //user has won
            component.set("v.result", "YOU WON");
            console.log('You Won');
            helper.disableBoard(component);
            helper.fireResultEvent("win");
        }else if(clickCount === 3){
            //user lost
            component.set("v.result", "YOU LOST");
            console.log('You Lost');
            helper.disableBoard(component);
            helper.fireResultEvent("lose");
        }

        //set click count
        component.set("v.clickCount",clickCount)
    },
     
    reshuffleBoard : function(component, event, helper) {
        //to reshuffle board we simply randmise our words
        const words = component.get("v.words");
        const randomizeWords = helper.randomizeArray(words); 
        //now we need set this randomizeWords back again inside our words attribute
        component.set("v.words", randomizeWords);

        //in the end we will reset our game [including: moves left counter, result]
        helper.resetBoard(component);
    }
});