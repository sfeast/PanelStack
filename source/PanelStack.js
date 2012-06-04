enyo.kind({
	name: "PanelList",
	kind: "Panels",
	//override the default Panel behavior on removeControl (since it sets the index to 0)
	removeControl: function(inControl) {
		//***Pulled from uicomponent removeControl - needed but can't call this.inherited or we get default Panel behavior***
		// When we remove a Control, we also remove it from its parent.
		inControl.setParent(null);
		enyo.remove(inControl, this.controls);
		
		//pulled from Panels.js
		this.flow();
		this.reflow();
		this.setIndex(this.index); //important change - set index to this.index rather than 0
	}
});

enyo.kind({
	name: "PanelStack",
	kind: "FittableRows",
	components: [
		{name:"panelList", kind: "PanelList", arrangerKind: "CardArranger",	fit: true}	
	],
	published: {
		arranger: "CardArranger"		
	},
	//* @public
	//Adds a component to the stack of panels
	push: function(component){
		var pl = this.$.panelList;
		var i = pl.getPanels().length;
		
		//add the passed component to our panelList
		component.container = pl;
		component.parent = pl;
		component.owner = pl;
		pl.addControl(component);

		//render the control & update the panels
		component.render();
		pl.reflow();
		pl.setIndex(i);
	},
	//Removes the active panel & transitions to the previous panel
	pop: function(){
		var pl = this.$.panelList;
		
		//if we don't have any more panels then get out of here
		if (pl.getPanels().length <= 1){
			return false;
		}

		//calling destroy will automatically transition in the previous panel as the active panel
		pl.getActive().destroy();
	},
	//update the arranger type
	arrangerChanged: function(oldArranger){
		this.$.panelList.setArrangerKind(this.arranger);
	}
});