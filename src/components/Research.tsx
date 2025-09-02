import React from 'react';
import { BookOpen, Users, Brain, Stethoscope } from 'lucide-react';

const Research = () => {
  const projects = [
    {
      title: "CAD Prediction Project",
      description: "Classification & Regression using Machine Learning",
      details: "Team 8–14",
      icon: Brain,
      color: "indigo",
      image: "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Hair Loss Management App Study",
      description: "Published research paper",
      details: "Indian Journal of Hair Loss Management, May 2025",
      icon: Stethoscope,
      color: "teal",
      image: "https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Deep Learning Bone Cancer Detection",
      description: "EfficientNetB0 + LSTM Model",
      details: "Advanced neural network implementation for medical imaging",
      icon: BookOpen,
      color: "purple",
      image: "https://images.pexels.com/photos/3825583/pexels-photo-3825583.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const colorMap = {
    indigo: { bg: "bg-indigo-500", text: "text-indigo-600", icon: "bg-indigo-100" },
    teal: { bg: "bg-teal-500", text: "text-teal-600", icon: "bg-teal-100" },
    purple: { bg: "bg-purple-500", text: "text-purple-600", icon: "bg-purple-100" }
  };

  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research & Projects</h2>
          <p className="text-xl text-gray-600">
            Academic research and technical projects in machine learning and healthcare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const colors = colorMap[project.color as keyof typeof colorMap];
            
            return (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`${colors.icon} p-3 rounded-lg shadow-md`}>
                      <IconComponent className={`h-6 w-6 ${colors.text}`} />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-sm text-gray-500 font-medium">
                    {project.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Research Interests</h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Actively exploring the intersection of creative design and data science, 
              with particular interest in machine learning applications for healthcare and user experience optimization.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Machine Learning', 'Computer Vision', 'Healthcare AI', 'User Experience Research', 'Data Visualization'].map((interest, index) => (
                <span
                  key={index}
                  className="inline-block px-4 py-2 bg-white text-indigo-700 rounded-full font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;