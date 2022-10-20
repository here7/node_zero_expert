const employees = [
    {
        id: 1,
        name: 'Dani'
    },
    {
        id: 2,
        name: 'Irene'
    },
    {
        id: 3,
        name: 'John'
    }
];

const salaries = [
    {
        id: 1,
        name: 1000
    },
    {
        id: 2,
        name: 1500
    },
];

const getEmployee = ( id, my_callback ) => {
    const employee = employees.find( e => e.id === id)?.name; // e.id === id same than return e.id === id
    
    return new Promise( (resolve, reject) => {
        ( employee ) 
        ? resolve( employee )
        : reject(`Employee ${id} doesn't exist`);
    });

   // return promesa;
}


const getSalary = (id, my_callback) => {
    const salary = salaries.find( s => s.id === id)?.name;

    return new Promise( (resolve, reject) => {
        ( salary )
        ? resolve( salary )
        : reject(`Salary ${id} doesn't exist`);
    });
}


const id = 2;

// getEmployee(id)
//    .then( employee => console.log( employee ) )
//    .catch( err => console.log(err)); //handling exception

// getSalary(id)
//    .then( salary => console.log( salary ) )
//    .catch( err => console.log(err));


let name;

getEmployee(id)
    .then( employee => {
        name = employee;
        return getSalary(id)  //instead of a simple return
    })
    .then( salary => console.log( 'Employee: ', name, ' has a salary of ', salary) )
    .catch( err => console.log(err));