/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyDtI5lxH3_fTZkROtpfqWYIXPCj3G7Zs9E";

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function run(prompt) {
    try {
        const chatSession = model.startChat({
            generationConfig,
            history: [
            ],
        });

        const result = await chatSession.sendMessage(prompt);
        console.log(result.response.text());
        return result.response.text();
    } catch (error) {
        console.error("Error in run function:", error);
        throw error;
    }
}

export default run;