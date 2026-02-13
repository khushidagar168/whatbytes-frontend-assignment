
# Whatbytes Frontend Assignment

A responsive e-commerce product listing application built using **Next.js (App Router)** and **Tailwind CSS**.

---

## 🚀 Live Demo

👉 https://whatbytes-frontend-assignment-42bz.vercel.app/

---

## 📂 GitHub Repository

👉 https://github.com/khushidagar168/whatbytes-frontend-assignment

---

## 🛠 Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- React Context API
- Lucide React Icons
- Vercel (Deployment)

---

## ✨ Features

### 🏠 Home Page (/)
- Responsive product grid (3/2/1 layout)
- Category filtering
- Price range filtering
- Search filtering
- URL-based filters (`?category=electronics&price=500`)
- Dynamic rating display
- Featured product layout
- Clean UI with responsive design

---

### 📄 Product Detail Page (/product/[id])
- Dynamic routing with Next.js
- Large product image
- Product title, price, description
- Category display
- Functional quantity selector
- Add to Cart functionality
- Dynamic rating display

---

### 🛒 Cart Page (/cart)
- List of added products
- Quantity update controls
- Remove item option
- Order summary with total price
- Persistent cart using localStorage

---

## ⚙️ Logic Implemented

- Client-side filtering (search, category, price)
- URL query parameter synchronization
- Dynamic routing using App Router
- Cart state management using React Context API
- Persistent cart state using localStorage
- Conditional rendering for empty states
- Suspense boundary handling for `useSearchParams` (Next.js 16)

---

## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 📱 Responsive Design

- Desktop → 3-column layout
- Tablet → 2-column layout
- Mobile → 1-column layout
- Fully responsive across breakpoints

---

## 🧠 Architecture Decisions

- Used **React Context API** for lightweight global cart state management.
- Implemented **localStorage persistence** for cart data.
- Wrapped `useSearchParams()` inside a **Suspense boundary** to comply with Next.js 16 requirements.
- Used dynamic routing for product pages.
- Structured commits feature-by-feature to demonstrate development process.

---

## 📌 Deployment

The project is deployed on **Vercel**.

To deploy:

1. Push code to GitHub
2. Import repository in Vercel
3. Click Deploy

---

## 👤 Author

Khushi Dagar  
B.Tech – NIT Kurukshetra  
Frontend Developer Intern Candidate
