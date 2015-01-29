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

			this.body.setVelocity(5,20);
			// movement speed vurticle velocity has benn set to 20
			// to allow the character to touch the ground
			  
			  this.renderable.addAnimation("idle", [78]);
			  this.renderable.addAnimation("walk", [117, 118, 119, 120, 121, 122, 123, 124, 125], 80);
			  // the nimbers 117 - 125 are the pictures that the character cycles through
			  // to produce ana animation.
			  // the number 80 is the speed that the character cycles through the animations

			  this.renderable.setCurrentAnimation("idle");
			  // this.renderable.setCurrentAnimation is the animation that the character
			  // starts with
			  this.renderable.setCurrentAnimation("walk");
		},

		update: function(delta) {
			if(me.input.isKeyPressed("right")){
				// adds to position of x by the velocity defined above in
				// aesVelocity() and multiplying it by me.timer.tick.
				// me.timer.tick makes the movement look smooth
				this.body.vel.x += this.body.accel.x * me.timer.tick;
				 this.flipX(true); 
				// this.flipX(true); flips the animation to the right
	
			}else{
				this.body.vel.x = 0;
			}

			if(this.body.vel.x !== 0){
			// this line makes my character go back to idleif he is not moving
			if(!this.renderable.isCurrentAnimation("walk")) {
				this.renderable.setCurrentAnimation("walk");
				// this.renderable.isCurrentAnimation says if the character is alresdy walking
				// don't start the walk animation again
			}
		}else{
			this.renderable.setCurrentAnimation("idle");
		}

			this.body.update (delta);

			this._super(me.Entity,"update",[delta]);
			// without this line of code the animations will not update
			// on the fly
			return true;
		}
	});