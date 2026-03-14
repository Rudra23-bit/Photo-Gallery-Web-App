# 📸 Photo Gallery Web App:

A responsive **Photo Gallery Web Application** built with **React, Vite, and Tailwind CSS**.  
The app fetches images from the Picsum Photos API and displays them in a responsive grid with real-time search and a favourites feature.

---

## 🚀 Tech Stack:
- React.js
- Vite
- Tailwind CSS
- JavaScript (ES6+)
- REST API
- localStorage

---

## ✨ Features:

### 1. Project Setup
- Built using **React + Vite**
- Styled with **Tailwind CSS**
- No external UI libraries used

### 2. Fetch Photos from API:
- Fetches **30 photos** from: https://picsum.photos/v2/list?limit=30
- Displays a **loading spinner** while fetching data
- Shows an **error message** if the API request fails

### 3. Responsive Photo Grid:
Photos are displayed in a responsive layout:

| Device | Columns |
|--------|---------|
| Desktop|    4    |
| Tablet |    2    |  
| Mobile |    1    |   

Each photo card includes:
- Photo
- Author name
- Favourite (❤️) button

### 4. Real-Time Search Filter:
- Search input filters photos **by author name**
- Filtering happens **in real-time**
- No page reload
- No additional API requests

### 5. Favourites with useReducer:
- Heart icon toggles photos as favourites
- State managed using **React useReducer**
- Favourites persist using **localStorage**

### 6. Custom Hook:
Fetch logic is implemented in a custom hook **useFetchPhotos** which returns:
- `photos`
- `loading`
- `error`

This separates data fetching logic from UI components.

### 7. Performance Optimization:
- **useCallback** is used to optimize the search handler.
- **useMemo** is used to efficiently compute the filtered photo list.


### 8. For Desktop the screen while look like this:


![image alt]()
### 8. For Tablet the screen while look like this:

![image alt]()
### 8. For Mobile the screen while look like this:


![image alt]()





