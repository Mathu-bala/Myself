import React from 'react';
import { Palette, Code, Brain, Camera } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Design Tools",
      icon: Palette,
      color: "pink",
      skills: [
        { name: "Adobe Illustrator", level: 90 },
        { name: "Adobe Animate", level: 85 },
        { name: "Figma", level: 88 },
        { name: "Adobe Fresco", level: 80 },
        { name: "Clip Studio", level: 75 }
      ]
    },
    {
      title: "Programming",
      icon: Code,
      color: "indigo",
      skills: [
        { name: "React", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 70 },
        { name: "Java", level: 75 },
        { name: "C/C++", level: 80 }
      ]
    },
    {
      title: "Machine Learning",
      icon: Brain,
      color: "teal",
      skills: [
        { name: "Neural Networks", level: 75 },
        { name: "SVM & KNN", level: 80 },
        { name: "XGBoost", level: 70 },
        { name: "Deep Learning", level: 75 },
        { name: "PCA", level: 78 }
      ]
    },
    {
      title: "Creative Skills",
      icon: Camera,
      color: "purple",
      skills: [
        { name: "Storyboarding", level: 90 },
        { name: "Character Design", level: 88 },
        { name: "Motion Graphics", level: 85 },
        { name: "Concept Art", level: 82 },
        { name: "Visual Storytelling", level: 90 }
      ]
    }
  ];

  const colorMap = {
    pink: { bg: "bg-pink-500", text: "text-pink-600", icon: "bg-pink-100" },
    indigo: { bg: "bg-indigo-500", text: "text-indigo-600", icon: "bg-indigo-100" },
    teal: { bg: "bg-teal-500", text: "text-teal-600", icon: "bg-teal-100" },
    purple: { bg: "bg-purple-500", text: "text-purple-600", icon: "bg-purple-100" }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600">
            A diverse toolkit spanning creative design and technical development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const colors = colorMap[category.color as keyof typeof colorMap];
            
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`${colors.icon} p-3 rounded-lg`}>
                    <IconComponent className={`h-6 w-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`${colors.bg} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Additional Interests</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Drawing', 'Cooking', 'Meme Creation', 'Visual Storytelling', 'User Research'].map((hobby, index) => (
                <span
                  key={index}
                  className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full font-medium hover:from-indigo-200 hover:to-purple-200 transition-all duration-200"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;