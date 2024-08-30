// to run the test on the chromium browser: npx playwright test --project='chromium'
import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

// Define the Azure Function URLs
const getFunctionUrl = process.env.GET_FUNCTION_URL;
const postFunctionUrl = process.env.POST_FUNCTION_URL;

if (!getFunctionUrl || !postFunctionUrl) {
    throw new Error("Environment variables GET_FUNCTION_URL and POST_FUNCTION_URL must be defined");
}

test('Check if Count increments correctly', async ({ request }) => {    
    
    // First GET request to check the initial Count value    
    const firstGetResponse = await request.get(getFunctionUrl);
    const firstGetResponseBody = await firstGetResponse.json();
    
    expect(firstGetResponseBody).toHaveProperty('Count');

    const initialCount = firstGetResponseBody.Count;
    expect(typeof initialCount).toBe('number');
    
    // Make a POST request to increment the Count
    await request.post(postFunctionUrl);

    // Second GET request to check the final Count value
    const secondGetResponse = await request.get(getFunctionUrl);
    const secondGetResponseBody = await secondGetResponse.json();
    
    expect(secondGetResponseBody).toHaveProperty('Count');
    
    const finalCount = secondGetResponseBody.Count;
    expect(typeof finalCount).toBe('number');

    // Ensure the 'Count' is incremented by 1 after the POST request
    expect(finalCount).toBe(initialCount + 1);
});
