//Merging Interfaces
interface Box {
    height: number;
    width: number;
  }
  interface Box {
    scale: number;
  }
  let box: Box = { height: 5, width: 6, scale: 10 };


//Example
interface Cloner {
    clone(animal: Animal): Animal;
  }
  interface Cloner {
    clone(animal: Sheep): Sheep;
  }
  interface Cloner {
    clone(animal: Dog): Dog;
    clone(animal: Cat): Cat;
  }
//Three interfaces will merge to create a single declaration as:
interface Cloner {
    clone(animal: Dog): Dog;
    clone(animal: Cat): Cat;
    clone(animal: Sheep): Sheep;
    clone(animal: Animal): Animal;
  }


//Example2
interface Document {
    createElement(tagName: any): Element;
  }
  interface Document {
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
  }
  interface Document {
    createElement(tagName: string): HTMLElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
  }
//The resulting merged declaration of Document will be the following
interface Document {
    createElement(tagName: "canvas"): HTMLCanvasElement;
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
    createElement(tagName: string): HTMLElement;
    createElement(tagName: any): Element;
  }


//Merging Namespaces
namespace Animals {
    export class Zebra{}
}
namespace Animals {
    export interface Legged {
        numberOfLegs:number;
    }
    export class Dog {}
}
//above is equivalent to:
namespace Animals {
    export interface Leged {
        numberOfLegs:number
    }
    export class Camel{}
    export class Cat{}
}


//Merging Namespaces with classes
class Album {
    label:Album.AlbumLabel;
}
namespace Album {
    export class AlbumLabel {}
}

//example
function buildLabel(name: string): string {
    return buildLabel.prefix + name + buildLabel.suffix;
  }
  namespace buildLabel {
    export let suffix = "";
    export let prefix = "Hello, ";
  }
  console.log(buildLabel("Sam Smith"));

//namespaces can be used to extend enums with static members
enum Color {
    red = 1,
    green = 2,
    blue = 4,
  }
  namespace Color {
    export function mixColor(colorName: string) {
      if (colorName == "yellow") {
        return Color.red + Color.green;
      } else if (colorName == "white") {
        return Color.red + Color.green + Color.blue;
      } else if (colorName == "magenta") {
        return Color.red + Color.blue;
      } else if (colorName == "cyan") {
        return Color.green + Color.blue;
      }
    }
  }