1.What are some differences between interfaces and types in TypeScript?

Differences between interfaces and types in TypeScript:

types:
1.Used to define any kind of type.
2.Cannot be re-declared with the same name.
3.Commonly used for custom types, unions, and tuples.
4.Can define primitive types, union types, tuples, etc.

interfaces:
1.Used to define the structure of an object.
2.Can extend other interfaces using extends.
3.Can be declared multiple times with the same name.
4.Cannot directly define primitive, union, or tuple types









6.How does TypeScript help in improving code quality and project maintainability?

TypeScript is a powerful programming language built on top of JavaScript that supports static typing.
It not only helps developers catch errors early but also makes the entire project more robust and
maintainable in the long run.

Static Typing:
TypeScript detects type-related errors at compile time, which helps reduce runtime bugs.
For example, if you pass the wrong data type to a function, it will warn you during development.

Advanced Autocompletion and IntelliSense:
With TypeScript, editors like VS Code provide rich IntelliSense features such as auto-suggestions,
type checking, and inline documentation—making development faster and smoother.

Clear and Readable Code:
Because of type definitions, it's easy to understand what kind of data a function expects and returns.
This improves readability, especially in team projects.

Easier Refactoring and Scaling:
In large projects, changing code without breaking things is a challenge. TypeScript detects issues during
refactoring, making changes safer and more reliable.

Early Error Detection:
Most type-related bugs are caught during development time, allowing developers to fix issues before deployment.

Modular Design and Reusability:
TypeScript supports class, interface, and type definitions, making it easier to break code into modules and
reuse components across the project.

Types Serve as Documentation:
Type definitions act like documentation. Even a new developer can understand a function’s inputs and outputs
just by looking at the types.









7.Provide an example of using union and intersection types in TypeScript.

Union Types(|):
Union types allow a variable to hold more than one type like: "this or that".

Example:
function union(id: string | number) {
  console.log("Your ID is: " + id);
}

union(101);    // number
union("Programmin Hero");    // string

Intersection Types(&):
Intersection types combine two or more types into one like: "this and that".

Example:
type Student = {
  name: string;
  class: number;
};

type Gamer = {
  game: string;
};

type StudentGamer = Student & Gamer;

const rahim: StudentGamer = {
  name: "Rahim",
  class: 9,
  game: "Free Fire"
};






















