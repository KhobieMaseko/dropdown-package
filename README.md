# Dropdown Package

A simple, reusable dropdown menu component with zero dependencies.

## Features
- Simple click-to-toggle functionality
- Lightweight (under 2KB minified)
- Easy to customize with your own CSS
- Supports multiple dropdowns on the same page
- Works with both CommonJS and ES modules

## Installation

```bash
npm install @khobie-maseko/dropdown-package
```

## Usage

1. Include the CSS in your project:
```html
<link rel="stylesheet" href="node_modules/@khobie-maseko/dropdown-package/dropdown.css">
```

2. Add the HTML structure:
```html
<div class="dropdown">
  <button class="dropdown-toggle">Menu</button>
  <div class="dropdown-content">
    <a href="#">Item 1</a>
    <a href="#">Item 2</a>
    <a href="#">Item 3</a>
  </div>
</div>
```

3. Initialize the dropdown:
```javascript
const { initDropdowns } = require('@khobie-maseko/dropdown-package');
// or if using ES modules:
// import { initDropdowns } from '@khobie-maseko/dropdown-package';

initDropdowns();
```

## API

### `initDropdowns(selector = '.dropdown')`
Initializes all dropdowns matching the given selector.

### `Dropdown` class
The underlying class that powers the dropdown functionality.


![dropdown-package](https://github.com/user-attachments/assets/e80c0270-7f8d-4676-87df-f90021cc6414)

