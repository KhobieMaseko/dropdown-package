/**
 * A reusable dropdown menu component
 * @class
 */
class Dropdown {
  /**
   * Create a dropdown instance
   * @param {HTMLElement} element - The dropdown container element
   */
  constructor(element) {
    this.element = element;
    this.toggle = element.querySelector('.dropdown-toggle');
    this.content = element.querySelector('.dropdown-content');

    // Initialize dropdown functionality
    this.toggle.addEventListener('click', () => this.toggleDropdown());

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.element.contains(e.target)) {
        this.content.classList.remove('show');
      }
    });
  }

  /**
   * Toggle the dropdown's visibility
   */
  toggleDropdown() {
    this.content.classList.toggle('show');
  }
}

/**
 * Initialize all dropdowns matching the selector
 * @param {string} [selector='.dropdown'] - CSS selector for dropdown elements
 */
function initDropdowns(selector = '.dropdown') {
  document.querySelectorAll(selector).forEach(dropdownElement => {
    new Dropdown(dropdownElement);
  });
}

// Export for both CommonJS and ES modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Dropdown,
    initDropdowns
  };
} else if (typeof window !== 'undefined') {
  window.Dropdown = Dropdown;
  window.initDropdowns = initDropdowns;
}
