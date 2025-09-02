import React from 'react';
import { GraduationCap, BookOpen, School } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      icon: GraduationCap,
      level: "Post Graduate (MCA)",
      institution: "Kongu Engineering College",
      status: "Final Year",
      color: "indigo"
    },
    {
      icon: BookOpen,
      level: "Undergraduate (B.Sc. Computer Science)",
      institution: "Kaliswari College",
      status: "Completed",
      color: "purple"
    },
    {
      icon: School,
      level: "Past Schooling",
      institution: "Anitha School",
      status: "Completed",
      color: "pink"
    }
  ];

  const colorMap = {
    indigo: "bg-indigo-100 text-indigo-600 border-indigo-200",
    purple: "bg-purple-100 text-purple-600 border-purple-200", 
    pink: "bg-pink-100 text-pink-600 border-pink-200"
  };

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600">
            Building a strong foundation in technology and design
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {educationData.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-indigo-500"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${colorMap[edu.color as keyof typeof colorMap]}`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {edu.level}
                </h3>
                
                <p className="text-gray-600 mb-3">
                  {edu.institution}
                </p>
                
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  edu.status === 'Final Year' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                }`}>
                  {edu.status}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;