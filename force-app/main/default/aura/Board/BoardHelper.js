({
    //here we no need to worry about data type as [function(String count)]
    //JS take care the data type binding behind the scene
    getWords : function(count) {
        if(count > 100) return; //if requested word more than 100, then do nothing
        
        //else build an array of words
        let wordsArray = [
            "expansion",
            "grandfather",
            "nappy",
            "oranges",
            "beds",
            "quack",
            "achiever",
            "yell",
            "hospital",
            "winter",
            "understood",
            "squalid",
            "merciful",
            "reaction",
            "wipe",
            "fearless",
            "tiresome",
            "introduce",
            "planes",
            "drum",
            "muddle",
            "capable",
            "canvas",
            "route",
            "enchanted",
            "quirky",
            "switch",
            "apparatus",
            "loss",
            "agreement",
            "substance",
            "back",
            "oafish",
            "expand",
            "aromatic",
            "quarrelsome",
            "free",
            "useful",
            "raspy",
            "drown",
            "ring",
            "lush",
            "numberless",
            "embarrass",
            "shrill",
            "rice",
            "ice",
            "crow",
            "pumped",
            "sparkle",
            "instruct",
            "girl",
            "glass",
            "frog",
            "murky",
            "impolite",
            "crabby",
            "pin",
            "grade",
            "upbeat",
            "linen",
            "flaky",
            "side",
            "unknown",
            "cactus",
            "round",
            "busy",
            "grab",
            "crush",
            "faithful",
            "mother",
            "clean",
            "unhealthy",
            "event",
            "absent",
            "thoughtless",
            "icy",
            "prefer",
            "charge",
            "confuse",
            "clam",
            "dress",
            "snake",
            "evasive",
            "unit",
            "flow",
            "annoying",
            "gusty",
            "possessive",
            "rhetorical",
            "rule",
            "frantic",
            "farm",
            "poor",
            "possess",
            "men",
            "pleasant",
            "zoom",
            "sidewalk",
            "reply"
        ];

        //randomize words array
        wordsArray = this.rendmizeArray(wordsArray);

        //open= false property: below map JS fucntion iterate over all arr element and return new array 
        //and here (element => {function}) : in this fuc we are changing arr element into object
        //here : map() is standard JS function
        const wordObjArray = wordsArray.map((element)=>{
             return {word: element, open: false}
        });

        //return requested words
        return wordObjArray.slice(0,count);
    },

    rendmizeArray : function(arr){
        const randomArr = arr;
        // Randomize the array
        for (let i = randomArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = randomArr[i];
            randomArr[i] = randomArr[j];
            randomArr[j] = temp;
        }
        return randomArr;
    },

    getWinWord : function(arr){
        //to get a random index between (0 to arr.length), use the Math.random() function.
        //Math.floor(Math.random() * arr.length); : this statement wil give us random location(index) 
        //from where we will pick up words
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex].word; // this word is from line 118
    },

    disableBoard : function(component){
        component.set("v.boardDisable", true);
    },
    enableBoard : function(component){
        component.set("v.boardDisable", false);
    },

    resetBoard : function(component) {
        this.enableBoard(component);
        //reset the counter
        component.set("v.clickCount", 0);
        //blankout/reset the result
        component.set("v.result", "");
    },

    fireResultEvent : function(resultValue) {
        const appEvent = $A.get("e.c:ResultApplicationEvents");
        appEvent.setParams({result : resultValue});
        appEvent.fire();
    },
})