'use server';

import { suggestOptimalScaling, SuggestOptimalScalingInput } from '@/ai/flows/suggest-optimal-scaling';

export async function getScalingSuggestion(input: SuggestOptimalScalingInput) {
    try {
        const result = await suggestOptimalScaling(input);
        return { success: true, data: result };
    } catch (error) {
        console.error("Error getting scaling suggestion:", error);
        return { success: false, error: 'Falha ao obter a sugestão da IA. Tente novamente.' };
    }
}
