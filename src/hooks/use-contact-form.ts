import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitForm = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Bericht verzonden!",
        description: "We nemen binnen 24 uur contact met u op.",
        duration: 5000,
      });

      return { success: true };
    } catch (error: any) {
      console.error('Contact form error:', error);
      
      toast({
        variant: "destructive",
        title: "Fout bij verzenden",
        description: "Er ging iets mis. Probeer opnieuw of bel ons direct: +31 6 27 34 42 88",
        duration: 7000,
      });

      return { success: false };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitForm,
    isSubmitting
  };
};