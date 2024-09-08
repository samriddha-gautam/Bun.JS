// // console.log(await Bun.file("hello.txt").text())

// Bun.serve(
//     {
//         port:5000,
//         fetch(req){
//             console.log(req);
//             let url = new URL(req.url);
//             if(url.pathname=== "/"){
//                 return new Response("Homepage");
//             }
//             else if (url.pathname === "/about"){
//                 return new Response("About Us");
//             }
//             console.log("url",url);
//             return new Response("hello from Rest API-121")
//         }
// });
// import { Database } from "bun:sqlite";
// let db = new Database("mydb.sqlite")
// db.query(
//     "CREATE TABLE IF NOT EXISTS USERS(id INTEGER PRIMARY KEY,name TEXT, address TEXT)"
// ).run();

// db.query(`INSERT INTO USERS (name,address) VALUES('JOHN','KATHMANDU')`).run();
// db.query(`DELETE FORM USERS WHERE ID = 2`).run();
import { Database } from "bun:sqlite";
let db = new Database("mydb.sqlite")
Bun.serve(
    {
        port:4000,
         fetch(req){
                let url = new URL(req.url);
                const userlist = db.query("SELECT * FROM USERS").run()
                return Response.json(userlist);
            
        },
});