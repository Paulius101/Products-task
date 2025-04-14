This project demonstrates a modular Angular 19+ application using the standalone API, Signals, RxJS, routing, and service-based architecture.

## 🚀 Features

- ✅ Angular 19 with **Standalone Components**
- 🧠 **Global state management** using **Signals**
- 🔄 **Real-time updates** using **RxJS Subjects**
- 🛍️ Shopping cart with **add/remove** functionality
- 🧩 **Routing** between Product List, Product Details, and Cart
- 🧪 Unit tests using **Jasmine/Karma**
- 💨 Optimized with `OnPush` change detection

## 🛠 Setup & Run

1. **Install dependencies**

```bash
npm install
```

2. **Run the development server**

```bash
npm start
```

3. **Navigate to http://localhost:4200/**

4. **Run unit test with coverage**

```bash
npm test
```

**Results will appear in /coverage/index.html**

## 🧠 My Approach

### 🔗 Standalone Components
The application avoids using `NgModules`, leveraging `provideRouter()` and `bootstrapApplication()` for a modular and modern Angular architecture.

### 🧪 Signals for State
Product and cart state are managed using Angular **Signals** for efficient and reactive state sharing across components.

### 🔁 RxJS Subject for Events
An **RxJS Subject** in the `ProductService` emits cart change events, allowing real-time notifications and UI updates when items are added or removed.

### 🎨 UI with PrimeNG & PrimeFlex
The user interface is styled using **[PrimeNG](https://www.primefaces.org/primeng/)** components and **[PrimeFlex](https://www.primefaces.org/primeflex/)** for layout utilities.

### 🧭 Routing

- `/products` – Displays the product list
- `/products/:id` – Shows product details
- `/cart` – Displays the shopping cart

### ✅ Unit Testing

The `ProductService` is unit tested to cover:

- ✅ Fetching product data
- ✅ Managing cart state with Signals
- ✅ Emitting real-time events via `Subject`
