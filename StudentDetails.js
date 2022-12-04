//“person” class to hold all the details:

//"Students" Details for college Data Storage in Administration:

class student {
    constructor(fullName, department, age, city, state, email){
        this.fullName = fullName;
        this.department = department;
        this.age = age;
        this.city = city;
        this.state = state;
        this.email = email;
        
    }
   
    getDetails(){
        return(`The name of the student is ${this.fullName} studying in ${this.department} department. Student age is ${this.age}. He/She si living in ${this.city}, state of ${this.state }, email id is ${this.email }`)
    }
}

let student1 = new student ("Sharmila","ECE","29","Karur","Tamilnadu","sharmi@gmail.com") 
let student2  = new student ("Naveen","CIVIL","24","Kochi","Kerala","navijii3@yahoo.com")
let student3  = new student ("Mugunthan","EEE","23","Hyderabad","Andhra Pradesh","mugunth@aol.com")
let student4  = new student ("Vasu","Chemical","27","Kolkata","West Bengal","vasu7@zoho.com")
let student5  = new student ("Priya","Mechanical","25","Jaipur","Rajasthan","priyasm@icloud.com")



console.log(student1.getDetails());
console.log(student2.getDetails());
console.log(student3.getDetails());
console.log(student4.getDetails());
console.log(student5.getDetails());
console.log(student3.fullName);
console.log(student2.email);
console.log(student1.city);


/* Output of above students details:

The name of the student is Sharmila studying in ECE department. Student age is 29. He/She si living in Karur, state of Tamilnadu, email id is sharmi@gmail.com
The name of the student is Naveen studying in CIVIL department. Student age is 24. He/She si living in Kochi, state of Kerala, email id is navijii3@yahoo.com
The name of the student is Mugunthan studying in EEE department. Student age is 23. He/She si living in Hyderabad, state of Andhra Pradesh, email id is mugunth@aol.com
The name of the student is Vasu studying in Chemical department. Student age is 27. He/She si living in Kolkata, state of West Bengal, email id is vasu7@zoho.com
The name of the student is Priya studying in Mechanical department. Student age is 25. He/She si living in Jaipur, state of Rajasthan, email id is priyasm@icloud.com
Mugunthan
navijii3@yahoo.com
Karur                                      */