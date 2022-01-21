export class Square {
	public length: number;

	constructor(length: number) {
		this.length = length;
	}
}

export class Circle {
	public radius: number;

	constructor(radius: number) {
		this.radius = radius;
	}
}

export class SumCalculatorOutputter {
	private calculator: AreaCalculator;

	constructor(calculator: AreaCalculator) {
		this.calculator = calculator;
	}

	public toJSON(): string {
		return JSON.stringify({ sum: this.calculator.sum() });
	}

	public toString(): string {
		return `Sum of the areas of the provided shapes: ${this.calculator.sum()}`;
	}
}

class AreaCalculator {
	public shapes: (Circle | Square)[];

	constructor(shapes: (Circle | Square)[]) {
		this.shapes = shapes;
	}

	public sum(): number {
		const areas: number[] = [];

		this.shapes.forEach((shape: any) => {
			if (shape instanceof Square) {
				areas.push(Math.pow(shape.length, 2));
			} else if (shape instanceof Circle) {
				areas.push(Math.PI * Math.pow(shape.radius, 2));
			}
		});

		return areas.reduce((pre: number, curr: number) => pre + curr);
	}
}

/**
 * Single Responsibility Principle
 *
 * A class should have one and only one reason to change,
 * meaning that a class should have only one job.
 */

export default function singleResponsibility() {
	const shapes = [new Circle(2), new Square(5), new Square(6)];
	const areas = new AreaCalculator(shapes);
	const output = new SumCalculatorOutputter(areas);
	console.log(output.toJSON());
}
