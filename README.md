# Sample Leave Management System

This is a React-based project designed to manage leave requests and other related functionalities.


## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/swasth.git
cd swasth
npm install
```

## Usage
```bash
npm run dev
```

This will start the application on http://localhost:3000.


## Folder Structure
The project structure is as follows:

```bash
.
├── README.md
├── src
│   ├── App.tsx
│   ├── assets
│   ├── components
│   │   ├── Footer
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   ├── Header
│   │   │   ├── Header.tsx
│   │   │   └── index.ts
│   │   ├── Sidebar
│   │   │   ├── Sidebar.styles..tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── index.ts
│   │   └── Toast
│   │       ├── Toast.tsx
│   │       └── index.ts
│   ├── constants
│   │   ├── index.ts
│   │   └── routes.ts
│   ├── data
│   │   ├── admin.json
│   │   └── leaves.json
│   ├── elements
│   │   ├── Select
│   │   │   ├── Select.tsx
│   │   │   ├── Select.types.ts
│   │   │   └── index.ts
│   │   └── TextField
│   │       ├── TextField.styles.ts
│   │       ├── TextField.tsx
│   │       ├── TextField.types.ts
│   │       └── index.ts
│   ├── features
│   │   ├── Authentication
│   │   │   ├── Authentication.api.ts
│   │   │   ├── Authentication.schema.ts
│   │   │   ├── Authentication.tsx
│   │   │   └── index.ts
│   │   ├── LeaveDashboard
│   │   │   ├── LeaveDashboard.api.tsx
│   │   │   ├── LeaveDashboard.tsx
│   │   │   └── index.ts
│   │   ├── LeaveForm
│   │   │   ├── LeaveForm.schema.ts
│   │   │   ├── LeaveForm.tsx
│   │   │   └── index.ts
│   │   └── LeaveRequests
│   │       ├── LeaveRequests.tsx
│   │       └── index.ts
│   ├── hooks
│   │   ├── useAuth.ts
│   │   └── useGetUserInfo.ts
│   ├── layout
│   │   └── DashboardLayout
│   │       ├── DashboardLayout.tsx
│   │       └── index.ts
│   ├── main.tsx
│   ├── pages
│   │   ├── Dashboard
│   │   │   ├── Dashboard.tsx
│   │   │   └── index.ts
│   │   └── Login
│   │       ├── Login.tsx
│   │       └── index.ts
│   ├── reducers
│   │   ├── globalToast.ts
│   │   └── leaveRequest.ts
│   ├── routes.tsx
│   ├── store.ts
│   ├── styles
│   │   └── theme.ts
│   ├── types
│   │   └── index.ts
│   ├── utils
│   │   └── index.ts
│   └── vite-env.d.ts
├── tsconfig.json
```