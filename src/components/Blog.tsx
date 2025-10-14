import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { BookOpen, ExternalLink, Rss } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPost {
  title: string;
  description: string;
  platform: "Medium" | "Substack";
  link: string;
  date: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export default function Blog() {
  const featuredPosts: BlogPost[] = [
    {
      title: "I Couldn’t Find the Premier League 2024/25 Dataset on Kaggle — So I Scraped It Myself After 4 Days of Battling Bugs!",
      description: "A guide to scrape data from the Premier League website using Python, BeautifulSoup, and Pandas for football analytics.",
      platform: "Medium",
      link: "https://medium.com/@siddhraj761/i-couldnt-find-the-premier-league-2024-25-dataset-on-kaggle-so-i-scraped-it-myself-after-4-days-9ff57c04c0da",
      date: "2025"
    },
    {
      title: "Can Data Uncover Football’s Next Superstar? A Deep Dive into Football Manager 23 Wonderkids",
      description: "A deep dive into Football Manager 2023 wonderkids using data analysis and visualization to identify potential future stars in football.",
      platform: "Substack",
      link: "https://open.substack.com/pub/siddhraj/p/can-data-uncover-footballs-next-superstar?r=6gab7t&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
      date: "2025"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Blog & Writing
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sharing insights, tutorials, and thoughts on Football analysis, web development, and programming.
            </p>
          </div>

          {/* Platform Links */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-card to-accent/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Medium</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Dedicated Data Scientist specializing in Football Analytics and Machine Learning Insights, using advanced tools to uncover patterns and enhance decision-making in sports, symbolized by a soccer ball and chart.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full" 
                  size="lg"
                  asChild
                >
                  <a 
                    href="https://medium.com/@siddhraj761" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Visit Medium Profile
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-card to-accent/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Rss className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Substack</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Exploring Football Analytics and Data Science with in-depth articles and stories, unveiling the game's future through data-driven methods, symbolized by a football and chart.                
              </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full" 
                  size="lg"
                  asChild
                >
                  <a 
                    href="https://siddhraj.substack.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Subscribe on Substack
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Featured Posts */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h3 
              className="text-2xl font-semibold mb-6 text-center"
              variants={itemVariants}
            >
              Featured Articles
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                >
                  <Card className="border hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 bg-card">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                          {post.platform}
                        </span>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <CardTitle className="text-xl hover:text-primary transition-colors">
                        <a href={post.link} target="_blank" rel="noopener noreferrer">
                          {post.title}
                        </a>
                      </CardTitle>
                      <CardDescription>{post.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={post.link} target="_blank" rel="noopener noreferrer">
                          Read More
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              New articles published regularly. Follow me to stay updated!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
