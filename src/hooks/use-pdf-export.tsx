import html2pdf from 'html2pdf.js';
import { toast } from '@/hooks/use-toast';

export const usePdfExport = () => {
  const exportToPdf = async () => {
    try {
      const element = document.body;
      
      const opt = {
        margin: 0.5,
        filename: 'iftekhar-hossain-portfolio.pdf',
        image: { type: 'jpeg' as const, quality: 1 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          logging: false,
          scrollY: -window.scrollY,
          windowWidth: document.documentElement.scrollWidth,
          windowHeight: document.documentElement.scrollHeight,
          backgroundColor: '#0A0A0A',
          imageTimeout: 0,
          allowTaint: true
        },
        jsPDF: { 
          unit: 'mm' as const, 
          format: 'a4', 
          orientation: 'portrait' as const,
          compress: true
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };

      toast({
        title: "Generating PDF...",
        description: "Please wait while we create your PDF",
      });

      await html2pdf().set(opt).from(element).save();
      
      toast({
        title: "Success!",
        description: "Portfolio exported as PDF successfully",
      });
    } catch (error) {
      console.error('PDF export error:', error);
      toast({
        title: "Export Failed",
        description: "Unable to generate PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  return { exportToPdf };
};
