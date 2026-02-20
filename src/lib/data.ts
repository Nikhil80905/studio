export const exercises = [
  {
    category: 'Chest',
    name: 'Bench Press',
    description: 'Lie on your back on a flat bench. Grip the barbell with hands slightly wider than shoulder-width. Lower the bar to your mid-chest, then press it back up until your arms are fully extended.',
    difficulty: 'Intermediate',
    targetMuscles: ['Chest', 'Shoulders', 'Triceps'],
    imageId: 'bench-press',
  },
  {
    category: 'Chest',
    name: 'Push-up',
    description: 'Start in a plank position with hands slightly wider than shoulders. Lower your body until your chest nearly touches the floor. Keep your core tight and back flat. Push back up to the starting position.',
    difficulty: 'Beginner',
    targetMuscles: ['Chest', 'Shoulders', 'Triceps'],
    imageId: 'push-up',
  },
  {
    category: 'Chest',
    name: 'Incline Dumbbell Press',
    description: 'Set a bench to a 30-45 degree angle. Hold dumbbells above your chest with a neutral or overhand grip. Lower the weights to your upper chest, then press back up.',
    difficulty: 'Intermediate',
    targetMuscles: ['Upper Chest', 'Shoulders'],
    imageId: 'bench-press',
  },
  {
    category: 'Back',
    name: 'Pull-up',
    description: 'Grasp a pull-up bar with an overhand grip, hands wider than shoulders. Pull your body up until your chin is over the bar. Lower yourself back down with control.',
    difficulty: 'Advanced',
    targetMuscles: ['Back', 'Biceps'],
    imageId: 'pull-up',
  },
  {
    category: 'Back',
    name: 'Deadlift',
    description: 'Stand with feet hip-width apart, barbell over mid-foot. Hinge at hips to grip the bar. Keeping back flat, lift the bar by extending hips and knees. Lower with control.',
    difficulty: 'Advanced',
    targetMuscles: ['Back', 'Legs', 'Glutes'],
    imageId: 'deadlift',
  },
  {
    category: 'Back',
    name: 'Bent Over Row',
    description: 'Hinge at the hips with a slight bend in knees. Hold a barbell with an overhand grip. Pull the bar toward your lower ribs, squeezing shoulder blades together.',
    difficulty: 'Intermediate',
    targetMuscles: ['Back', 'Biceps'],
    imageId: 'back-row',
  },
  {
    category: 'Legs',
    name: 'Squat',
    description: 'Stand with feet shoulder-width apart. Lower your hips back and down as if sitting in a chair. Keep your chest up and knees over toes. Drive through heels to return to standing.',
    difficulty: 'Beginner',
    targetMuscles: ['Quads', 'Hamstrings', 'Glutes'],
    imageId: 'squat',
  },
  {
    category: 'Legs',
    name: 'Lunges',
    description: 'Step forward with one leg and lower your hips until both knees are bent at 90-degree angles. Keep your front knee directly above your ankle. Push back to starting position.',
    difficulty: 'Beginner',
    targetMuscles: ['Quads', 'Glutes'],
    imageId: 'lunges',
  },
  {
    category: 'Legs',
    name: 'Leg Press',
    description: 'Sit on the machine with feet shoulder-width apart on the platform. Lower the platform until knees are at 90 degrees, then push it back up without locking your knees.',
    difficulty: 'Intermediate',
    targetMuscles: ['Quads', 'Glutes', 'Hamstrings'],
    imageId: 'leg-press',
  },
  {
    category: 'Shoulders',
    name: 'Overhead Press',
    description: 'Stand with feet shoulder-width apart. Hold a barbell at shoulder height. Press the bar directly overhead until arms are locked, then lower it back to shoulders.',
    difficulty: 'Intermediate',
    targetMuscles: ['Shoulders', 'Triceps'],
    imageId: 'shoulder-press',
  },
  {
    category: 'Shoulders',
    name: 'Lateral Raise',
    description: 'Stand with a dumbbell in each hand at your sides. Keeping a slight bend in elbows, raise arms out to the sides until they are level with shoulders. Lower slowly.',
    difficulty: 'Beginner',
    targetMuscles: ['Shoulders'],
    imageId: 'lateral-raise',
  },
  {
    category: 'Arms',
    name: 'Bicep Curl',
    description: 'Hold dumbbells at your sides, palms facing forward. Keep elbows close to your torso. Curl the weights while contracting your biceps. Lower slowly.',
    difficulty: 'Beginner',
    targetMuscles: ['Biceps'],
    imageId: 'bicep-curl',
  },
  {
    category: 'Arms',
    name: 'Tricep Extension',
    description: 'Hold a dumbbell overhead with both hands. Lower the weight behind your head by bending at the elbows. Extend arms to return to the starting position.',
    difficulty: 'Beginner',
    targetMuscles: ['Triceps'],
    imageId: 'tricep-extension',
  },
  {
    category: 'Abs',
    name: 'Plank',
    description: 'Lie face down, resting on your forearms and toes. Keep your body in a straight line from head to heels. Engage your core and hold for time.',
    difficulty: 'Beginner',
    targetMuscles: ['Abs', 'Core'],
    imageId: 'plank',
  },
  {
    category: 'Abs',
    name: 'Russian Twist',
    description: 'Sit with knees bent and feet off the ground. Lean back slightly. Hold a weight or clasp hands and rotate your torso from side to side, touching the floor.',
    difficulty: 'Intermediate',
    targetMuscles: ['Abs', 'Obliques'],
    imageId: 'russian-twist',
  },
  {
    category: 'Cardio',
    name: 'Running',
    description: 'Maintain an upright posture, land on your mid-foot, and keep a steady breathing rhythm. Swing arms naturally at your sides.',
    difficulty: 'Beginner',
    targetMuscles: ['Full Body'],
    imageId: 'running',
  },
  {
    category: 'Yoga',
    name: 'Downward-Facing Dog',
    description: 'Start on hands and knees. Lift your hips toward the ceiling, forming an inverted V-shape. Press heels toward the floor and spread fingers wide.',
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