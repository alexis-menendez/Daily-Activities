import { type Request, type Response } from 'express';
import { OpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { StructuredOutputParser } from 'langchain/output_parsers';
import dotenv from 'dotenv';

dotenv.config();

// Get the OpenAI API key from the environment variables
const apiKey = '';//process.env.OPENAI_API_KEY;
let model: OpenAI;

if (apiKey) {
  // Initialize the OpenAI model if the API key is provided
  model = new OpenAI({ temperature: 0, openAIApiKey: apiKey, modelName: 'gpt-3.5-turbo' });
} else {
  console.error('OPENAI_API_KEY is not configured.');
}

// With a `StructuredOutputParser` we can define a schema for the output.
const parser = StructuredOutputParser.fromNamesAndDescriptions({
  // Define the output variables and their descriptions
  Korean: "The user's word or phrase translated in Korean",
  French: "The user's word or phrase translated in French",
  Spanish: "The user's word or phrase translated in Spanish",
  German: "The user's word or phrase translated in German"
});

const formatInstructions = parser.getFormatInstructions();

// Create a new prompt template for formatting prompts
const promptTemplate = new PromptTemplate({
  template: "You are a helpful translator that understands all of the current languages in the world. You will translate anything that is asked of you while also understanding that phrases and addages may get lost in translation. In those cases, you will return a translated version of the user's phrase into Korean, French, Spanish and German.\n{format_instructions}\n{text}",
  inputVariables: ["text"],
  partialVariables: { format_instructions: formatInstructions }
});

// Format the prompt using the prompt template with the user's text
const formatPrompt = async (text: string): Promise<string> => {
  return await promptTemplate.format({ text });
};

// Call the OpenAI API to get a response to the formatted prompt
const promptFunc = async (input: string): Promise<string> => {
  try {
    if (model) {
      return await model.invoke(input);
    }
    return "```json\n{\n  \"Korean\": \"번역된 사용자의 단어 또는 구문\",\n  \"French\": \"Le mot ou la phrase de l'utilisateur traduit en français\",\n  \"Spanish\": \"La palabra o frase del usuario traducida al español\",\n  \"German\": \"Das Wort oder der Satz des Benutzers ins Deutsche übersetzt\"\n}\n```"
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

// Handle the POST request to provide translations for the user's text
export const getTranslations = async (req: Request, res: Response): Promise<void> => {
  const userText: string = req.body.text;

  try {
    if (!userText) {
      res.status(400).json({ text: null, response: 'Please provide text in the request body.' });
      return;
    }

    const formattedPrompt: string = await formatPrompt(userText);
    const rawResponse: string = await promptFunc(formattedPrompt);
    const result: { [key: string]: string } = await parseResponse(rawResponse);
    res.json({ text: userText, prompt: formattedPrompt, response: rawResponse, formattedResponse: result });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    }
    res.status(500).json({ text: userText, prompt: null, response: 'Internal Server Error' });
  }
};
