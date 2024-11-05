//Utility Types
//Typescript provides utility types to facilitate common type transformations.These utilities are available globally.


//1.Awaited<Type>:- The way that they recursively unwrap prmises
type A1= Awaited<Promise<string>>

type B1=Awaited<Promise<Promise<number>>>

type C1= Awaited<boolean | Promise<number>>

//2.Partial<Type>:- This utility will return a type that represents all subsets of a given type
interface A2 {
    name:string;
    age:number;
}
function updateA2(a2:A2, fieldToUpdate:Partial<A2>) {
    return  { ...a2, ...fieldToUpdate };
}
const person= {
    name:"Rajesh",
    age:24,
}
const person2=updateA2(person, {
    age:25
})

//3.Required Type: 1.Opposite to partial and 2. Constructs a type consisting of all properties of Type set to required.
interface Props {
    a?:number;
    b?:number;
}
const object1: Props= {a:5};
const object2: Required<Props>= {a:5, b:6}

//4.Readonly<Type>: Constructs a type with all properties of Type set to be readonly, means properties of constructed type cannot be reassigned
interface Todso {
    title: string;
}
const todo: Readonly<Todso>= {
    title:"Delete them"
}
//This utility is useful for representing assignment expressions that will fail at run time


//5.Record<Keys, Type>:- 1.Constructs an object type whose property keys are Keys and whose property values are Type
                       //2.This utility can be used to map properties of type to another type
type CatName= "Garfield" | "Dennis" | "Menace"
interface CatInfo {
    age:number;
    breed:string;
}
const cats:Record<CatName,  CatInfo>= {
    Garfield: {age:10, breed:"Persian"},
    Dennis: {age:12, breed:"Maine Coon"},
    Menace:{age:5, breed:"British Shorthair"},
};
cats.Dennis;


//6.Pick<Type, Keys>: Constructs a type  by picking the set of properties Keys from Type.
interface Todo {
    title:string;
    description:string;
    completed: boolean;
}
type TodoPreview = Pick<Todo, "title" | "completed">;

const todos: TodoPreview= {
    title: "Clean room",
    completed: false
}
todos;


//7.Omit<Type, Keys>: 1.Opposite of pick and 2.Constructs a type by picking all properties from Type and then removing Keys
interface Todo {
    title:string;
    description:string;
    completed:boolean;
    createdAt:number;
}
type TodoPreviewing= Omit<Todo, "description">;

const todos1: TodoPreviewing = {
    title: "Clean room",
    completed:false,
    createdAt:1643723900,
}
todos1;

type TodoInfo= Omit<Todo, "completed" | "createdAt">;
const todoInfo:TodoInfo= {
    title:"Pick up kids",
    description:"Closes at 5pm",
}
todoInfo;


//8.Exclude<UnionType, ExcludeMembers>:- Constructs a type by excluding from UnionType all union members that are assignable to ExcludeMembers
type T0 = Exclude<"a" | "b" | "c", "a">;
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
type T2 = Exclude<string | number | (() => void), Function>;
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };
type T3 = Exclude<Shape, { kind: "circle" }>


//9.Extract<Type, Union>:- Constructs a type by extracting from Type all union members that are assignable to Union
type T00 = Extract<"a" | "b" | "c", "a" | "f">;
type T01= Extract<string | number | (() => void), Function>;
type Shape1 =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };
 
type T02= Extract<Shape, { kind: "circle" }>


//10.NonNullable<Types>:- Constructs a type by excluding null and undefined from Type.
type T000=NonNullable<string | number | undefined>;
type t001=NonNullable<string[] | null | undefined>;


//11.Parameters<Type>:- Constructs a tuple from types used in parameters of function type Type
declare function f1(arg: { a: number; b: string }): void;
type T10 = Parameters<() => string>;
type T11 = Parameters<(s: string) => void>;
type T12 = Parameters<<T>(arg: T) => T>;
type T13 = Parameters<typeof f1>;
type T14 = Parameters<any>;
type T15 = Parameters<never>;


//12.Constructor Parameter Types:- Constructs a tuple or array type from the types of a constructor function type. It produces a tuple type with all the parameter types
type T20 = ConstructorParameters<ErrorConstructor>;
type T21 = ConstructorParameters<FunctionConstructor>;
type T22 = ConstructorParameters<RegExpConstructor>;
class C0 {
  constructor(a: number, b: string) {}
}
type T23 = ConstructorParameters<typeof C>;
type T4 = ConstructorParameters<any>;



//13.ReturnType<Type>:- Constructs a type consists of return type of function Type
declare function f1(): { a: number; b: string };
type T30 = ReturnType<() => string>;
type T31 = ReturnType<(s: string) => void>;
type T32 = ReturnType<<T>() => T>;
type T33 = ReturnType<<T extends U, U extends number[]>() => T>;
type T34 = ReturnType<typeof f1>;
type T35 = ReturnType<any>;
type T36 = ReturnType<never>;


//14.InstanceType<Type>:- Constructs a type consists of instance type of a constructor function in Type.
class C {
    x = 0;
    y = 0;
  }
type T40 = InstanceType<typeof C>;
type T41 = InstanceType<any>;
type T42 = InstanceType<never>;


//15.NoInfer<Type>:- Blocks inferences to the contained type
function createStreetLight<C extends string>(
    _colors: C[],
    _defaultColor?: NoInfer<C>,
  ) {
    // ...
  }
  createStreetLight(["red", "yellow", "green"], "red");


//16.ThisParameterType<Type>:- Extracts the type of the this parameter for a function type, or unknown if the function type has no this parameter.
function toHex(this: Number) {
    return this.toString(16);
  }
   
  function numberToString(n: ThisParameterType<typeof toHex>) {
    return toHex.apply(n);
  }


//17.OmitThisParameter<Type>:- Removes the this parameter from Type
function toHexs(this: Number) {
    return this.toString(16);
  }
   
  const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);
   
  console.log(fiveToHex());


//18.ThisType<Type>:- This utility does not return a transformed type. Instead, it serves as a marker for a contextual this type and 3.Note that the noImplicitThis flag must be enabled to use this utility
type ObjectDescriptor<D, M> = {
    data?: D;
    methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
  };
   
  function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
    let data: object = desc.data || {};
    let methods: object = desc.methods || {};
    return { ...data, ...methods } as D & M;
  }
   
  let object = makeObject({
    data: { x: 0, y: 0 },
    methods: {
      moveBy(dx: number, dy: number) {
        this.x += dx;
        this.y += dy; 
      },
    },
  });
  object.x = 10;
  object.y = 20;
  object.moveBy(5, 5);


/*19.Intrinsic String Manipulation Types:-
     Some of them are
     1.UpperCase<StringType>
     2.LowerCaase<StringType>
     3.Capitalize<StringType>
     4.Uncapitalize<StringType>