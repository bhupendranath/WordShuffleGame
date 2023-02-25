({
    startGame : function(component, event, helper) {
        //access combobox 
        let gameModeComboBox = component.find("gameMode");

        //access the value of combobox
        let selectedValue = gameModeComboBox.get("v.value");

        //get selected mode to Restart game
        const selectedMode = component.get("v.selectedMode");

        //update selectedMode Attribute : we are setting value here using set() method
        component.set("v.selectedMode", selectedValue);
        //console.log("Start new button is clicked. The game mode is "+selectedValue);
        //alert("Start new button is clicked. The game mode is "+selectedValue);
        //.log("Selected Mode attribute value: "+component.get("v.selectedMode"));

        //if(selectedMode !=null) >> by default JS will check !=null : if(selectedMode)
        if(selectedMode){
            //getting/finding the child component using aura:id : boardComp
            const boardComp = component.find("boardComp");
            
            //call aura method to start game on clicking 'Start New Game' button
            boardComp.startGame();
        }
    },
    reshuffleBoard : function(component, event, helper) {
        //getting/finding the child component using aura:id : boardComp
        const boardComp = component.find("boardComp");
        // now we will reshuffle board
        boardComp.reshuffleBoard();

        //disabling reshuffle board again
        component.set("v.reshuffleDisabled",true);
    },

    onResultHandler : function(component, event, helper) {
        //getting result attr value to show result
        const result = event.getParam("result");

        if(result === "win"){
            component.set("v.reshuffleDisabled", true);
            helper.showToast("YOU WON", "Hooray!!", "success");
        }else{
            component.set("v.reshuffleDisabled", false);
            helper.showToast("YOU LOSE", "Sorry!! Reshuffle the board to keep playing.", "error");
        }

        //calling apex methos through BoardPanelHelper
        helper.addResultRecord(component, result);
    }
});