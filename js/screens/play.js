game.PlayScreen = me.ScreenObject.extend({
	/**
	 *  action to perform on state change
	 */
	onResetEvent: function() {
		// reset the score
		game.data.score = 0;

		me.levelDirector.loadLevel("level01");
		// nameing convention first word is allways lower case second word upper case
		var player = me.pool.pull("player", 0, 420,{});
		// pulling player from pool
		me.game.world.addChild(player, 5);
		// the higher the number the closer to the screen player is

		me.input.bindKey(me.input.KEY.RIGHT, "right");

		// add our HUD to the game world
		this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD);
	},


	/**
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		// remove the HUD from the game world
		me.game.world.removeChild(this.HUD);
	}
});
