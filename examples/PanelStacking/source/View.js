enyo.kind({
	name: "View",
	published: {
		number: 0  //current view number
	},
	components: [
	{kind: "FittableRows", classes: "enyo-fit", components: [
		{kind: "onyx.Toolbar", content: "PanelStack Demo", classes: "onyx-menu-toolbar", style: "background-color: #2B4E69;", components:[
			{content: "PanelStack Demo"},
			{kind: "onyx.Button", style:"background-color:#92B60A", content: "Push", ontap: "pushPanel"},				
			{kind: "onyx.Button", style:"background-color:#92B60A;", content: "Pop", ontap: "popPanel"},	
			{kind: "onyx.MenuDecorator", components: [
				{content: "Transitions"},
				{kind: "onyx.Menu", components: [
					{name: "CardArranger", content: "CardArranger", ontap:"setTransition"},
					{name: "CardSlideInArranger", content: "CardSlideInArranger", ontap:"setTransition"}
				]}
			]}
		]},
        {name: "viewNumber", style: "margin:10% 40%;font-size:8em"},
		]}
	],
	create: function(){
		this.inherited(arguments);
		this.$.viewNumber.setContent(this.number);
	},
	pushPanel: function(){
		var nextView = new View({}); //create a new component
		nextView.setNumber(this.number+1); //update the component before pushing it onto the stack
		this.panelStack.push(nextView);
	},
	popPanel: function(){
		this.panelStack.pop(); //removes the currently view & transition to the previous
	},
	//change the panel stack's arranger type (ie transition type)
	setTransition: function(inEvent){
		this.panelStack.setArranger(inEvent.name);
	},
	//update our view's displayed number
	numberChanged: function(oldNumber){
		this.$.viewNumber.setContent(this.number);
	}
});
