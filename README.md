# **Dad Jokes App**

A simple and fun **React.js-based application** that fetches, displays, and manages **Dad Jokes** using the [icanhazdadjoke.com](https://icanhazdadjoke.com/) API. This app features functionality like pinning jokes, marking favorites, copying jokes to the clipboard, and clearing the joke list.

---

## **Features**
- Fetches random dad jokes from the API.
- Allows users to:
  - **Pin a joke** (one pinned joke at a time).
  - **Mark jokes as favorite**.
  - **Copy jokes to the clipboard** with feedback.
  - **Remove jokes** from the list.
  - **Clear the joke list** (requires unpinning any pinned joke).
- Includes a **progress bar** while fetching jokes.
- Fully responsive design with **animations and styled components**.

---

## **Installation**

### **Prerequisites**
- Node.js and npm installed.
- React.js environment set up.

### **Steps**
1. Clone this repository:
   ```bash
   git clone <repository-url>
2. Navigate to the project directory:
    ```bash
    cd dad-jokes-app
3. Install dependencies:
    ```bash
    npm install
4. Start the development server:
    ```bash
    npm start
5. Open your browser and visit:
    http://localhost:3000

---

## **Code Explanation**

### **JokeList.js**
- Manages the **state of jokes, pinned joke, and favorites**.
- Calls the **icanhazdadjoke API** to fetch random jokes.
- Includes functionality for:
  - **Fetching jokes.**
  - **Clearing the joke list** (disabled if the list is empty).
  - Handling **pinned jokes and favorites**.
  - Displaying a **progress bar while fetching jokes**.

---

### **Joke.js**
- A functional component to **render a single joke**.
- Includes buttons for:
  - **Marking the joke as a favorite.**
  - **Copying the joke to the clipboard.**
  - **Pinning/unpinning the joke.**
  - **Removing the joke from the list.**
- Handles **visual feedback** (e.g., "Copied!" message).

---

### **JokeList.css**
- Contains all **styling for the app**:
  - Sidebar, joke list, pinned jokes, and buttons.
  - Includes **animations** (e.g., progress bar, hover effects).
- Fully **responsive and mobile-friendly**.

---

### **Joke.css**
- Handles **styling for individual jokes** and their buttons.
- Includes **hover effects** and transitions for a **smooth user experience**.

---

## **How It Works**

### **Fetching Jokes**
- Click the **"Fetch Jokes"** button to fetch random jokes from the API.
- While fetching, a **progress bar** is displayed at the top of the app.

### **Pinning Jokes**
- You can **pin one joke at a time**. A pinned joke is shown in a dedicated section at the top of the app.
- To pin another joke, **unpin the currently pinned joke**.

### **Favorites**
- Mark any joke as a favorite by clicking the **"⭐ Favorite"** button.
- View all favorite jokes in the **Favorites section** at the bottom.
- **Remove jokes** from the favorites list.

### **Copying Jokes**
- Click **"📋 Copy"** to copy a joke to the clipboard.
- A **"Copied!" message** will appear for 2 seconds.

### **Clearing Jokes**
- The **"Clear Mind!"** button clears all jokes **except the pinned joke**.
- If a joke is pinned, an **alert** will prompt you to unpin it first.

---

## **Styling**

### **Colors**
- **Primary**: `#6200ea` (purple).
- **Secondary**: `#ffde03` (yellow).
- **Background**: `#f8f8f8` (light gray).

### **Transitions & Animations**
- **Smooth hover effects** on buttons.
- **Progress bar animation** while fetching jokes.

### **Responsive Design**
- Fully **optimized for desktop, tablet, and mobile**.

---

## **Future Enhancements**
- Add **joke filtering options** (e.g., based on categories or keywords).
- Allow **exporting favorite jokes** as a file (e.g., `.txt` or `.csv`).
- Implement **user authentication** to save jokes permanently.

---

## **License**

This project is licensed under the **MIT License**.
