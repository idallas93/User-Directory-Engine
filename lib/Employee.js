class Employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
       return this.name;
    }
    getId(){
        return this.id;
     }
     getEmail(){
        return this.email;
     }
     getRole(){
         return "Employee"
     }
}

module.exports = Employee 
// TODO: Write code to define and export the Employee class

// * Create multiple HTML templates for each type of user. For example, you could use the following templates:

// * `main.html`

// * `engineer.html`

// * `intern.html`

// // * `manager.html`


// * You will want to make your methods as pure as possible. This means try to make your methods simple so that they are easier to test.

// * The different employee types should all inherit some methods and properties from a base class of `Employee`.

// * In your HTML template files, you may want to add a placeholder character that helps your program identify where the dynamic markup begins and ends.


// ### Classes
// The project must have the these classes: `Employee`, `Manager`, `Engineer`,
// `Intern`. The tests for these classes in the `tests` directory must all pass.

// The first class is an `Employee` parent class with the following properties and
// methods:

//   * name
//   * id
//   * email
//   * getName()
//   * getId()
//   * getEmail()
//   * getRole() Returns 'Employee'


// the other three classes will extend `Employee`. 

// In addition to `Employee`'s properties and methods, `Manager` will also have:

//   * officeNumber

//   * getRole()  Overridden to return 'Manager'

// In addition to `Employee`'s properties and methods, `Engineer` will also have:



// * github  GitHub username

// * getGithub()

// * getRole()  Overridden to return 'Engineer'

// In addition to `Employee`'s properties and methods, `Intern` will also have:

// * school 

// * getSchool()

// * getRole() // Overridden to return 'Intern'

