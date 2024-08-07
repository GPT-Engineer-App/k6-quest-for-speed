import { useState, useEffect } from "react";
import { Cat, Heart, Info, Paw, Star, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

const catBreeds = [
  { name: "Siamese", origin: "Thailand", temperament: "Vocal, Affectionate, Intelligent", image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg" },
  { name: "Persian", origin: "Iran", temperament: "Gentle, Quiet, Dignified", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg" },
  { name: "Maine Coon", origin: "United States", temperament: "Gentle, Friendly, Intelligent", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Maine_Coon_cat_by_Tomitheos.JPG" },
  { name: "Bengal", origin: "United States", temperament: "Active, Energetic, Playful", image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Paintedcats_Red_Star_standing.jpg" },
  { name: "Scottish Fold", origin: "Scotland", temperament: "Sweet, Quiet, Adaptable", image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Adult_Scottish_Fold.jpg" },
];

const catFacts = [
  "Cats sleep for about 70% of their lives.",
  "A group of cats is called a clowder.",
  "Cats have over 20 vocalizations, including the purr.",
  "The first cat in space was French. Her name was Felicette.",
  "Cats can jump up to six times their length.",
];

const Index = () => {
  const [likes, setLikes] = useState(0);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [likeProgress, setLikeProgress] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % catFacts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setLikeProgress(Math.min((likes / 100) * 100, 100));
  }, [likes]);

  const handleLike = () => {
    setLikes(likes + 1);
    if (likes + 1 === 100) {
      toast({
        title: "Wow! 100 Likes!",
        description: "You're a true cat lover!",
        duration: 5000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-6xl font-bold mb-8 flex items-center justify-center text-purple-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Cat className="mr-4 text-pink-500" size={64} /> 
          <span className="relative">
            Feline Fascination
            <motion.span
              className="absolute -top-6 -right-6 text-yellow-400"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={24} />
            </motion.span>
          </span>
        </motion.h1>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {catBreeds.map((breed, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <CardContent className="flex aspect-square items-center justify-center p-0 relative group">
                        <img
                          src={breed.image}
                          alt={breed.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-white text-center">
                            <h3 className="text-2xl font-bold mb-2">{breed.name}</h3>
                            <p className="text-sm">{breed.temperament}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>

        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={currentFactIndex}
              className="text-xl text-purple-700 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Star className="inline-block mr-2 text-yellow-500" /> {catFacts[currentFactIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <Tabs defaultValue="about" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="about">About Cats</TabsTrigger>
            <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
            <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
          </TabsList>
          <AnimatePresence mode="wait">
            <TabsContent value="about">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-800">About Cats</CardTitle>
                    <CardDescription className="text-lg text-purple-600">Discover the world of our feline friends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Cats are fascinating creatures that have been domesticated for thousands of years. 
                      They are known for their independence, agility, and affectionate nature. These 
                      graceful animals have captured the hearts of millions around the world with their 
                      playful antics and soothing purrs. From ancient Egyptian worship to modern-day 
                      internet sensations, cats continue to hold a special place in human society.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            <TabsContent value="characteristics">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-800">Feline Characteristics</CardTitle>
                    <CardDescription className="text-lg text-purple-600">What makes cats unique?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <motion.li className="flex items-center text-lg" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                        <Paw className="mr-4 text-pink-500" size={24} /> Excellent hunters with sharp claws and teeth
                      </motion.li>
                      <motion.li className="flex items-center text-lg" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                        <Paw className="mr-4 text-pink-500" size={24} /> Flexible bodies and quick reflexes
                      </motion.li>
                      <motion.li className="flex items-center text-lg" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                        <Paw className="mr-4 text-pink-500" size={24} /> Keen senses, especially hearing and night vision
                      </motion.li>
                      <motion.li className="flex items-center text-lg" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                        <Paw className="mr-4 text-pink-500" size={24} /> Communicate through vocalizations, body language, and scent
                      </motion.li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            <TabsContent value="breeds">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-800">Popular Cat Breeds</CardTitle>
                    <CardDescription className="text-lg text-purple-600">Explore some beloved feline varieties</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {catBreeds.map((breed, index) => (
                        <motion.li 
                          key={index} 
                          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <h3 className="font-semibold text-xl mb-2 text-purple-700">{breed.name}</h3>
                          <p className="mb-1"><span className="font-medium text-purple-600">Origin:</span> {breed.origin}</p>
                          <p><span className="font-medium text-purple-600">Temperament:</span> {breed.temperament}</p>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-2xl text-purple-800 mb-6">
            Whether you're a cat owner or just an admirer, these furry friends continue to captivate us with their charm and mystery.
          </p>
          <div className="flex flex-col items-center">
            <Button 
              onClick={handleLike}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 mb-4"
            >
              <Heart className="mr-2" /> Show Some Love ({likes})
            </Button>
            <Progress value={likeProgress} className="w-64 h-2 bg-pink-200" />
            <p className="mt-2 text-sm text-purple-600">Progress to 100 likes: {likeProgress}%</p>
          </div>
        </motion.div>

        <footer className="mt-16 text-center text-gray-600">
          <p className="text-lg">© 2023 Feline Fascination. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Badge variant="secondary" className="text-purple-700 bg-purple-100 hover:bg-purple-200 transition-colors duration-300">
              <Info className="mr-1 h-4 w-4" /> Educational
            </Badge>
            <Badge variant="secondary" className="text-pink-700 bg-pink-100 hover:bg-pink-200 transition-colors duration-300">
              <Heart className="mr-1 h-4 w-4" /> Cat Lovers
            </Badge>
          </div>
          <motion.div 
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button variant="link" className="text-purple-600 hover:text-purple-800 transition-colors duration-300">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
