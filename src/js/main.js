import { initialiseData } from "./modules/data.js";

function initializeApp() {
    try {
        // Initialise each module
        initialiseData();
    } catch (error) {
        console.error("Error initializing application:", error);
    }
}

// Run when DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeApp);

// Export if needed for testing or other modules
export { initializeApp };
