function generatePage(data) {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./style.css" />
        <title>Team Profile Generator</title>
      </head>
      <body>
        <header>
          <h1>My Team</h1>
        </header>
    
        <main>
          <div class="card" id="employee">
            <div class="card-title">
              <p class="name">Sample Name</p>
              <p class="role">Sample Role</p>
            </div>
            <div class="card-info">
              <div class="id">Sample ID</div>
              <div class="email">Sample Email</div>
              <div class="3rd-info">Sample info</div>
            </div>
          </div>
        </main>
      </body>
    </html>`;
}