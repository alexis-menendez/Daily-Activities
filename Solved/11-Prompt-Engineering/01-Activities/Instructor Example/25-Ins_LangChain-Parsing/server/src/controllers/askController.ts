import { type Request, type Response } from 'express';
import { OpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { StructuredOutputParser } from 'langchain/output_parsers';
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

// With a `StructuredOutputParser` we can define a schema for the output.
const parser = StructuredOutputParser.fromNamesAndDescriptions({
  code: "TypeScript code that answers the user's question",
  explanation: 'detailed explanation of the example code provided',
});

const formatInstructions = parser.getFormatInstructions();

// Create a new prompt template for formatting prompts
const promptTemplate = new PromptTemplate({
  template: "You are a programming expert and will answer the user’s coding questions as thoroughly as possible using TypeScript. If the question is unrelated to coding, do not answer.\n{format_instructions}\n{question}",
  inputVariables: ["question"],
  partialVariables: { format_instructions: formatInstructions }
});

// Format the prompt using the prompt template with the user's question
const formatPrompt = async (question: string): Promise<string> => {
  return await promptTemplate.format({ question });
};

// Call the OpenAI API to get a response to the formatted prompt
const promptFunc = async (input: string): Promise<string> => {
  try {
    if (model) {
      return await model.invoke(input);
    }
    return "```json\n{\n    \"code\": \"No OpenAI API key provided.\",\n    \"explanation\": \"Unable to provide a response.\"\n}\n```"
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Parse the response from the model
const parseResponse = async (response: string): Promise<{ [key: string]: string }> => {
  try {
    return await parser.parse(response);
  } catch (err) {
    console.error('Error in parseResponse:', err);
    return { error: 'Failed to parse the response from the model.' };
  }
};

// Handle the POST request to ask a question
export const askQuestion = async (req: Request, res: Response): Promise<void> => {
  const userQuestion: string = req.body.question;

  try {
    if (!userQuestion) {
      res.status(400).json({ question: null, response: 'Please provide a question in the request body.', formattedResponse: null });
      return;
    }

    const formattedPrompt: string = await formatPrompt(userQuestion);
    const rawResponse: string = await promptFunc(formattedPrompt);
    const result: { [key: string]: string } = await parseResponse(rawResponse);
    res.json({ question: userQuestion, prompt: formattedPrompt, response: rawResponse, formattedResponse: result });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    }
    res.status(500).json({ question: userQuestion, prompt: null, response: 'Internal Server Error', formattedResponse: null });
  }
};
