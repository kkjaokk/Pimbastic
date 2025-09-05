'use server';

/**
 * @fileOverview An AI agent to suggest optimal data scaling and structure for platform development.
 *
 * - suggestOptimalScaling - A function that handles the suggestion process.
 * - SuggestOptimalScalingInput - The input type for the suggestOptimalScaling function.
 * - SuggestOptimalScalingOutput - The return type for the suggestOptimalScaling function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestOptimalScalingInputSchema = z.object({
  platformDescription: z
    .string()
    .describe('A description of the platform being developed, including its expected user base, data volume, and key functionalities.'),
  dataRetrievalRequirements: z
    .string()
    .describe('A description of the data retrieval requirements, including frequency, latency, and complexity of queries.'),
});
export type SuggestOptimalScalingInput = z.infer<typeof SuggestOptimalScalingInputSchema>;

const SuggestOptimalScalingOutputSchema = z.object({
  suggestedScalingStrategy: z
    .string()
    .describe('A detailed suggestion for optimal data scaling and structure, including specific technologies and techniques.'),
  rationale: z
    .string()
    .describe('A clear rationale explaining why the suggested scaling strategy is appropriate for the given platform and data retrieval requirements.'),
});
export type SuggestOptimalScalingOutput = z.infer<typeof SuggestOptimalScalingOutputSchema>;

export async function suggestOptimalScaling(
  input: SuggestOptimalScalingInput
): Promise<SuggestOptimalScalingOutput> {
  return suggestOptimalScalingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestOptimalScalingPrompt',
  input: {schema: SuggestOptimalScalingInputSchema},
  output: {schema: SuggestOptimalScalingOutputSchema},
  prompt: `You are an experienced software architect specializing in scalable data solutions.

  Based on the provided platform description and data retrieval requirements, suggest an optimal data scaling and structure strategy.
  Provide a clear rationale for your suggestion, explaining why it is suitable for the given context.

  Platform Description: {{{platformDescription}}}
  Data Retrieval Requirements: {{{dataRetrievalRequirements}}}

  Consider factors such as data volume, query complexity, read/write ratio, and desired latency.

  Your suggestion should include specific technologies, data structures, and techniques.
`,
});

const suggestOptimalScalingFlow = ai.defineFlow(
  {
    name: 'suggestOptimalScalingFlow',
    inputSchema: SuggestOptimalScalingInputSchema,
    outputSchema: SuggestOptimalScalingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
