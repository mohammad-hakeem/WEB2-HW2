#  12Fit Backend Project

##  Overview
12Fit is a RESTful backend API for a fitness platform that allows users to register and generate personalized diet plans.

Built using Node.js, Express, Sequelize, and MySQL.

---

##  Tech Stack
- Node.js
- Express.js
- Sequelize ORM
- MySQL
- Postman

---

##  Features
- User management (Create users)
- Diet plan management (Full CRUD operations)
- One-to-Many relationship (User → Diet Plans)
- RESTful API design
- Organized MVC structure (Controllers & Routes)
- API testing with Postman

---

##  Database Models

### User
- id
- name
- email
- password

### DietPlan
- id
- title
- goal
- plan
- userId

---

##  Relationship
- One User → Many Diet Plans
- Sequelize association implemented:
```js
User.hasMany(DietPlan)
DietPlan.belongsTo(User, { as: "user" })

-- Setup & Run--
npm install
npx nodemon server.js

Server runs at:

http://localhost:5000

--API Endpoints--
--Users
POST /api/users → Create user
--Diets
POST /api/diets → Create diet
GET /api/diets → Get all diets
PUT /api/diets/:id → Update diet
DELETE /api/diets/:id → Delete diet
