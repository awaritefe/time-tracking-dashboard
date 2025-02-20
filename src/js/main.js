import { initialiseData } from "./modules/data.js";

async function initializeApp() {
    try {
        // Initialise each module
        await initialiseData();
    } catch (error) {
        console.error("Error initializing application:", error);
    }
}

// Run when DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeApp);

// Export if needed for testing or other modules
export { initializeApp };
