import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

const AnimationProjects = () => {
  const projects = [
    {
      title: "Mermaid Disney Concept",
      description: "A magical underwater adventure featuring Disney-style character animation",
      image: "https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Teddy Animation",
      description: "Heartwarming character animation bringing a beloved teddy bear to life",
      image: "https://images.pexels.com/photos/4792065/pexels-photo-4792065.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Trend Song Visual Animation",
      description: "Dynamic music visualization synchronized with trending audio",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Pen & Pelican Love Story",
      description: "A touching animated short about an unlikely friendship",
      image: "https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Bottle Love Animation",
      description: "Creative storytelling through object personification",
      image: "https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Egg Animation Concepts",
      description: "Two unique concept animations exploring transformation themes",
      image: "https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Grandfather Storyboard",
      description: "Emotional narrative animation showcasing family bonds",
      image: "https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Little Ghost Fun",
      description: "Playful character animation with humor and charm",
      image: "https://images.pexels.com/photos/1485657/pexels-photo-1485657.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Overthinking Character Study",
      description: "Psychological animation exploring mental states through character design",
      image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Sad Girl Animation",
      description: "Emotional expression study through subtle character animation",
      image: "https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Tamil Song Visual",
      description: "Cultural animation celebrating Tamil music and heritage",
      image: "https://images.pexels.com/photos/3018993/pexels-photo-3018993.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="animations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">2D Animation Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creative short stories, character animations, and motion works that bring imagination to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <Play className="h-8 w-8 text-white" />
                    <ExternalLink className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimationProjects;
