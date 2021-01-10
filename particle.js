function Particle() {
	this.pos = createVector(random(0, width), random(0, height));
	this.vel = createVector(random(-1,1), random(-1,1));
	this.size = random(0,1);
	
	this.update = function() {
		this.pos.add(this.vel);
	}
	
	this.show = function() {
		stroke(255);
		ellipse(this.pos.x, this.pos.y, this.size);
	}
	
	this.neighbours = function(other) {
		this.d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
		if (this.d < 30) {
			return true;
		} else {
			return false;
		}
	
	}
	
	this.bounds = function() {
		if (this.pos.x < 0 || this.pos.x > width) {
			return true;
		} else if (this.pos.y < 0 || this.pos.y > height) {			
			return true;
		} else {
			return false;
		}
	}
}