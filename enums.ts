//Enums

/*1.Intro:- 1.Enums allow a developer to define a set of named constants
        2.TypeScript provides both numeric and string based enums 
*/

//2.Numeric enums:- Enum can be defined using enum keyword


enum direction {   ///Others will ge auto-incremented from that point on
    Up=1,
    Down,
    Left,
    Right,
}
//Or we can leave it as well without giving value, it starts from 0
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

//Example
enum UserResponse {
    No = 0,
    Yes = 1,
  }
   
  function respond(_recipient: string, _message: UserResponse): void {
    // ...
  }
   
  respond("Princess Caroline", UserResponse.Yes);



//2.String Enums:- In a string enum, each member has to be constant-initialized with a string literal, or with another string enum member.
enum Direction {
    Ups="Up",
    Downs="DOWN",
    Lefts="LEFT",
    Rights="RIGHT",
}


//3.Heterogeneous enums:- Enums that are mixed with string and numeric members
enum Color {
    no=1,
    yes="YES",
}


//4.Computed and constant members
enum E1 {    //starts from 0
    X,
    Y,
    Z,
  }
   
  enum E2 {   // starts from value that we have given to from first
    A = 1,
    B,
    C,
  }