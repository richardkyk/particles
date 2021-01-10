dots = [];

function setup() {
	createCanvas(800, 800);
	for (var i = 0; i < 100; i++) {
		dots.push(new Particle());
	}
}

function draw() {
	background(51);
	for (var i = 0; i < dots.length; i++) {
		dots[i].update();
		dots[i].show();

		if (dots[i].bounds()) {
			dots.splice(i, 1);
			dots.push(new Particle());
		}
	}

	for (var i = 0; i < dots.length; i++) {
		var d = dist(dots[i].pos.x, dots[i].pos.y, mouseX, mouseY);
		if (d < 100) {
			stroke(255, map(d, 0, 100, 255, 0));
			line(dots[i].pos.x, dots[i].pos.y, mouseX, mouseY)
		}
		for (var j = i; j < dots.length; j++) {
			if (i != j && dots[i].neighbours(dots[j])) {
				if (dots[i].d < 30) {
					stroke(255, map(dots[i].d, 0, 30, 255, 0));
					line(dots[i].pos.x, dots[i].pos.y, dots[j].pos.x, dots[j].pos.y)

				}
			}
		}
	}
}