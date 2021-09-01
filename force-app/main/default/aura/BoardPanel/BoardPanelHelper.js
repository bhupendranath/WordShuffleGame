({
    addResultRecord : function(component, gameResult) {
        //create apex method call action
        const action = component.get("c.addResult");
        const modeValue = component.get("v.selectedMode").toUpperCase();
        //set parameters
        action.setParams({
            result : gameResult.toUpperCase(),
            mode : modeValue
        });

        //define a call back
        action.setCallback(this, function(response){
            //from state we are checking if our method call was success or not
            const state = response.getState();
            if(state != 'SUCCESS'){
                console.error("Error in saving record");
            }
        });

        // call apex methos
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
})