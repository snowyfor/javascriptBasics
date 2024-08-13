let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumSalary(team) {
    let sum = 0;
    for(let salary in team) {
        sum += team[salary];
    }
    return sum;
}

alert( sumSalary(salaries) );

/*
Solution

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum);
*/