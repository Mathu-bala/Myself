import React from 'react';
import { Figma, Smartphone, Youtube, Menu, Megaphone } from 'lucide-react';

const UIUXProjects = () => {
  const projects = [
    {
      title: "Mobile Game UI Design",
      description: "Intuitive and engaging game interface designed for mobile gaming experience",
      icon: Smartphone,
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400",
      tools: ["Figma", "Adobe Illustrator"]
    },
    {
      title: "YouTube Home UI Redesign",
      description: "Modern redesign of YouTube's home interface focusing on improved user experience",
      icon: Youtube,
      image: "https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=400",
      tools: ["Figma", "User Research"]
    },
    {
      title: "Menu Card Design",
      description: "Restaurant menu card design created during Codsoft internship",
      icon: Menu,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      tools: ["Adobe Illustrator", "Typography"]
    },
    {
      title: "Promotional Post Design",
      description: "Eye-catching promotional graphics for social media campaigns",
      icon: Megaphone,
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400",
      tools: ["Adobe Illustrator", "Figma"]
    }
  ];

  return (
    <section id="ui-ux" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">UI/UX Design Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed with Figma, focusing on usability, simplicity, and aesthetics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
            <Figma className="h-5 w-5 text-purple-600" />
            <span className="text-gray-700 font-medium">Designed with Figma</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIUXProjects;