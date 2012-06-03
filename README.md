PanelStack for Enyo 2
==========

Version
-----

1.0


About
-----

Use to push &amp; pop panels in stack fashion. Makes it easy to manage & transition UIComponents (views, panels, etc) from anywhere in your app.


How to Use
----------

Include the PanelStack package which will include the necessary libs:

	enyo.depends(
		"../../package.js", <- path to PanelStack package.js
		<your files go here>
	);

Or you can just include PanelStack.js &amp; include the necessary libs yourself (layout, fittable and panels):

	<script src="path/to/PanelStack.js" type="text/javascript"></script>


Then instantiate the PanelStack kind:

	{name: "panelStack", kind: "PanelStack", fit:true}
	
Now use this.$.panelStack to push and pop UIComponents like so:

this.$.panelStack.push(new View({}));

OR

this.$.panelStack.pop();
		
Additionally you can use this.panelStack directly from any of the pushed components to transition in/out new compents. PanelStack adds a reference to itself to any component that it receives in a push call. The pushed component may then push new components in/out or pop itself out.
		
Note that the example uses Onyx, but it isn't required for use of PanelStack.


Properties
----------

- arranger -> String: This is the panel arranger that provides the transition type between panels.

Methods
-------
	
- .push( component ) -> Add a new component to the panel stack and transition it in as the active panel.
- .pop() -> Remove the active panel and transition to the previous panel. This will permanently remove the active panel.
- .setArranger( String ) -> Set the arranger type for transitions. This is persistent.

Demos
-----

- http://apps.stevenf.webfactional.com/enyo/examples/PanelStack/examples/PanelStacking/

Changelog
---------

1.0 - Initial release