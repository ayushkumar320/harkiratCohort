// Backend project
/*
You need to create 4 routes (4 things that the hospital can do) 
1. GET - User can check how many kidneys they have and their health 
2. POST - User can add a new kidney 
3. PUT - User can replace a kidney, make it healthy 
4. DELETE - User can remove a kidney
*/

import express from 'express';
const app = express();

var users = [{
  name: "John",
  kidneys: [{
    healthy: "false"
  }]
}];

// Middlewares to parse the incoming JSON
app.use(express.json());    // If we will not use this middleware, req.body will be undefined

// Getting user kidneys information

app.get('/', function(req, res){
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;
  for(let i = 0; i < johnKidneys.length; i++) {
    if(johnKidneys[i].healthy === "true") {
      numberOfHealthyKidneys++;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    name: users[0].name,
    kidneys: {
      total: numberOfKidneys,
      healthy: numberOfHealthyKidneys,
      unhealthy: numberOfUnhealthyKidneys
    }
  })
  console.log(johnKidneys);
});

// Now we need to create a post request where user can add kidney
app.post("/", function(req, res){
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({healthy: isHealthy});
  res.json({
    message: "Kidney added successfully!"
  });
});

// Now we will create a put request and user can replace a kidney

app.put("/", function(req, res){
  for(let i = 0; i < users[0].kidneys.length; i++){
    users[0].kidneys[i].healthy = "true"; // Making all kidneys healthy
  }
  res.json({
    message: "All kidneys replaced successfully!"
  });
});

// Lastly user can remove a kidney (unhealthy kidneys)

app.delete("/", function(req, res){
  if(isThereAtLeastOneUnhealthyKidney()){
    let newKidenys = [];
    for(let i = 0 ; i < users[0].kidneys.length; i++){
      if(users[0].kidneys.healthy === "true"){
        newKidenys.push({
          healthy: "true"
        });
      }
    }
    users[0].kidneys = newKidenys;
    res.json({
      message: "Unhealthy kidneys removed successfully!"
    });
  } else {
    res.status(411).json({
      message: "You have no bad kidneys!"
    });
  }
});

function isThereAtLeastOneUnhealthyKidney(){
  let atleastOneUnhealthyKidney = false;
  for(let i = 0; i < users[0].kidneys.length; i++){
    if(users[0].kidneys[i].healthy === "false"){
      atleastOneUnhealthyKidney = true;
    }
  }
  return atleastOneUnhealthyKidney;
}

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});