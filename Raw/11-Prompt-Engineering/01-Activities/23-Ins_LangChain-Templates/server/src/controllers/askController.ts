import { type Request, type Response } from 'express';
import { OpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import dotenv from 'dotenv';

dotenv.config();

// Get the OpenAI API key from the environment variables
const apiKey = process.env.OPENAI_API_KEY;
let model: OpenAI;

if (apiKey) {
  // Initialize the OpenAI model if the API key is provided
  model = new OpenAI({ temperature: 0, openAIApiKey: apiKey, modelName: 'gpt-3.5-turbo' });
} else {
  console.error('OPENAI_API_KEY is not configured.');
}

// Create a new prompt template for formatting prompts
const promptTemplate = new PromptTemplate({
  template: "You are a programming expert and will answer the user’s coding questions as thoroughly as possible using TypeScript. If the question is unrelated to coding, do not answer.\n{question}",
  inputVariables: ["question"]
});

// Format the prompt using the prompt template with the user's question
const formatPrompt = async (question: string): Promise<string> => {
  return await promptTemplate.format({ question });
};

// Call the OpenAI API to get a response to the formatted prompt
const promptFunc = async (input: string) => {
  try {
    if (model) {
      return await model.invoke(input);
    }
    return `No OpenAI API key provided. Unable to provide a response.`;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Handle the POST request to ask a question
export const askQuestion = async (req: Request, res: Response): Promise<void> => {
  const userQuestion: string = req.body.question;

  try {
    if (!userQuestion) {
      res.status(400).json({ question: null, response: 'Please provide a question in the request body.' });
      return;
    }

    const formattedPrompt: string = await formatPrompt(userQuestion);
    const result: string = await promptFunc(formattedPrompt);
    res.json({ question: userQuestion, prompt: formattedPrompt, response: result });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    }
    res.status(500).json({ question: userQuestion, prompt: null, response: 'Internal Server Error' });
  }
};
