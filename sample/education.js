let education = [
  {
    id:1,
    usersId: "A-1234-5678",
    education: [
      {
        degreeType: "Bachelor's",
        degreeName: "Bachelor of Science in Computer Science",
        university: "University of Karachi",
        yearCompleted: 2005,
        discipline: "Computer Science",
        isTerminalDegree: false
      },
      {
        degreeType: "Master's",
        degreeName: "Master of Science in Artificial Intelligence",
        university: "Lahore University of Management Sciences",
        yearCompleted: 2008,
        discipline: "Artificial Intelligence",
        isTerminalDegree: false
      },
      {
        degreeType: "PhD",
        degreeName: "Doctor of Philosophy in Machine Learning",
        university: "Massachusetts Institute of Technology",
        yearCompleted: 2013,
        discipline: "Machine Learning",
        isTerminalDegree: true,
        thesisTitle: "Advanced Neural Networks for Natural Language Understanding"
      }
    ],
    highestDegree: {
      degreeName: "Doctor of Philosophy in Machine Learning",
      university: "Massachusetts Institute of Technology",
      yearCompleted: 2013
    }
  },
  {
    id:2 ,
    usersId: "B-2345-6789",
    education: [
      {
        degreeType: "Bachelor's",
        degreeName: "Bachelor of Science in Computer Science",
        university: "Stanford University",
        yearCompleted: 2000,
        discipline: "Computer Science",
        isTerminalDegree: false
      },
      {
        degreeType: "MPhil",
        degreeName: "Master of Philosophy in Data Science",
        university: "MIT",
        yearCompleted: 2004,
        discipline: "Data Science",
        isTerminalDegree: false,
        thesisTitle: "Foundations of Data Analysis"
      },
      {
        degreeType: "PhD",
        degreeName: "Doctor of Philosophy in Data Science",
        university: "MIT",
        yearCompleted: 2008,
        discipline: "Data Science",
        isTerminalDegree: true,
        thesisTitle: "Large-Scale Data Analysis Techniques"
      }
    ],
    highestDegree: {
      degreeName: "Doctor of Philosophy in Data Science",
      university: "MIT",
      yearCompleted: 2008
    }
  },
  {
    id:3 ,
    usersId: "C-3456-7890",
    education: [
      {
        degreeType: "Bachelor's",
        degreeName: "Bachelor of Engineering in Computer Science",
        university: "Tsinghua University",
        yearCompleted: 2005,
        discipline: "Computer Science",
        isTerminalDegree: false
      },
      {
        degreeType: "MPhil",
        degreeName: "Master of Philosophy in Artificial Intelligence",
        university: "Stanford University",
        yearCompleted: 2009,
        discipline: "Artificial Intelligence",
        isTerminalDegree: false,
        thesisTitle: "Neural Network Fundamentals"
      },
      {
        degreeType: "PhD",
        degreeName: "Doctor of Philosophy in Deep Learning",
        university: "Stanford University",
        yearCompleted: 2012,
        discipline: "Artificial Intelligence",
        isTerminalDegree: true,
        thesisTitle: "Advanced Neural Network Architectures"
      }
    ],
    highestDegree: {
      degreeName: "Doctor of Philosophy in Deep Learning",
      university: "Stanford University",
      yearCompleted: 2012
    }
  },
  {
    id:4 ,
    usersId: "D-4567-8901",
    education: [
      {
        degreeType: "Bachelor's",
        degreeName: "Bachelor of Science in Biomedical Engineering",
        university: "University of Karachi",
        yearCompleted: 2008,
        discipline: "Biomedical Engineering",
        isTerminalDegree: false
      },
      {
        degreeType: "MPhil",
        degreeName: "Master of Philosophy in Neural Engineering",
        university: "LUMS",
        yearCompleted: 2011,
        discipline: "Neural Engineering",
        isTerminalDegree: false
      },
      {
        degreeType: "PhD",
        degreeName: "Doctor of Philosophy in Neuroprosthetics",
        university: "Johns Hopkins University",
        yearCompleted: 2016,
        discipline: "Biomedical Engineering",
        isTerminalDegree: true,
        thesisTitle: "Low-Cost Neural Interface Devices"
      }
    ],
    highestDegree: {
      degreeName: "Doctor of Philosophy in Neuroprosthetics",
      university: "Johns Hopkins University",
      yearCompleted: 2016
    }
  },
  {
    id:5 ,
    usersId: "E-5678-9012",
    education: [
      {
        degreeType: "Bachelor's",
        degreeName: "Bachelor of Science in Electrical Engineering",
        university: "UET Lahore",
        yearCompleted: 1998,
        discipline: "Electrical Engineering",
        isTerminalDegree: false
      },
      {
        degreeType: "Master's",
        degreeName: "Master of Science in Power Systems",
        university: "Imperial College London",
        yearCompleted: 2001,
        discipline: "Electrical Engineering",
        isTerminalDegree: false,
        thesisTitle: "Power Grid Stability Analysis"
      },
      {
        degreeType: "PhD",
        degreeName: "Doctor of Philosophy in Power Systems",
        university: "Imperial College London",
        yearCompleted: 2005,
        discipline: "Electrical Engineering",
        isTerminalDegree: true,
        thesisTitle: "Smart Grid Optimization Techniques"
      }
    ],
    highestDegree: {
      degreeName: "Doctor of Philosophy in Power Systems",
      university: "Imperial College London",
      yearCompleted: 2005
    }
  },
  {
    id:6 ,
    usersId: "F-6789-0123",
    education: [
      {
        degreeType: "Bachelor's",
        degreeName: "Bachelor of Science in Environmental Science",
        university: "UNAM",
        yearCompleted: 2000,
        discipline: "Environmental Science",
        isTerminalDegree: false
      },
      {
        degreeType: "Master's",
        degreeName: "Master of Science in Climate Studies",
        university: "ETH Zurich",
        yearCompleted: 2004,
        discipline: "Environmental Science",
        isTerminalDegree: false,
        thesisTitle: "Atmospheric Carbon Dynamics"
      },
      {
        degreeType: "PhD",
        degreeName: "Doctor of Philosophy in Climate Science",
        university: "ETH Zurich",
        yearCompleted: 2008,
        discipline: "Environmental Science",
        isTerminalDegree: true,
        thesisTitle: "Carbon Sequestration in Tropical Ecosystems"
      }
    ],
    highestDegree: {
      degreeName: "Doctor of Philosophy in Climate Science",
      university: "ETH Zurich",
      yearCompleted: 2008
    }
  },
  {
    id:7 ,
    usersId: "G-7890-1234",
    education: [
      {
        degreeType: "Bachelor's",
        degreeName: "Bachelor of Science in Physics",
        university: "University of Cambridge",
        yearCompleted: 1995,
        discipline: "Physics",
        isTerminalDegree: false
      },
      {
        degreeType: "MPhil",
        degreeName: "Master of Philosophy in Quantum Physics",
        university: "MIT",
        yearCompleted: 1998,
        discipline: "Physics",
        isTerminalDegree: false,
        thesisTitle: "Quantum State Transitions"
      },
      {
        degreeType: "PhD",
        degreeName: "Doctor of Philosophy in Quantum Mechanics",
        university: "MIT",
        yearCompleted: 2001,
        discipline: "Physics",
        isTerminalDegree: true,
        thesisTitle: "Quantum Entanglement in Particle Systems"
      }
    ],
    highestDegree: {
      degreeName: "Doctor of Philosophy in Quantum Mechanics",
      university: "MIT",
      yearCompleted: 2001
    }
  },
  {
    id:8 ,
    usersId: "H-8901-2345",
    education: [
      {
        degreeType: "Bachelor's",
        degreeName: "Bachelor of Science in Chemistry",
        university: "King Saud University",
        yearCompleted: 2005,
        discipline: "Chemistry",
        isTerminalDegree: false
      },
      {
        degreeType: "Master's",
        degreeName: "Master of Science in Nanoscience",
        university: "University of Oxford",
        yearCompleted: 2008,
        discipline: "Chemistry",
        isTerminalDegree: false,
        thesisTitle: "Nanoparticle Synthesis Techniques"
      },
      {
        degreeType: "PhD",
        degreeName: "Doctor of Philosophy in Nanotechnology",
        university: "University of Oxford",
        yearCompleted: 2012,
        discipline: "Chemistry",
        isTerminalDegree: true,
        thesisTitle: "Nanomaterials for Drug Delivery Systems"
      }
    ],
    highestDegree: {
      degreeName: "Doctor of Philosophy in Nanotechnology",
      university: "University of Oxford",
      yearCompleted: 2012
    }
  },
  {
    id:9 ,
    usersId: "I-9012-3456",
    education: [
      {
        degreeType: "Bachelor's",
        degreeName: "Bachelor of Science in Biotechnology",
        university: "Seoul National University",
        yearCompleted: 2006,
        discipline: "Biotechnology",
        isTerminalDegree: false
      },
      {
        degreeType: "Master's",
        degreeName: "Master of Science in Genetic Engineering",
        university: "Harvard University",
        yearCompleted: 2009,
        discipline: "Biotechnology",
        isTerminalDegree: false,
        thesisTitle: "Gene Editing Techniques"
      },
      {
        degreeType: "PhD",
        degreeName: "Doctor of Philosophy in Genetic Engineering",
        university: "Harvard University",
        yearCompleted: 2013,
        discipline: "Biotechnology",
        isTerminalDegree: true,
        thesisTitle: "CRISPR Applications in Agriculture"
      }
    ],
    highestDegree: {
      degreeName: "Doctor of Philosophy in Genetic Engineering",
      university: "Harvard University",
      yearCompleted: 2013
    }
  },
  {
    id:10 ,
    usersId: "J-0123-4567",
    education: [
      {
        degreeType: "Bachelor's",
        degreeName: "Bachelor of Science in Materials Science",
        university: "Moscow State University",
        yearCompleted: 2000,
        discipline: "Materials Science",
        isTerminalDegree: false
      },
      {
        degreeType: "Master's",
        degreeName: "Master of Science in Polymer Science",
        university: "ETH Zurich",
        yearCompleted: 2003,
        discipline: "Materials Science",
        isTerminalDegree: false,
        thesisTitle: "Polymer Characterization Methods"
      },
      {
        degreeType: "PhD",
        degreeName: "Doctor of Philosophy in Polymer Science",
        university: "ETH Zurich",
        yearCompleted: 2007,
        discipline: "Materials Science",
        isTerminalDegree: true,
        thesisTitle: "Biodegradable Polymer Composites"
      }
    ],
    highestDegree: {
      degreeName: "Doctor of Philosophy in Polymer Science",
      university: "ETH Zurich",
      yearCompleted: 2007
    }
  },
  {
    id:11 ,
    usersId: "K-1234-5678",
    education: [
      {
        degreeType: "Bachelor's",
        degreeName: "Bachelor of Engineering in Mechanical Engineering",
        university: "UET Lahore",
        yearCompleted: 2002,
        discipline: "Mechanical Engineering",
        isTerminalDegree: false
      },
      {
        degreeType: "Master's",
        degreeName: "Master of Science in Robotics",
        university: "KAIST",
        yearCompleted: 2005,
        discipline: "Mechanical Engineering",
        isTerminalDegree: false,
        thesisTitle: "Robotic Control Systems"
      },
      {
        degreeType: "PhD",
        degreeName: "Doctor of Philosophy in Robotics",
        university: "KAIST",
        yearCompleted: 2009,
        discipline: "Mechanical Engineering",
        isTerminalDegree: true,
        thesisTitle: "Industrial Automation Using AI Robotics"
      }
    ],
    highestDegree: {
      degreeName: "Doctor of Philosophy in Robotics",
      university: "KAIST",
      yearCompleted: 2009
    }
  },
  {
    id:12 ,
    usersId: "L-2345-6789",
    education: [
      {
        degreeType: "Bachelor's",
        degreeName: "Bachelor of Science in Computer Science",
        university: "University of Buenos Aires",
        yearCompleted: 2005,
        discipline: "Computer Science",
        isTerminalDegree: false
      },
      {
        degreeType: "Master's",
        degreeName: "Master of Science in Computational Linguistics",
        university: "University of Barcelona",
        yearCompleted: 2008,
        discipline: "Computer Science",
        isTerminalDegree: false,
        thesisTitle: "Language Model Architectures"
      },
      {
        degreeType: "PhD",
        degreeName: "Doctor of Philosophy in Natural Language Processing",
        university: "University of Barcelona",
        yearCompleted: 2012,
        discipline: "Computer Science",
        isTerminalDegree: true,
        thesisTitle: "Machine Translation for Low-Resource Languages"
      }
    ],
    highestDegree: {
      degreeName: "Doctor of Philosophy in Natural Language Processing",
      university: "University of Barcelona",
      yearCompleted: 2012
    }
  },
  {
    id:13 ,
    usersId: "M-3456-7890",
    education: [
      {
        degreeType: "Bachelor's",
        degreeName: "Bachelor of Science in Physics",
        university: "Technical University of Munich",
        yearCompleted: 1998,
        discipline: "Physics",
        isTerminalDegree: false
      },
      {
        degreeType: "MPhil",
        degreeName: "Master of Philosophy in Condensed Matter Physics",
        university: "Max Planck Institute",
        yearCompleted: 2001,
        discipline: "Physics",
        isTerminalDegree: false,
        thesisTitle: "Material Properties at Low Temperatures"
      },
      {
        degreeType: "PhD",
        degreeName: "Doctor of Philosophy in Condensed Matter Physics",
        university: "Max Planck Institute",
        yearCompleted: 2004,
        discipline: "Physics",
        isTerminalDegree: true,
        thesisTitle: "Superconductivity in Novel Materials"
      }
    ],
    highestDegree: {
      degreeName: "Doctor of Philosophy in Condensed Matter Physics",
      university: "Max Planck Institute",
      yearCompleted: 2004
    }
  },
  {
    id:14 ,
    usersId: "N-4567-8901",
    education: [
      {
        degreeType: "Bachelor's",
        degreeName: "Bachelor of Medicine",
        university: "Cheikh Anta Diop University",
        yearCompleted: 2003,
        discipline: "Medicine",
        isTerminalDegree: false
      },
      {
        degreeType: "MPhil",
        degreeName: "Master of Philosophy in Public Health",
        university: "London School of Hygiene & Tropical Medicine",
        yearCompleted: 2006,
        discipline: "Public Health",
        isTerminalDegree: false,
        thesisTitle: "Disease Surveillance Systems"
      },
      {
        degreeType: "PhD",
        degreeName: "Doctor of Philosophy in Epidemiology",
        university: "London School of Hygiene & Tropical Medicine",
        yearCompleted: 2010,
        discipline: "Public Health",
        isTerminalDegree: true,
        thesisTitle: "Malaria Control Strategies in West Africa"
      }
    ],
    highestDegree: {
      degreeName: "Doctor of Philosophy in Epidemiology",
      university: "London School of Hygiene & Tropical Medicine",
      yearCompleted: 2010
    }
  },
  {
    id:15 ,
    usersId: "O-5678-9012",
    education: [
      {
        degreeType: "Bachelor's",
        degreeName: "Bachelor of Science in Biochemistry",
        university: "University of Delhi",
        yearCompleted: 2004,
        discipline: "Biochemistry",
        isTerminalDegree: false
      },
      {
        degreeType: "Master's",
        degreeName: "Master of Science in Enzymology",
        university: "University of Toronto",
        yearCompleted: 2007,
        discipline: "Biochemistry",
        isTerminalDegree: false,
        thesisTitle: "Enzyme Kinetics Analysis"
      },
      {
        degreeType: "PhD",
        degreeName: "Doctor of Philosophy in Enzymology",
        university: "University of Toronto",
        yearCompleted: 2011,
        discipline: "Biochemistry",
        isTerminalDegree: true,
        thesisTitle: "Industrial Applications of Enzyme Engineering"
      }
    ],
    highestDegree: {
      degreeName: "Doctor of Philosophy in Enzymology",
      university: "University of Toronto",
      yearCompleted: 2011
    }
  },
  {
    id:16 ,
    usersId: "P-6789-0123",
    education: [
      {
        degreeType: "Bachelor's",
        degreeName: "Bachelor of Engineering in Computer Engineering",
        university: "University of Tokyo",
        yearCompleted: 2003,
        discipline: "Computer Engineering",
        isTerminalDegree: false
      },
      {
        degreeType: "Master's",
        degreeName: "Master of Science in Computer Architecture",
        university: "Stanford University",
        yearCompleted: 2006,
        discipline: "Computer Engineering",
        isTerminalDegree: false,
        thesisTitle: "Processor Design Optimization"
      },
      {
        degreeType: "PhD",
        degreeName: "Doctor of Philosophy in Computer Architecture",
        university: "Stanford University",
        yearCompleted: 2010,
        discipline: "Computer Engineering",
        isTerminalDegree: true,
        thesisTitle: "Neuromorphic Computing Architectures"
      }
    ],
    highestDegree: {
      degreeName: "Doctor of Philosophy in Computer Architecture",
      university: "Stanford University",
      yearCompleted: 2010
    }
  },
  {
    id:17 ,
    usersId: "Q-7890-1234",
    education: [
      {
        degreeType: "Bachelor's",
        degreeName: "Bachelor of Science in Environmental Engineering",
        university: "National Autonomous University of Mexico",
        yearCompleted: 2005,
        discipline: "Environmental Engineering",
        isTerminalDegree: false
      },
      {
        degreeType: "Master's",
        degreeName: "Master of Science in Water Treatment",
        university: "University of California, Berkeley",
        yearCompleted: 2008,
        discipline: "Environmental Engineering",
        isTerminalDegree: false,
        thesisTitle: "Membrane Filtration Techniques"
      },
      {
        degreeType: "PhD",
        degreeName: "Doctor of Philosophy in Water Treatment",
        university: "University of California, Berkeley",
        yearCompleted: 2012,
        discipline: "Environmental Engineering",
        isTerminalDegree: true,
        thesisTitle: "Advanced Membrane Technologies for Desalination"
      }
    ],
    highestDegree: {
      degreeName: "Doctor of Philosophy in Water Treatment",
      university: "University of California, Berkeley",
      yearCompleted: 2012
    }
  },
  {
    id:18 ,
    usersId: "R-8901-2345",
    education: [
      {
        degreeType: "Bachelor's",
        degreeName: "Bachelor of Science in Neuroscience",
        university: "University of Oxford",
        yearCompleted: 2000,
        discipline: "Neuroscience",
        isTerminalDegree: false
      },
      {
        degreeType: "MPhil",
        degreeName: "Master of Philosophy in Cognitive Science",
        university: "Harvard University",
        yearCompleted: 2003,
        discipline: "Neuroscience",
        isTerminalDegree: false,
        thesisTitle: "Neural Correlates of Memory"
      },
      {
        degreeType: "PhD",
        degreeName: "Doctor of Philosophy in Cognitive Neuroscience",
        university: "Harvard University",
        yearCompleted: 2007,
        discipline: "Neuroscience",
        isTerminalDegree: true,
        thesisTitle: "Memory Formation Mechanisms in the Brain"
      }
    ],
    highestDegree: {
      degreeName: "Doctor of Philosophy in Cognitive Neuroscience",
      university: "Harvard University",
      yearCompleted: 2007
    }
  },
  {
    id:19 ,
    usersId: "S-9012-3456",
    education: [
      {
        degreeType: "Bachelor's",
        degreeName: "Bachelor of Science in Mathematics",
        university: "Quaid-i-Azam University",
        yearCompleted: 1995,
        discipline: "Mathematics",
        isTerminalDegree: false
      },
      {
        degreeType: "MPhil",
        degreeName: "Master of Philosophy in Applied Mathematics",
        university: "University of Cambridge",
        yearCompleted: 1998,
        discipline: "Mathematics",
        isTerminalDegree: false,
        thesisTitle: "Numerical Analysis of Fluid Flow"
      },
      {
        degreeType: "PhD",
        degreeName: "Doctor of Philosophy in Applied Mathematics",
        university: "University of Cambridge",
        yearCompleted: 2002,
        discipline: "Mathematics",
        isTerminalDegree: true,
        thesisTitle: "Mathematical Modeling of Fluid Dynamics"
      }
    ],
    highestDegree: {
      degreeName: "Doctor of Philosophy in Applied Mathematics",
      university: "University of Cambridge",
      yearCompleted: 2002
    }
  },
  {
    id:20 ,
    usersId: "T-0123-4567",
    education: [
      {
        degreeType: "Bachelor's",
        degreeName: "Bachelor of Science in Materials Science",
        university: "Tsinghua University",
        yearCompleted: 2004,
        discipline: "Materials Science",
        isTerminalDegree: false
      },
      {
        degreeType: "Master's",
        degreeName: "Master of Science in Nanomaterials",
        university: "University of California, Los Angeles",
        yearCompleted: 2007,
        discipline: "Materials Science",
        isTerminalDegree: false,
        thesisTitle: "Nanostructure Characterization"
      },
      {
        degreeType: "PhD",
        degreeName: "Doctor of Philosophy in Nanomaterials",
        university: "University of California, Los Angeles",
        yearCompleted: 2011,
        discipline: "Materials Science",
        isTerminalDegree: true,
        thesisTitle: "Graphene-Based Electronic Devices"
      }
    ],
    highestDegree: {
      degreeName: "Doctor of Philosophy in Nanomaterials",
      university: "University of California, Los Angeles",
      yearCompleted: 2011
    }
  },
  {
    id:21 ,
    usersId: "U-1234-5678",
    education: [
      {
        degreeType: "Bachelor's",
        degreeName: "Bachelor of Science in Chemistry",
        university: "University of Warsaw",
        yearCompleted: 2005,
        discipline: "Chemistry",
        isTerminalDegree: false
      },
      {
        degreeType: "MPhil",
        degreeName: "Master of Philosophy in Organic Chemistry",
        university: "ETH Zurich",
        yearCompleted: 2008,
        discipline: "Chemistry",
        isTerminalDegree: false,
        thesisTitle: "Catalytic Reaction Mechanisms"
      },
      {
        degreeType: "PhD",
        degreeName: "Doctor of Philosophy in Organic Chemistry",
        university: "ETH Zurich",
        yearCompleted: 2012,
        discipline: "Chemistry",
        isTerminalDegree: true,
        thesisTitle: "Green Catalytic Processes for Industrial Applications"
      }
    ],
    highestDegree: {
      degreeName: "Doctor of Philosophy in Organic Chemistry",
      university: "ETH Zurich",
      yearCompleted: 2012
    }
  }
];



export default education;