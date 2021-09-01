({
    blockClickHandler : function(component, event, helper) {
        const open = component.get("v.open");
        //if(open === false) OR if(!open)
        if(!open){
            component.set("v.open", true);
            //get label value
            const label = component.get("v.label");
            //fire the block click event
            let compEvent = component.getEvent("onclick");
            //then we need to set the para. val of event which is "Value"
            compEvent.setParams({value : label});
            //now firing the event using fire() method
            compEvent.fire();
        }
    },

    scriptsLoaded : function(component, event, helper) {
        const divElement = component.getElement(".board-block");
        //fitText() method is defined from static resource
        fitText(divElement);
    },
})