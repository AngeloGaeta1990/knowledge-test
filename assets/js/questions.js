// List of all questions used in the quiz into an array of objects
export let questions = [
    {
       id: 1 , 
       category: "History",
       question: 'Who pronounced the famous quotation "Alea jacta est"?',
       answer1: "Julius Caesar",
       answer2: "Caligola",
       answer3: "Nerone",
       answer4: "Gaius Octavius, Augustus",
       correctAnswer: "Julius Caesar",
       correctAnswerId: "option1",
    },
    {
        id: 2 ,
        category: "Geography" ,
        question: "Which is the capital of Norway?",
        answer1: "Rome",
        answer2: "Oslo",
        answer3: "Prague",
        answer4: "Nairobi",
        correctAnswer: "Oslo",
        correctAnswerId: "option2",


       

    },

    { 
        id:3 ,
        category: "Entertainment",
        question: "Who won Game of The Year in 2022?",
        answer1: "Sekiro",
        answer2: "God of War: Ragnarok",
        answer3: "Elden ring",
        answer4: "It takes two",
        correctAnswer: "Elden ring",
        correctAnswerId: "option3",
        

    },

    {
        id: 4 ,
        category: "Science" ,
        question: "Which nucleotide is in DNA but not in RNA?",
        answer1: "Thymine T",
        answer2: "Adenine A",
        answer3: "Uracil U",
        answer4: "Cytosine C",
        correctAnswer: "Thymine T",
        correctAnswerId: "option1",
    },
    {
        id: 5 ,
        category: "Sport" ,
        question: "Which national football team won the World Cup in 2006?",
        answer1: "Germany",
        answer2: "France",
        answer3: "Italy",
        answer4: "United Kingdom",
        correctAnswer: "Italy",
        correctAnswerId: "option3",
    },

    {
        id: 6 ,
        category: "Literature" ,
        question: "Who wrote the fable 'Pinocchio'?",
        answer1: "Italo Svevo",
        answer2: "Italo Calvino",
        answer3: "Giacomo Leopardi",
        answer4: "Carlo Collodi",
        correctAnswer: "Carlo collodi",
        correctAnswerId: "option4",
    },

    {
        id: 7 ,
        category: "History" ,
        question: "Who pronoumced:'I know that I am intelligent, because I know that I know nothing?'",
        answer1: "Socrates",
        answer2: "Plato",
        answer3: "Aristotle",
        answer4: "Herodotus",
        correctAnswer: "Socrates",
        correctAnswerId: "option1",
    },

    {
        id: 8,
        category: "Geography",
        question: "Which one is the longest river in the world?",
        answer1: "Rio",
        answer2: "Nile",
        answer3: "Ganges",
        answer4: "Mississipi",
        correctAnswer: "Nile",
        correctAnswerId: "option2",

    },

    {
       id: 9,
       category: "Entertainment",
       question: "Which band is famous for the song 'Smells Like Teen Spirits'?",
       answer1: "30 seconds to Mars",
       answer2: "Of Monsters and Man",
       answer3: "Imagine Dragons",
       answer4: "Nirvana",
       correctAnswer: "Nirvana",
       correctAnswerId: "option4",
     },

     {
        id: 10,
        category: "Science",
        question: "What is the hardest natural substance on Earth?",
        answer1: "Titanium",
        answer2: "Tungsten",
        answer3: "Steel",
        answer4: "Diamond",
        correctAnswer: "Diamond",
        correctAnswerId: "option4",
     },

     {
        id: 11,
        category: "Sport",
        question: "Which form of martial art requires practitioners to don a traditional garment called a Hakama?",
        answer1: "Aikido",
        answer2: "Kung fu",
        answer3: "Karate",
        answer4: "Jujutsu",
        correctAnswer: "Aikido",
        correctAnswerId: "option1",
     },

     {
        id: 12,
        category: "Literature",
        question: "'This solitary hill has always been dear to me ...,' is the beginning of which poem?",
        answer1: "Divine Comedy",
        answer2: "Macbeth ",
        answer3: "The Infinite",
        answer4: "The Art of War",
        correctAnswer: "The Infinite",
        correctAnswerId: "option3",
     },

     {
        id: 13,
        category: "History",
        question: "When did the First World War start?",
        answer1: "1920",
        answer2: "1940",
        answer3: "1942",
        answer4: "1914",
        correctAnswer: "1914",
        correctAnswerId: "option4",
     },

     {
        id: 14,
        category: "Geography",
        question: "What is the geographical location of the Earth's lowest point?",
        answer1: "Mariana Trench",
        answer2: "Mount Everest",
        answer3: "Great Barrier Reef",
        answer4: "Amazon Rainforest",
        correctAnswer: "Mariana Trench",
        correctAnswerId: "option1",
     },

     {
        id: 15,
        category: "Entertainment",
        question: "Which film did Quentin Tarantino not direct?",
        answer1: "The Hateful Eight",
        answer2: "Pulp fiction",
        answer3: "Eyes Wide Shut",
        answer4: "Django Unchained",
        correctAnswer: "Eyes Wide Shut",
        correctAnswerId: "option3",
       
     },

     {
        id: 16,
        category: "Science",
        question: "What is the chemical formula for magnesium chloride?",
        answer1: "MgCl",
        answer2: "MgCl2",
        answer3: "Mg2Cl",
        answer4: "Mg2Cl2",
        correctAnswer: "MgCl2",
        correctAnswerId: "option2",

     },

     {
        id: 17,
        category: "Sport",
        question: "Which Formula 1 driver holds the record for the most World Drivers' Championship titles?",
        answer1: "Lewis Hamilton",
        answer2: "Michael Schumacher",
        answer3: "Ayrton Senna",
        answer4: " Sebastian Vettel",
        correctAnswer: "Michael Schumacher",
        correctAnswerId: "option2",

     },

     {
        id: 18,
        category: "Literature",
        question: "Who is the author of the novel '1984,'?",
        answer1: "George Orwell",
        answer2: "Aldous Huxley",
        answer3: "Ray Bradbury",
        answer4: "J.D. Salinger",
        correctAnswer: "George Orwell",
        correctAnswerId: "option1",

     },

     {
        id: 19,
        category: "History",
        question: "Who is the animal who raise the twins Romolus and Remus founders of Rome?",
        answer1: "Lion",
        answer2: "Wolf",
        answer3: "Bear",
        answer4: "Eagle",
        correctAnswer: "Wolf",
        correctAnswerId: "option2",

     },

     {

        id: 20,
        category: "Geograpghy",
        question: "Which continent is known as the 'Land Down Under'?",
        answer1: "Africa",
        answer2: "South America",
        answer3: "Australia",
        answer4: "Antarctica",
        correctAnswer: "Australia",
        correctAnswerId: "option3",
      
     },

     {
        id: 21,
        category: "Entertainment",
        question: "Which actor portrayed the character Tony Stark, also known as Iron Man, in the Marvel Cinematic Universe?",
        answer1: "Chris Evans",
        answer2: "Robert Downey Jr.",
        answer3: "Chris Hemsworth",
        answer4: "Mark Ruffalo",
        correctAnswer: "Robert Downey Jr.",
        correctAnswerId: "option2",


     },
     {
        id: 22,
        category: "Science",
        question: "What type of electromagnetic waves have the shortest wavelength and highest energy?",
        answer1: "Infrared",
        answer2: "Ultraviolet",
        answer3: "Microwave",
        answer4: "Radio waves",
        correctAnswer: "Ultraviolet",
        correctAnswerId: "option2",

     },
     {
        id: 23,
        category: "Sport",
        question: "In which sport would you perform a slam dunk?",
        answer1: "Soccer(Football)",
        answer2: "Baseball",
        answer3: "Basketball",
        answer4: "Tennis",
        correctAnswer: "Basketball",
        correctAnswerId: "option3",

     },

     {
        id: 24,
        category: "Literature",
        question: "Who wrote the novel 'Pride and Prejudice'?",
        answer1: "Jane Austen",
        answer2: "Charlotte Brontë",
        answer3: "Emily Dickinson",
        answer4: " Virginia Woolf",
        correctAnswer: "Jane Austen",
        correctAnswerId: "option1",

     },

     {
        id: 25,
        category: "History",
        question: "The Renaissance was a period of cultural and artistic flourishing that originated in which European city?",
        answer1: "Athens",
        answer2: "Rome",
        answer3: "Paris",
        answer4: "Florence",
        correctAnswer: "Florence",
        correctAnswerId: "option4",

     },

     
     {
        id: 26,
        category: "Geography",
        question: "Which mountain range stretches along the western coast of South America?",
        answer1: "Rocky Mountains",
        answer2: "Himalayas",
        answer3: "Alps",
        answer4: "Andes",
        correctAnswer: "Andes",
        correctAnswerId: "option4",

     },

     {
        id: 27,
        category: "Entertainment",
        question: "In which of the following games is Commander Shepard the main character?",
        answer1: "Dragon age origins",
        answer2: "Dark Souls",
        answer3: "Baldurs Gate 3",
        answer4: "Mass effect 2",
        correctAnswer: "Mass effect 2",
        correctAnswerId: "option4",

     },

     {
        id: 28,
        category: "Science",
        question: "What is the name of the process where a solid chages directly to the gas form?",
        answer1: "Sublimation",
        answer2: "Evaporation",
        answer3: "Condensation",
        answer4: "Melting",
        correctAnswer: "Sublimation",
        correctAnswerId: "option1",

     },

     {
        id: 29,
        category: "Sport",
        question: "Which city is famous for hosting the Summer Olympics in 2008 and is known for its iconic 'Bird's Nest' stadium?",
        answer1: "Tokyo",
        answer2: "Rio de Janeiro",
        answer3: "Beijing",
        answer4: "Sydney",
        correctAnswer: "Beijing",
        correctAnswerId: "option3",

     },

     {
        id: 30,
        category: "Literature",
        question: "Which of the following book is part of the 'A Song of Ice and Fire' saga?",
        answer1: "A Storm of Swords",
        answer2: "The Wolves Kingdom",
        answer3: "The Deads Laughs",
        answer4: "The Cursed Sanctuary",
        correctAnswer: "A Storm of Swords",
        correctAnswerId: "option1",
     },
];

