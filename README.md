# Food Delivery App

A React-based food delivery application with a modern UI and component-driven architecture.

## Project Structure

```
src/
├── components/
│   ├── index.js
│   ├── About/
│   │   ├── About.js
│   │   └── About.css
│   ├── AllProducts/
│   │   ├── getAllProducts.js
│   │   ├── getAllProducts.css
│   │   └── ShimmerUI.js
│   ├── Contact/
│   │   ├── Contact.js
│   │   └── Contact.css
│   ├── Home/
│   │   ├── HomeComponent.js
│   │   └── Home.css
│   ├── NavBar/
│   │   ├── navBar.js
│   │   ├── navBar.css
│   │   └── NotFound.js
│   ├── ProductCard/
│   │   ├── Product.js
│   │   ├── Product.css
│   │   └── ProductShimmer.js
│   └── styling/
├── utils/
│   └── constants.js
```

## Components Overview

### **NavBar**
- Logo display
- Navigation links (About, Contact Us)
- Cart functionality
- User Profile section

### **Home**
- Main landing page with search container
- Filter options for restaurants

### **AllProducts**
- Displays restaurant listings with shimmer loading state
- Renders multiple restaurant cards

### **ProductCard**
- Individual restaurant card component
- Displays restaurant image, name, and rating
- Includes shimmer UI for loading state

### **About**
- Application information page

### **Contact**
- Contact information and form

### **NotFound**
- 404 error page

## Features

- Responsive navigation bar with cart and profile
- Search and filter functionality for restaurants
- Shimmer UI for smooth loading experience
- Product card grid layout
- Modular component architecture

## Styling

- CSS files co-located with components
- Centralized styling directory for shared styles
- Responsive design implementation

## Utils

- **constants.js** - Application-wide constants and configuration