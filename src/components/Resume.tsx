import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Eye, Download } from "lucide-react";

const Resume = () => {
  const resumeUrl = "/resume.pdf";

  return (
    <section id="resume" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Resume
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            My journey so far ...
          </p>
          <Card className="p-6">
            {/* PDF Preview */}
            <div className="mb-6 rounded-lg overflow-hidden border border-border">
              <iframe
                src={resumeUrl}
                className="w-full h-[800px]"
                title="Resume Preview"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
              <Button 
                onClick={() => window.open(resumeUrl, '_blank')}
                variant="outline"
                className="gap-2"
              >
                <Eye className="h-4 w-4" />
                View Full Screen
              </Button>
              
              <Button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = resumeUrl;
                  link.download = "Siddhraj_Thakor_Resume.pdf";
                  link.click();
                }}
                className="gap-2"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;