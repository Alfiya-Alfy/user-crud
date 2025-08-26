'# User CRUD Application (React + JSON Server)'

A simple **CRUD (Create, Read, Update, Delete)** application built using **React.js** and **JSON Server** as a fake REST API.  
This project demonstrates basic CRUD operations with API integration using `axios`.

---

## 🚀 Features
- 📋 List all users  
- ➕ Add a new user  
- ✏️ Edit user details  
- 👀 View user details  
- ❌ Delete a user  
- 🔗 REST API integration with `json-server`  

---

## 🛠️ Tech Stack
- **Frontend:** React.js, React Router, Bootstrap, Axios  
- **Backend (Fake API):** JSON Server  

---

## 📂 Folder Structure
```

user-crud/
│── public/
│── src/
│   ├── components/
│   │   ├── AddUser.js
│   │   ├── EditUser.js
│   │   ├── UserList.js
│   │   ├── ViewUser.js
│   ├── App.js
│   ├── index.js
│── db.json        # Fake API data
│── package.json
│── README.md
│── .gitignore

````

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Alfiya/Alfy/user-crud.git
cd user-crud
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the JSON Server (Fake API)

```bash
npx json-server --watch db.json --port 3001
```

Your API will run at 👉 `http://localhost:3001/users`

### 4️⃣ Start the React App

```bash
npm start
```

The app will run at 👉 `http://localhost:3000`

---

## 📊 Example API Data (`db.json`)

```json
{
  "users": [
    {
      "id": 1,
      "name": "Atlantic IT Solutions",
      "phone": "251-911-603566",
      "email": "info@atlanticplc.com",
      "location": "Wello Sefer, Addis Ababa"
    },
    {
      "id": 2,
      "name": "Pasqua Giuseppe Aluminum & Metal Works PLC",
      "phone": "251-114-420760",
      "email": "info@pasquagiuseppe.com",
      "location": "Next to St. Joseph Church, Addis Ababa"
    }
  ]
}
```

---

## 📸 Screenshots

![alt text](<Screenshot 1.png>) ![alt text](<Screenshot 2.png>) ![alt text](<Screenshot 3.png>) ![alt text](<Screenshot 4.png>) ![alt text](<Screenshot 5.png>)
---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork this repo and submit pull requests.

---

## 📜 License

This project is licensed under the MIT License.

---
