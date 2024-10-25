# Family Tree Website

A web application that enables users to build, explore, and manage family trees with a focus on connecting multiple families through relationships like parents, children, siblings, and spouses.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- **Interactive Family Tree Visualization**: Create and explore family connections in a dynamic visual layout.
- **Multiple Family Linking**: Link and manage multiple family connections within a single tree.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.
- **User Accounts**: Secure user management to create, edit, and maintain family data.

## Tech Stack
- **Frontend**: Angular for dynamic UI
- **Backend**: ASP.NET Core for managing data and handling requests
- **Database**: SQL Server for data storage
- **Others**: Git for version control, GitHub for repository hosting

## Installation

### Prerequisites
- **Node.js** and **npm** for frontend dependencies.
- **.NET SDK** for running the ASP.NET Core backend.
- **SQL Server** for database management.

### Steps
1. **Clone the repository**:
    ```bash
    git clone https://github.com/Vaish-123/ABC.git
    cd ABC
    ```

2. **Backend Setup**:
   - Navigate to the backend folder:
     ```bash
     cd backend
     ```
   - Restore dependencies:
     ```bash
     dotnet restore
     ```
   - Update database connection settings in `appsettings.json`.
   - Run migrations to set up the database:
     ```bash
     dotnet ef database update
     ```
   - Start the backend server:
     ```bash
     dotnet run
     ```

3. **Frontend Setup**:
   - Navigate to the frontend folder:
     ```bash
     cd ../frontend
     ```
   - Install Angular dependencies:
     ```bash
     npm install
     ```
   - Start the Angular application:
     ```bash
     ng serve
     ```

4. **Access the Website**:
   - Open your browser and go to `http://localhost:4200`.

## Usage
- **Creating a Family Tree**: Sign up to create a family tree, add family members, and define their relationships.
- **Managing Connections**: Easily add, edit, or remove family members and relationships.
- **Exploring the Tree**: Navigate the family tree interactively.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
