# E-Commerce Application

## Project Description
This is a full-stack e-commerce application built with a React frontend and a Node.js/Express backend. The application allows users to browse products, add them to a cart, and manage their shopping experience. It also integrates with a Redux store for state management.

## Project Structure
```
f:\ecommerce
├── backend
│   ├── server.js
│   ├── routes
│   ├── controllers
│   └── models
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── redux
│   │   └── App.js
└── README.md
```

## Technologies Used
### Frontend:
- React
- Redux Toolkit
- Tailwind CSS
- Axios

### Backend:
- Node.js
- Express.js
- Used in-house memory 

## Features
- User authentication and authorization
- Product listing
- Add to cart functionality
- Responsive design
- State management using Redux

## APIs
The backend provides the following APIs:
1. **GET /api/data** - Fetch all products
2. **POST /api/cart** - Add a product to the cart
3. **GET /api/cart** - Fetch cart items
4. **POST /api/auth/login** - User login
5. **POST /api/auth/register** - User registration

## Setup Instructions

### Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
   ```
3. Start the backend server:
   ```bash
   npx nodemon index.js
   ```

### Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Full Project Setup
1. Start the backend server first.
2. Start the frontend server.
3. Open your browser and navigate to `http://localhost:3000`.

## How the Frontend Was Developed
1. **Component Structure**: The frontend is divided into reusable components such as `Navbar`, `Footer`, and pages like `Home`.
2. **State Management**: Redux Toolkit is used to manage global state, including user authentication and cart functionality.
3. **API Integration**: Axios is used to fetch data from the backend and handle API requests.
4. **Styling**: Tailwind CSS is used for responsive and modern UI design.

## Future Enhancements
- Add payment gateway integration.
- Implement order history and tracking.
- Add product reviews and ratings.

## Contributing
Feel free to fork this repository and submit pull requests for any improvements or bug fixes.

## License
This project is licensed under the MIT License.