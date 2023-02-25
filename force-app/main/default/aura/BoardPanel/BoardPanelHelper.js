({
    addResultRecord : function(component, gameResult) {
        //create apex method call action
        const action = component.get("c.addResult");

        //getting game mode from BoardPanel.cmp
        const modeValue = component.get("v.selectedMode").toUpperCase();
        //set parameter
        action.setParams({  
            result : gameResult.toUpperCase(),
            mode : modeValue
        });
        //define call back : this will be called once we get response from our apex method
        action.setCallback(this, function(response) {
            const state = response.getState();

            if(state !== 'SUCCESS'){
                console.log("Error in saving record");
            }
        });
        //call apex method : we are defining Apex method at the end (since it's a async process) because
        //once we get response from server then only we need to call apex method
        //otherwise method will never know what it has to do once it get response from server
        $A.enqueueAction(action);
    },

    showToast : function(titleValue, messageValue, typeValue) {
    var toastEvent = $A.get("e.force:showToast");
    toastEvent.setParams({
        "title": titleValue,
        "message": messageValue,
        "type" : typeValue
    });
    toastEvent.fire();
    }

});