import { Card, CardContent } from "./ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About Me
          </h2>

          <Card className="border-2">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I’m Siddhraj Thakor, an aspiring sports analyst with a
                   deep passion for football and data science. Skilled in 
                  Python, Pandas and machine learning, 
                  I specialize in analyzing match data, player performance,
                   and team strategies. My projects, like WhatsApp chat analysis 
                  and football scouting tools, showcase my ability to turn data 
                  into actionable insights. I’m eager to contribute to the 
                  sports analytics field, blending technical expertise with a love for the game.
                </p>

                <p>
                  With a focus on clean code, performance optimization, and user
                  experience, I strive to deliver solutions that not only meet
                  technical requirements but also delight users. I'm constantly
                  learning and adapting to new technologies to stay at the
                  forefront of the industry.
                </p>

                <p>
                  When I'm not coding, I enjoy watching football, movies, or web series.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
