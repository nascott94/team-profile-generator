const generateCards = (team) => {
  let results = "";
  team.forEach((employee) => {
    results += `<div class="card">
    <h3>Name: ${employee.name}</h3>
      <p> ID: ${employee.id}</p>
        <p>Email: <a>${employee.email}</a></p>

    </div>`;
  });
  return results;
};

const generateHTML = (team) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class = "container">
        <h1>Directory</h1>
        <div>${generateCards(team)}</div>

    </div>
</body>
</html>`;
};

module.exports = generateHTML;
