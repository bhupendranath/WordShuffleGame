({
   startGame : function(component, event, helper) {
        //access combobox
        let gameModeComboBox = component.find("gameMode");
        
        //access the value of combobox
        let selectedValue = gameModeComboBox.get("v.value"); //value="inProgress"

        const selectedMode = component.get("v.selectedMode");

        //update selectedMode attribute /to set the att. val use set()
        component.set("v.selectedMode", selectedValue);
        //console.log('The start new Game button is clicked. The game mode is '+selectedValue);
        //alert('The start new Game button is clicked. The game mode is '+selectedValue);
  
        // if(selectedMode!=null) =>if(selectedMode)
        if(selectedMode){
            const boardComp = component.find("boardComp");
            //call aura method
            boardComp.startGame();
        }

        //to get(print) the att. val using get()
        //console.log('Selected Mode att. Val : ' + component.get("v.selectedMode"));
    }, 
    reshuffleBoard : function(component, event, helper) {
        //console.log('Reshuffle board is called');
        const boardComp = component.find("boardComp");
        boardComp.reShuffleBoard();
        omponent.set("v.reShuffleDisable", true);
   },

   onResultHandler : function(component, event, helper) {
       const result = event.getParams("result");
       if(result === "Win"){
           component.set("v.reShuffleDisable", true);
           helper.showToast("You Win", "Horray", "success");
       }else{
        component.set("v.reShuffleDisable", false);//if user loses then we can set it false, so that user can keep on playing
        helper.showToast("You Lose", "Reshuffle the boeard to keep playing", "error");
       }
       helper.addResultRecord(component, result);
   },
})