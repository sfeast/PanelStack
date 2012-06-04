enyo.kind({
	name: "App",
	kind: "FittableRows",
	components: [
		{name: "panelStack", kind: "PanelStack", fit:true}
	],
	create: function() {
        this.inherited(arguments);
		//create a new component, set its properties & push it onto the stack
		//note that we give the new view a reference to the PanelStack so it can push/pop panels as well
		this.$.panelStack.push(new View({panelStack:this.$.panelStack,number:1}));
    }
});