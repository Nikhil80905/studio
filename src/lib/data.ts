export const exercises = [
  {
    category: 'Chest',
    name: 'Bench Press',
    description: 'A compound exercise for the upper body. It primarily works the pectoralis major, anterior deltoids, and triceps.',
    difficulty: 'Intermediate',
    targetMuscles: ['Chest', 'Shoulders', 'Triceps'],
    imageId: 'bench-press',
  },
  {
    category: 'Chest',
    name: 'Push-up',
    description: 'A classic bodyweight exercise that works the chest, shoulders, and triceps.',
    difficulty: 'Beginner',
    targetMuscles: ['Chest', 'Shoulders', 'Triceps'],
    imageId: 'push-up',
  },
  {
    category: 'Back',
    name: 'Pull-up',
    description: 'A challenging upper-body exercise where you lift your body up to a bar. It works the latissimus dorsi, biceps, and other back muscles.',
    difficulty: 'Advanced',
    targetMuscles: ['Back', 'Biceps'],
    imageId: 'pull-up',
  },
  {
    category: 'Back',
    name: 'Deadlift',
    description: 'A full-body strength exercise that involves lifting a loaded barbell off the floor.',
    difficulty: 'Advanced',
    targetMuscles: ['Back', 'Legs', 'Glutes'],
    imageId: 'deadlift',
  },
  {
    category: 'Legs',
    name: 'Squat',
    description: 'A fundamental lower-body exercise that targets the quadriceps, hamstrings, and glutes.',
    difficulty: 'Beginner',
    targetMuscles: ['Quads', 'Hamstrings', 'Glutes'],
    imageId: 'squat',
  },
  {
    category: 'Legs',
    name: 'Lunges',
    description: 'A unilateral leg exercise that works one leg at a time, improving balance and strength.',
    difficulty: 'Beginner',
    targetMuscles: ['Quads', 'Glutes'],
    imageId: 'lunges',
  },
  {
    category: 'Arms',
    name: 'Bicep Curl',
    description: 'An isolation exercise that targets the biceps.',
    difficulty: 'Beginner',
    targetMuscles: ['Biceps'],
    imageId: 'bicep-curl',
  },
  {
    category: 'Abs',
    name: 'Plank',
    description: 'An isometric core strength exercise that involves maintaining a position similar to a push-up for the maximum possible time.',
    difficulty: 'Beginner',
    targetMuscles: ['Abs', 'Core'],
    imageId: 'plank',
  },
  {
    category: 'Cardio',
    name: 'Running',
    description: 'An effective cardiovascular exercise that improves heart health and endurance.',
    difficulty: 'Beginner',
    targetMuscles: ['Full Body'],
    imageId: 'running',
  },
  {
    category: 'Yoga',
    name: 'Downward-Facing Dog',
    description: 'A foundational yoga pose that stretches and strengthens the entire body.',
    difficulty: 'Beginner',
    targetMuscles: ['Full Body', 'Flexibility'],
    imageId: 'yoga',
  },
];

export const nutritionPlan = {
  summary: {
    calories: '2,200 kcal',
    protein: '150g',
    carbs: '250g',
    fats: '60g',
  },
  meals: [
    { name: 'Breakfast', items: ['Oatmeal with berries and nuts', 'Greek yogurt'], time: '8:00 AM' },
    { name: 'Lunch', items: ['Grilled chicken salad with vinaigrette', 'Quinoa'], time: '1:00 PM' },
    { name: 'Dinner', items: ['Salmon with roasted vegetables', 'Brown rice'], time: '7:00 PM' },
    { name: 'Snacks', items: ['Apple with peanut butter', 'Protein shake'], time: '4:00 PM & 9:00 PM' },
  ],
};

export const progressData = {
  weight: [
    { date: 'Jan 1', weight: 85 },
    { date: 'Jan 8', weight: 84.5 },
    { date: 'Jan 15', weight: 84 },
    { date: 'Jan 22', weight: 83 },
    { date: 'Jan 29', weight: 82.5 },
    { date: 'Feb 5', weight: 82 },
    { date: 'Feb 12', weight: 82 },
  ],
  measurements: [
    { date: 'Jan 1', chest: 102, waist: 85, hips: 105 },
    { date: 'Feb 1', chest: 103, waist: 83, hips: 104 },
  ],
};

export const activityData = [
  { day: 'Mon', calories: 400 },
  { day: 'Tue', calories: 300 },
  { day: 'Wed', calories: 200 },
  { day: 'Thu', calories: 278 },
  { day: 'Fri', calories: 189 },
  { day: 'Sat', calories: 239 },
  { day: 'Sun', calories: 349 },
];

export const blogPosts = [
    {
      author: 'Sally Kuzemchak, RD, MS',
      title: 'What Your Stool Is Trying To Tell You',
      description: 'Registered dietitian',
      imageId: 'sally-kuzemchak',
    },
    {
      author: 'Elizabeth Ward',
      title: 'What Happens to Your Gut with Age',
      description: 'Registered dietitian nutritionist',
      imageId: 'elizabeth-ward',
    },
  ];

export const dietPlans = [
    {
        title: "Don't Fall for Fad Diets",
        description: "Get the real facts about fad diets, and learn some healthy weight loss strategies that you can use for life.",
        imageId: "fad-diets"
    },
    {
        title: "The Mediterranean Diet",
        description: "Discover the heart-healthy benefits of a diet rich in fresh vegetables, fruits, whole grains, and healthy fats.",
        imageId: "mediterranean-diet"
    },
    {
        title: "Intermittent Fasting 101",
        description: "Learn about the different methods of intermittent fasting and how it can impact weight loss and metabolic health.",
        imageId: "intermittent-fasting"
    },
    {
        title: "Plant-Based Power",
        description: "Explore the advantages of a plant-based diet, from improved energy levels to a lower environmental footprint.",
        imageId: "plant-based"
    }
]
