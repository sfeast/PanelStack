enyo.kind({
	name: "App",
	kind: "FittableRows",
	components: [
		{name: "panelStack", kind: "PanelStack", fit:true}
	],
	create: function() {
        this.inherited(arguments);
		this.$.panelStack.push(new View({number:1})); //create a new component, set its properties & push it onto the stack
    }
});