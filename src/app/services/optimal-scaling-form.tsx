"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getScalingSuggestion } from './actions';
import type { SuggestOptimalScalingOutput } from '@/ai/flows/suggest-optimal-scaling';
import { Loader2, Sparkles } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  platformDescription: z.string().min(50, "Descreva sua plataforma com pelo menos 50 caracteres."),
  dataRetrievalRequirements: z.string().min(50, "Descreva seus requisitos com pelo menos 50 caracteres."),
});

type FormValues = z.infer<typeof formSchema>;

export default function OptimalScalingForm() {
  const [result, setResult] = useState<SuggestOptimalScalingOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      platformDescription: "",
      dataRetrievalRequirements: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setResult(null);
    setError(null);

    const response = await getScalingSuggestion(data);

    if (response.success && response.data) {
      setResult(response.data);
    } else {
      setError(response.error || "Ocorreu um erro desconhecido.");
    }
    setIsLoading(false);
  };

  return (
    <Card className="w-full max-w-lg mx-auto border-accent shadow-accent/20 shadow-lg">
        <CardContent className="p-6">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
                control={form.control}
                name="platformDescription"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Descrição da Plataforma</FormLabel>
                    <FormControl>
                    <Textarea placeholder="Ex: Plataforma de apostas com 1 milhão de usuários, picos de acesso durante eventos..." {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="dataRetrievalRequirements"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Requisitos de Recuperação de Dados</FormLabel>
                    <FormControl>
                    <Textarea placeholder="Ex: Baixa latência para odds ao vivo, queries complexas para relatórios..." {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={isLoading}>
                {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                <Sparkles className="mr-2 h-4 w-4" />
                )}
                Gerar Sugestão com IA
            </Button>
            </form>
        </Form>

        {result && (
            <div className="mt-6 space-y-4">
                <Alert>
                    <Sparkles className="h-4 w-4" />
                    <AlertTitle className="font-headline">Sugestão de Estratégia de Escalabilidade</AlertTitle>
                    <AlertDescription className="prose prose-sm max-w-none">
                        <h4 className="font-semibold mt-4">Estratégia Sugerida:</h4>
                        <p>{result.suggestedScalingStrategy}</p>
                        <h4 className="font-semibold mt-4">Justificativa:</h4>
                        <p>{result.rationale}</p>
                    </AlertDescription>
                </Alert>
            </div>
        )}

        {error && (
            <div className="mt-6">
                 <Alert variant="destructive">
                    <AlertTitle>Erro</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            </div>
        )}
        </CardContent>
    </Card>
  );
}
