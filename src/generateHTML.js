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
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
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
