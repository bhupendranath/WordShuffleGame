({
    fetchResult : function(component) {
        //create apex method call action
        const action = component.get("c.getResults");

        //define call back : this will be called once we get response from our apex method
        action.setCallback(this, function(response) {
            const state = response.getState();

            if(state === 'SUCCESS'){
                const resp = response.getReturnValue();
                component.set("v.data", resp);
            }
        });
        //call apex method : we are defining Apex method at the end (since it's a async process) because
        //once we get response from server then only we need to call apex method
        //otherwise method will never know what it has to do once it get response from server
        $A.enqueueAction(action);
    }
});