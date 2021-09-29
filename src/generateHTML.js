// const generateCards = (team) => {
//   let results = "";
//   team.forEach((employee) => {
//     results += `<div class="card">
//     <h3>Name: ${employee.name}</h3>
//       <p> ID: ${employee.id}</p>
//         <p>Email: <a>${employee.email}</a></p>

//     </div>`;
//   });
//   return results;
// };

// const generateHTML = (team) => {
//   return `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <div class = "container">
//         <h1>Directory</h1>
//         <div>${generateCards(team)}</div>

//     </div>
// </body>
// </html>`;
// };

// module.exports = generateHTML;

function getEmployeeDetail(employee) {
  if (employee.officeNumber) {
    return "Office number: " + employee.officeNumber;
  } else if (employee.github) {
    return `GitHub: <a href="https://github.com/${employee.github}"> ${employee.github} </a>`;
  } else {
    return "School " + employee.school;
  }
}

function generateHTML(teamData) {
  const employeeCards = teamData.map((employee) => {
    return ` <div class="col">
    <div class="card">
      <h5 class="card-title">${employee.name}</h5>
      <h6 class="card-text">${employee.role}</h6>
      <div class="card-body">
      
      <p class="card-text">${employee.id}</p>
      <p class="card-text">${employee.email}</p>
      <p class="card-text">${getEmployeeDetail(employee)}</p>
     
      </div>
    </div>`;
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  </head>
<body>
  <div class="row row-cols-1 row-cols-md-3 g-4">
  
  ${employeeCards.join("")}
  
  
    
    </div>
</body>ss
</html>
  `;
}

module.exports = generateHTML;
