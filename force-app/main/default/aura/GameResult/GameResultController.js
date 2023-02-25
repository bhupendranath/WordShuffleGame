({
    doInit : function(component, event, helper) {
        const columns = [
            {label: "Game Number", fieldName: "Name", type: "text"},
            {label: "Mode", fieldName: "Game_Mode__c", type: "text"},
            {label: "Playes On", fieldName: "CreatedDate", type: "date"},
            {label: "Result", fieldName: "Result__c", type: "text"}
        ];

        //storing the above columns inside columns attribute
        component.set("v.columns",columns);

        //get the previous result
        helper.fetchResult(component);
    },

    onResultHandler : function(component, event, helper){
        //get the new result once user played 
        helper.fetchResult(component);
    }
});