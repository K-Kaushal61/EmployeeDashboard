const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix UI alignment bug",
        "taskDescription": "Adjust padding and margins in the dashboard cards.",
        "taskDate": "2025-11-13",
        "category": "Frontend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "API response optimization",
        "taskDescription": "Improve backend API response time by caching.",
        "taskDate": "2025-11-10",
        "category": "Backend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Implement dark mode toggle",
        "taskDescription": "Add toggle button and theme switch feature.",
        "taskDate": "2025-11-08",
        "category": "Frontend"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Database schema update",
        "taskDescription": "Add new fields for tracking employee performance.",
        "taskDate": "2025-11-13",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Write login validation",
        "taskDescription": "Implement form validation for login inputs.",
        "taskDate": "2025-11-11",
        "category": "Auth"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Integrate payment API",
        "taskDescription": "Connect Razorpay API for subscription payments.",
        "taskDate": "2025-11-07",
        "category": "API"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "UI redesign for settings page",
        "taskDescription": "Update layout with new card components.",
        "taskDate": "2025-11-09",
        "category": "UI/UX"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Test user authentication",
        "taskDescription": "Verify login/logout and session persistence.",
        "taskDate": "2025-11-13",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Setup GitHub Actions",
        "taskDescription": "Add CI/CD workflow for automatic deployment.",
        "taskDate": "2025-11-10",
        "category": "DevOps"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Design dashboard charts",
        "taskDescription": "Use Recharts to visualize performance data.",
        "taskDate": "2025-11-09",
        "category": "Frontend"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create admin route protection",
        "taskDescription": "Ensure only admin can access dashboard routes.",
        "taskDate": "2025-11-13",
        "category": "Auth"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Integrate email service",
        "taskDescription": "Add Nodemailer for sending notifications.",
        "taskDate": "2025-11-11",
        "category": "Backend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Setup Docker container",
        "taskDescription": "Containerize the project for deployment.",
        "taskDate": "2025-11-08",
        "category": "DevOps"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Optimize front-end bundle size",
        "taskDescription": "Reduce React build size by removing unused dependencies.",
        "taskDate": "2025-11-13",
        "category": "Performance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix mobile responsiveness",
        "taskDescription": "Adjust CSS and Tailwind breakpoints.",
        "taskDate": "2025-11-10",
        "category": "Frontend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Deploy to AWS EC2",
        "taskDescription": "Upload build and setup Nginx for deployment.",
        "taskDate": "2025-11-07",
        "category": "Deployment"
      }
    ]
  }
]

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
]


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
} 

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return{employees, admin}
} 