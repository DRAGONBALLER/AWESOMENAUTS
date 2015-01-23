	game.PlayerEntity = me.Entity.extend({
		// classes have both letters capital
		init:function(x, y, settings){
			this._super(me.Entity, 'init', [x, y, { 
				// this._super reaches to the constructor of entity
				image: "player",
				width: 64,
				// how much space is reserved for the image
				height: 64,
				spritewidth: "64",
				// passing main info size of image
				spriteheight: "64",
				getShape: function(){
					return(new me.Rect(0, 0, 64, 64)).toPolygon();
														//method:toPolygon make the Rectangle polygon,
														// sode note all methods also fallow the naming convention that the first word is lower case and the socond is capital
				}
			}]);

			this.body.setVelocity(5,0);
			// movement speed
		},

		update: function(delta) {
			if(me.input.isKeyPressed("right")){
				// adds to position of x by the velocity defined above in
				// aesVelocity() and multiplying it by me.timer.tick.
				// me.timer.tick makes the movement look smooth
				this.body.vel.x += this.body.accel.x * me.timer.tick;

			}else{
				this.body.vel.x = 0;
			}

			this.body.update (delta);
			return true;
		}
	});