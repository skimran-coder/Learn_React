# Food Store App 🍽️

Food Store App is a dynamic, fully functional food delivery platform built with modern technologies. It utilizes Swiggy's live APIs to provide a seamless experience for users to explore, search, and order from restaurants. The app offers advanced features, a beautifully designed UI/UX, and a robust backend for API management.

---

## Features 🚀

### Frontend

- **Dynamic Location-Based Data**:
  - Leverages the user's live location using the Geolocation API.
  - Allows users to search for any serviceable location by Swiggy and view restaurant data.
- **Category Carousels**:

  - Displays various food categories.
  - Clicking on a category navigates to a dedicated page with restaurants offering the selected category.

- **Restaurant Cards**:

  - Features a carousel of top restaurants.
  - Includes sorting options like _Fast Delivery_, _Offers_, and _Rating_ for online food delivery cards.

- **Restaurant Details Page**:

  - Clicking on a restaurant card opens a detailed page with menu items fetched dynamically.

- **Search Functionality**:

  - Search restaurants, dishes, and cuisines dynamically.
  - Clicking a search result opens the respective restaurant or dish page.

- **Responsive Design**:
  - Top navigation bar for larger screens.
  - Fixed bottom navigation bar for mobile users.

### Backend

- **Proxy Server for Swiggy API**:
  - Backend built with TypeScript and Express.js.
  - Bypasses CORS issues by fetching data from Swiggy APIs and serving it to the frontend.

### General

- **No Hardcoded Data**:
  - Fully dynamic data based on the user's location and Swiggy's API responses.
- **Sorting and Filtering**:

  - Options to sort restaurant results by offers, delivery speed, and ratings.

- **Tech Stack**:
  - **Frontend**: React, Vite, Tailwind CSS.
  - **Backend**: TypeScript, Express.js.

---

## Installation 🛠️

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/skimran-coder/Food-App.git
cd food-store-app
```
````

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
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

---

## Usage 🌟

1. Allow location permissions for the app to fetch data for your area.
2. Explore food categories or top restaurants through intuitive carousels.
3. Use the search bar to find specific dishes, cuisines, or restaurants.
4. Click on any card to open detailed pages for restaurants or dishes.
5. Sort restaurant cards by _Fast Delivery_, _Offers_, or _Rating_.

---

## Technologies Used 🛠️

- **Frontend**:

  - React.js
  - Vite
  - Tailwind CSS

- **Backend**:

  - TypeScript
  - Express.js

- **APIs**:
  - Swiggy Live APIs
  - Geolocation API

---

## Screenshots 📸

### Homepage

_Showcase of categories and top restaurant carousels._

### Category Page

_Display of restaurants offering the selected food category._

### Search Functionality

_Search results for restaurants, dishes, or cuisines._

### Restaurant Details Page

_Detailed menu items for a selected restaurant._

---

## Contribution 🤝

Contributions are welcome! If you have any suggestions or improvements, feel free to fork the repository and submit a pull request.

---

## Acknowledgements 🙏

- [Swiggy APIs](https://www.swiggy.com/)

---

## Contact 📞

For inquiries or support, feel free to reach out:

- **Email**: your-email@example.com
- **GitHub**: [Your GitHub](https://github.com/skimran-coder)

---

**Enjoy your food journey with Food Store App!** 🎉
