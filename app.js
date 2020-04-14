const express = require('express')
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

const app = express()
const port = 3050

app.get('/blog', (req, res) =>{
    db.all("SELECT * from blogpost",(err,rows)=>{
        setTimeout(()=>{res.json(rows)},5000)
    })
})

db.serialize(function() {
    db.run("CREATE TABLE blogpost (id INTEGER PRIMARY KEY AUTOINCREMENT, author TEXT,date TEXT, title TEXT,description TEXT)");
   
    db.run("INSERT INTO blogpost (author,date,title,description) VALUES ('Admin','2020/02/03','How to Kungfu','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')");
    db.run("INSERT INTO blogpost (author,date,title,description) VALUES ('Admin','2020/02/04','How to Drive','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')");
    db.run("INSERT INTO blogpost (author,date,title,description) VALUES ('Admin','2020/02/10','How to Shoot','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')");
    
  });
app.listen(port, () => console.log(`Blog backend listening at http://localhost:${port}`))