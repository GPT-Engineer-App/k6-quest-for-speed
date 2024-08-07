import { useState } from "react";
import { Cat, Heart, Info, Paw } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const catBreeds = [
  { name: "Siamese", origin: "Thailand", temperament: "Vocal, Affectionate, Intelligent" },
  { name: "Persian", origin: "Iran", temperament: "Gentle, Quiet, Dignified" },
  { name: "Maine Coon", origin: "United States", temperament: "Gentle, Friendly, Intelligent" },
  { name: "Bengal", origin: "United States", temperament: "Active, Energetic, Playful" },
  { name: "Scottish Fold", origin: "Scotland", temperament: "Sweet, Quiet, Adaptable" },
];

const Index = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl font-bold mb-8 flex items-center justify-center text-purple-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Cat className="mr-4 text-pink-500" size={48} /> Feline Fascination
        </motion.h1>

        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            alt="A cute cat"
            className="mx-auto object-cover w-full h-[500px] rounded-lg shadow-2xl"
          />
        </motion.div>

        <Tabs defaultValue="about" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">About Cats</TabsTrigger>
            <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
            <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>About Cats</CardTitle>
                <CardDescription>Discover the world of our feline friends</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">
                  Cats are fascinating creatures that have been domesticated for thousands of years. 
                  They are known for their independence, agility, and affectionate nature. These 
                  graceful animals have captured the hearts of millions around the world with their 
                  playful antics and soothing purrs.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="characteristics">
            <Card>
              <CardHeader>
                <CardTitle>Feline Characteristics</CardTitle>
                <CardDescription>What makes cats unique?</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><Paw className="mr-2 text-pink-500" /> Excellent hunters with sharp claws and teeth</li>
                  <li className="flex items-center"><Paw className="mr-2 text-pink-500" /> Flexible bodies and quick reflexes</li>
                  <li className="flex items-center"><Paw className="mr-2 text-pink-500" /> Keen senses, especially hearing and night vision</li>
                  <li className="flex items-center"><Paw className="mr-2 text-pink-500" /> Communicate through vocalizations, body language, and scent</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <Card>
              <CardHeader>
                <CardTitle>Popular Cat Breeds</CardTitle>
                <CardDescription>Explore some beloved feline varieties</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {catBreeds.map((breed, index) => (
                    <li key={index} className="bg-white p-4 rounded-lg shadow">
                      <h3 className="font-semibold text-lg mb-2">{breed.name}</h3>
                      <p><span className="font-medium">Origin:</span> {breed.origin}</p>
                      <p><span className="font-medium">Temperament:</span> {breed.temperament}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <p className="text-xl text-gray-700 mb-4">
            Whether you're a cat owner or just an admirer, these furry friends continue to captivate us with their charm and mystery.
          </p>
          <Button 
            onClick={() => setLikes(likes + 1)}
            className="bg-pink-500 hover:bg-pink-600"
          >
            <Heart className="mr-2" /> Show Some Love ({likes})
          </Button>
        </div>

        <footer className="mt-12 text-center text-gray-500">
          <p>© 2023 Feline Fascination. All rights reserved.</p>
          <div className="mt-2">
            <Badge variant="outline" className="mr-2">
              <Info className="mr-1 h-3 w-3" /> Educational
            </Badge>
            <Badge variant="outline">
              <Heart className="mr-1 h-3 w-3" /> Cat Lovers
            </Badge>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
