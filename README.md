# GRAVE Resgate API

Rest API to manage and store internal data related to GRAVE Resgate organization - a rescue and emergency response management system.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Testing](#testing)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## ✨ Features

- **User Management**: Registration, authentication, authorization with JWT
- **Duty Management**: Schedule and manage rescue duties with different shifts
- **Vehicle Management**: Track vehicles, trips, and maintenance
- **Checklist System**: Multiple types of checklists for different roles:
  - Driver Checklist
  - Rescuer Checklist
  - Radio Operator Checklist
  - Duty Care Checklist
- **Request System**: Duty requests with position assignments
- **Settings Management**: Configurable system settings
- **Course Management**: Training course tracking
- **Role-Based Access Control**: Different permission levels (Admin, Voluntary, Trainee, etc.)

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: TypeORM
- **Authentication**: JWT (jsonwebtoken)
- **Validation**: Yup
- **Testing**: Jest
- **Documentation**: Swagger/OpenAPI
- **Logging**: Pino
- **Password Hashing**: bcrypt

## 📋 Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd grave_resgate_api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
DATABASE_HOST=localhost
DATABASE_NAME=grave_resgate
DATABASE_USERNAME=your_username
DATABASE_PASSWORD=your_password

# JWT Configuration
ACCESS_TOKEN_SECRET=your_jwt_secret
ACCESS_TOKEN_EXPIRES_IN=15m
REFRESH_TOKEN_EXPIRES_IN=7d

# Server Configuration
PORT=7100
NODE_ENV=development
```

## 🗄️ Database Setup

1. **Create PostgreSQL database**
   ```sql
   CREATE DATABASE grave_resgate;
   ```

2. **Run migrations**
   ```bash
   npm run typeorm migration:run
   ```

3. **Seed initial data** (if available)
   ```bash
   npm run seed
   ```

## 🏃‍♂️ Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm run build
npm start
```

The API will be available at `http://localhost:7100`

## 📚 API Documentation

Interactive API documentation is available via Swagger UI:

- **Development**: `http://localhost:7100/api-docs`
- **Generate Swagger docs**: `npm run swagger`

## 📁 Project Structure

```
src/
├── config/          # Configuration files
├── controllers/     # Route controllers
├── enum/           # TypeScript enums
├── interfaces/     # TypeScript interfaces
├── middlewares/    # Express middlewares
├── migrations/     # Database migrations
├── models/         # TypeORM entities
├── routes/         # API routes
├── schemas/        # Validation schemas (Yup)
├── services/       # Business logic
└── utils/          # Utility functions

tests/
├── integration/    # Integration tests
└── unit/          # Unit tests

docs/              # Documentation files
swagger/           # Swagger configuration
```

## 📜 Available Scripts

```bash
# Development
npm run dev              # Start development server with nodemon

# Building
npm run build           # Compile TypeScript to JavaScript
npm start              # Start production server

# Testing
npm test               # Run all tests
npm run test:coverage  # Run tests with coverage report

# Database
npm run typeorm        # TypeORM CLI commands

# Documentation
npm run swagger        # Generate Swagger documentation

# Code Quality
npm run lint           # Run ESLint
npm run format         # Format code with Prettier
```

## 🧪 Testing

The project includes both unit and integration tests using Jest.

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 🗃️ Database Schema

The system includes the following main entities:

### Core Entities
- **User**: System users with different roles and permissions
- **Duty**: Scheduled rescue duties with assigned personnel
- **Vehicle**: Emergency vehicles and equipment
- **Course**: Training courses for personnel

### Management Entities
- **DutyRequest**: Requests to participate in duties
- **VehicleTrip**: Vehicle usage tracking
- **Settings**: System configuration

### Checklist Entities
- **Checklist**: Checklist templates
- **ChecklistQuestion**: Individual questions
- **ChecklistFilled**: Completed checklist instances
- **DriverChecklist**, **RescuerChecklist**, **RadioOperatorChecklist**, **DutyCareChecklist**: Role-specific checklists

## 🔗 API Endpoints

### Authentication
- `POST /v1/user/login` - User login
- `POST /v1/user` - User registration

### User Management
- `GET /v1/user` - Get current user
- `GET /v1/user/list/active` - List active users
- `PUT /v1/user/:id` - Update user
- `DELETE /v1/user/:id` - Delete user

### Duty Management
- `GET /v1/duty/listByMonth/:month` - List duties by month
- `GET /v1/duty/get/:date/:shift` - Get specific duty
- `POST /v1/duty` - Create/update duty

### Vehicle Management
- `GET /v1/vehicle/list` - List all vehicles
- `GET /v1/vehicle/list/available` - List available vehicles
- `POST /v1/vehicle` - Create vehicle
- `PUT /v1/vehicle/:id` - Update vehicle

### Checklist Management
- `GET /v1/checklist/questions/:type` - Get checklist questions
- `POST /v1/driver-checklist` - Submit driver checklist
- `POST /v1/rescuer-checklist` - Submit rescuer checklist
- `POST /v1/radio-operator-checklist` - Submit radio operator checklist

### Settings
- `GET /v1/setting/get/:key` - Get setting value
- `POST /v1/setting/:key` - Update setting value

For complete API documentation, visit the Swagger UI at `/api-docs`.

## 🛡️ Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt for secure password storage
- **Role-Based Access Control**: Different permission levels
- **Request Validation**: Input validation using Yup schemas
- **SQL Injection Prevention**: TypeORM query builder protection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write tests for new features
- Use conventional commit messages
- Ensure code passes linting and formatting checks
- Update documentation as needed

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

For questions and support, please contact the development team or create an issue in the repository.

---

**Built with ❤️ for GRAVE Resgate Organization**
