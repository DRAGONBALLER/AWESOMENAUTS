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

			  this.renderable.setCurrentAnimation("idle");
			  this.renderable.setCurrentAnimation("walk");
		},

		update: function(delta) {
			if(me.input.isKeyPressed("right")){
				// adds to position of x by the velocity defined above in
				// aesVelocity() and multiplying it by me.timer.tick.
				// me.timer.tick makes the movement look smooth
				this.body.vel.x += this.body.accel.x * me.timer.tick;
				this.flipX(true);
	
			}else{
				this.body.vel.x = 0;
			}

			if(this.body.vel.x !== 0){
			if(!this.renderable.isCurrentAnimation("walk")) {
				this.renderable.setCurrentAnimation("walk");
			}
		}else{
			this.renderable.setCurrentAnimation("idle");
		}

			this.body.update (delta);

			this._super(me.Entity,"update",[delta]);
			return true;
		}
	});