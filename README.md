# HeritageHub  
![HeritageHub Screenshot](https://i.ibb.co.com/FkwNBc3X/Screenshot-308.png) 

A modern web platform dedicated to showcasing cultural heritage, historical sites, and traditional arts through an interactive and immersive experience.  



## 🚀 Features  
- **Artifact Discovery**: Explore a wide range of historical artifacts with detailed information.
- **User Contributions**: Registered users can add new artifacts to the collection.
- **Artifact Interactions**: Users can like/unlike artifacts to express their interest.
- **Authentication**: Secure user login and registration functionality using Firebase.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## 🛠️ Technologies Used  

- **Frontend:** React, React Router, Tailwind CSS, DaisyUI  
- **State Management & Data Fetching:** Axios, LocalForage  
- **Animations & Effects:** Framer Motion, AOS, Lottie-React, Animate.css, Swiper  
- **Backend & Authentication:** Firebase  
- **UI Enhancements:** React Icons, SweetAlert2, React Tooltip  
- **Development Tools:** Vite, ESLint, PostCSS  

## 📦 Dependencies  

### Core Dependencies  
```json
{
  "animate.css": "^4.1.1",
  "aos": "^2.3.4",
  "axios": "^1.7.9",
  "firebase": "^11.1.0",
  "framer-motion": "^11.15.0",
  "localforage": "^1.10.0",
  "lottie-react": "^2.4.0",
  "match-sorter": "^8.0.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-helmet-async": "^2.0.5",
  "react-icons": "^5.4.0",
  "react-router-dom": "^7.1.0",
  "react-tooltip": "^5.28.0",
  "sort-by": "^1.2.0",
  "sweetalert2": "^11.15.3",
  "swiper": "^11.1.15"
}
```

### Development Dependencies  
```json
{
  "@eslint/js": "^9.17.0",
  "@types/react": "^18.3.17",
  "@types/react-dom": "^18.3.5",
  "@vitejs/plugin-react": "^4.3.4",
  "autoprefixer": "^10.4.20",
  "daisyui": "^4.12.22",
  "eslint": "^9.17.0",
  "eslint-plugin-react": "^7.37.2",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.16",
  "globals": "^15.13.0",
  "postcss": "^8.4.49",
  "tailwindcss": "^3.4.17",
  "vite": "^6.0.3"
}
```

## 📌 Environment Variables  

Create a `.env` file in the root directory and add:  

```plaintext
VITE_apiKey=YOUR_FIREBASE_API_KEY
VITE_authDomain=YOUR_AUTH_DOMAIN
VITE_projectId=YOUR_PROJECT_ID
VITE_storageBucket=YOUR_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_SENDER_ID
VITE_appId=YOUR_APP_ID
```

> **⚠️ Note:** Never expose sensitive keys in public repositories.  

## 🏗️ Installation & Setup  

Follow these steps to run the project locally:  

1. **Clone the repository:**  
   ```sh
   git clone https://github.com/TaiebaTasnim/heritagehub.git
   cd heritagehub
   ```

2. **Install dependencies:**  
   ```sh
   npm install
   ```

3. **Set up environment variables:**  
   - Create a `.env` file as mentioned above.  

4. **Start the development server:**  
   ```sh
   npm run dev
   ```

5. **Build for production (optional):**  
   ```sh
   npm run build
   ```

## 🌍 Live Demo  

Check out the live version: [HeritageHub Live](https://heritagehub-68e63.web.app) <!-- Replace with actual URL -->




