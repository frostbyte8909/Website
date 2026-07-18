/**
 * ACCCOLADES & WINS CONFIGURATION
 * 
 * To add a new laurel or event win:
 * 1. Open `src/data/accolades.json`
 * 2. Add a new object to the JSON array in the following format:
 *    {
 *      "title": "Event/Laurel Name",
 *      "date": "Month Year",
 *      "description": "Details about the win...",
 *      "image": "/your-image.png" // Place images in the `public` folder and reference them like this
 *    }
 */

import accoladesData from "../data/accolades.json";

export const achievements = accoladesData;
