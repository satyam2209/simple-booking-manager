## settup steps

## in Backend Directory
## mysql create database and table
step 1: create database bookingmanagerdb;
step 2: 
create table bookinglists (
  id int auto_increment primary key,
  name varchar(100) not null,
  date DATE not null,
  destination varchar(100) not null,
  createdat timestamp default current_timestamp
);

step3: create .env and put this 
PORT=5000
DB_HOST=localhost
DB_PORT=dbport
DB_USER=dbusername
DB_PASSWORD=dbpassword
DB_NAME=bookingmanagerdb

step4: run command "npm i" 
step5: then start backend using command "npm start"

## in frontend directory
step1: run command "npm i"
step2: then start frontend using "npm run dev"

Finally the project started , create user booking and see the list



## Tech Stack
- Node.js, Express
- MySQL
- React
- Tailwind CSS 
- React Router, Axios


## What I Learned
- creating RESt api
- using mysql with node and express
- frontend backend integration
- form handling and how to list data