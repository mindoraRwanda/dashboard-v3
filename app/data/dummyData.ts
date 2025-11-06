// Dummy data for Mindora mental health dashboard with Rwanda context

export const mentalHealthCenters = [
    'Ndera Neuropsychiatric Hospital',
    'Caraes Ndera Mental Health Center',
    'King Faisal Hospital - Mental Health Unit',
    'CHUK Psychiatry Department',
    'CHUB Mental Health Services',
    'Rwanda Military Hospital - Psychology Unit',
    'Kibagabaga Hospital - Mental Health Clinic'
];

export const universities = [
    'University of Rwanda - Psychology Department',
    'Kigali Independent University (ULK) - Clinical Psychology',
    'Mount Kenya University Rwanda - Counseling Psychology'
];

export const clients = [
    {
        id: 1,
        name: 'Jean Baptiste Uwimana',
        age: 34,
        gender: 'Male',
        phone: '+250788123456',
        location: 'Kigali, Gasabo',
        lastSession: '2024-11-03',
        condition: 'Anxiety Disorder',
        status: 'Active',
        therapist: 'Dr. Mukamana Sarah'
    },
    {
        id: 2,
        name: 'Marie Claire Mukamana',
        age: 28,
        gender: 'Female',
        phone: '+250789234567',
        location: 'Kigali, Nyarugenge',
        lastSession: '2024-11-01',
        condition: 'Depression',
        status: 'Active',
        therapist: 'Dr. Uwimana Jean'
    },
    {
        id: 3,
        name: 'Emmanuel Nkurunziza',
        age: 45,
        gender: 'Male',
        phone: '+250787345678',
        location: 'Huye, Southern Province',
        lastSession: '2024-10-28',
        condition: 'PTSD',
        status: 'Follow-up',
        therapist: 'Dr. Habimana Paul'
    },
    {
        id: 4,
        name: 'Immaculée Nyirahabimana',
        age: 52,
        gender: 'Female',
        phone: '+250786456789',
        location: 'Musanze, Northern Province',
        lastSession: '2024-10-25',
        condition: 'Bipolar Disorder',
        status: 'Stable',
        therapist: 'Dr. Nkurunziza Alice'
    },
    {
        id: 5,
        name: 'Patrick Habimana',
        age: 39,
        gender: 'Male',
        phone: '+250785567890',
        location: 'Rubavu, Western Province',
        lastSession: '2024-11-02',
        condition: 'Panic Disorder',
        status: 'Active',
        therapist: 'Dr. Mukamana Sarah'
    },
    {
        id: 6,
        name: 'Grace Uwimana',
        age: 23,
        gender: 'Female',
        phone: '+250784678901',
        location: 'Kigali, Kicukiro',
        lastSession: '2024-11-04',
        condition: 'Social Anxiety',
        status: 'Active',
        therapist: 'Dr. Uwimana Jean'
    },
    {
        id: 7,
        name: 'David Niyonsenga',
        age: 31,
        gender: 'Male',
        phone: '+250783789012',
        location: 'Nyagatare, Eastern Province',
        lastSession: '2024-10-30',
        condition: 'OCD',
        status: 'Follow-up',
        therapist: 'Dr. Habimana Paul'
    }
];

export const appointments = [
    {
        id: 1,
        patientName: 'Jean Baptiste Uwimana',
        date: '2024-11-05',
        time: '09:00',
        type: 'Therapy Session',
        status: 'Confirmed',
        therapist: 'Dr. Mukamana Sarah'
    },
    {
        id: 2,
        patientName: 'Marie Claire Mukamana',
        date: '2024-11-05',
        time: '10:30',
        type: 'Follow-up Session',
        status: 'Confirmed',
        therapist: 'Dr. Uwimana Jean'
    },
    {
        id: 3,
        patientName: 'Emmanuel Nkurunziza',
        date: '2024-11-06',
        time: '14:00',
        type: 'PTSD Counseling',
        status: 'Pending',
        therapist: 'Dr. Habimana Paul'
    },
    {
        id: 4,
        patientName: 'Grace Uwimana',
        date: '2024-11-07',
        time: '11:00',
        type: 'CBT Session',
        status: 'Confirmed',
        therapist: 'Dr. Uwimana Jean'
    },
    {
        id: 5,
        patientName: 'Patrick Habimana',
        date: '2024-11-08',
        time: '15:30',
        type: 'Panic Disorder Therapy',
        status: 'Pending',
        therapist: 'Dr. Mukamana Sarah'
    }
];

export const communityPosts = [
    {
        id: 1,
        author: 'Dr. Uwimana Jean',
        title: 'Coping with Seasonal Depression in Rwanda',
        content: 'Understanding how weather changes affect mental health and practical strategies for managing seasonal mood changes during Rwanda\'s rainy season...',
        likes: 67,
        comments: 23,
        date: '2024-11-03',
        category: 'Depression'
    },
    {
        id: 2,
        author: 'Marie Claire M.',
        title: 'Breaking Mental Health Stigma in Our Communities',
        content: 'Sharing my journey with anxiety and how community support helped me heal. Let\'s normalize conversations about mental health in Rwanda...',
        likes: 89,
        comments: 34,
        date: '2024-11-02',
        category: 'Anxiety'
    },
    {
        id: 3,
        author: 'Dr. Habimana Paul',
        title: 'PTSD Recovery: A Path to Healing',
        content: 'Understanding trauma responses and evidence-based approaches to PTSD treatment. Recovery is possible with proper support and therapy...',
        likes: 45,
        comments: 18,
        date: '2024-11-01',
        category: 'PTSD'
    },
    {
        id: 4,
        author: 'Support Group Rwanda',
        title: 'Mindfulness Practices from Rwandan Culture',
        content: 'Exploring traditional Rwandan practices that promote mental wellness and how they complement modern therapy approaches...',
        likes: 56,
        comments: 21,
        date: '2024-10-31',
        category: 'Mindfulness'
    }
];

export const meditationSessions = [
    {
        id: 1,
        title: 'Morning Mindfulness for Anxiety',
        duration: '15 min',
        participants: 234,
        category: 'Anxiety Management',
        instructor: 'Dr. Mukamana Sarah'
    },
    {
        id: 2,
        title: 'Evening Calm for Depression',
        duration: '20 min',
        participants: 189,
        category: 'Depression Support',
        instructor: 'Dr. Uwimana Jean'
    },
    {
        id: 3,
        title: 'PTSD Grounding Techniques',
        duration: '12 min',
        participants: 67,
        category: 'Trauma Recovery',
        instructor: 'Dr. Habimana Paul'
    },
    {
        id: 4,
        title: 'Sleep Meditation for Insomnia',
        duration: '25 min',
        participants: 156,
        category: 'Sleep Disorders',
        instructor: 'Dr. Nkurunziza Alice'
    },
    {
        id: 5,
        title: 'Panic Attack Prevention',
        duration: '10 min',
        participants: 98,
        category: 'Panic Disorder',
        instructor: 'Dr. Mukamana Sarah'
    },
    {
        id: 6,
        title: 'Self-Compassion Practice',
        duration: '18 min',
        participants: 145,
        category: 'Self-Care',
        instructor: 'Dr. Uwimana Jean'
    }
];

export const therapists = [
    {
        id: 1,
        name: 'Dr. Uwimana Jean',
        specialization: 'Clinical Psychology',
        experience: '8 years',
        clients: 45,
        rating: 4.9,
        location: 'Kigali'
    },
    {
        id: 2,
        name: 'Dr. Mukamana Sarah',
        specialization: 'Anxiety & Panic Disorders',
        experience: '6 years',
        clients: 38,
        rating: 4.8,
        location: 'Kigali'
    },
    {
        id: 3,
        name: 'Dr. Habimana Paul',
        specialization: 'Trauma & PTSD',
        experience: '10 years',
        clients: 32,
        rating: 4.9,
        location: 'Huye'
    },
    {
        id: 4,
        name: 'Dr. Nkurunziza Alice',
        specialization: 'Mood Disorders',
        experience: '7 years',
        clients: 41,
        rating: 4.7,
        location: 'Musanze'
    }
];

export const statistics = {
    totalUsers: 1040,
    totalMentalHealthCenters: 7,
    totalUniversities: 3,
    activeClients: 234,
    totalSessions: 156,
    completedSessions: 142,
    pendingSessions: 14,
    communityMembers: 892,
    meditationSessions: 67,
    monthlyGrowth: 15.3,
    therapists: 12,
    supportGroups: 8,
    crisisInterventions: 23
};

// Mental health specific data
export const mentalHealthConditions = [
    { name: 'Anxiety Disorders', count: 89, percentage: 38 },
    { name: 'Depression', count: 67, percentage: 29 },
    { name: 'PTSD', count: 34, percentage: 15 },
    { name: 'Bipolar Disorder', count: 23, percentage: 10 },
    { name: 'OCD', count: 12, percentage: 5 },
    { name: 'Panic Disorder', count: 9, percentage: 3 }
];

export const supportGroups = [
    {
        id: 1,
        name: 'Anxiety Support Circle',
        members: 23,
        meetingDay: 'Wednesdays',
        time: '18:00',
        facilitator: 'Dr. Mukamana Sarah'
    },
    {
        id: 2,
        name: 'Depression Recovery Group',
        members: 18,
        meetingDay: 'Mondays',
        time: '17:30',
        facilitator: 'Dr. Uwimana Jean'
    },
    {
        id: 3,
        name: 'PTSD Healing Circle',
        members: 12,
        meetingDay: 'Fridays',
        time: '16:00',
        facilitator: 'Dr. Habimana Paul'
    },
    {
        id: 4,
        name: 'Bipolar Support Network',
        members: 15,
        meetingDay: 'Thursdays',
        time: '18:30',
        facilitator: 'Dr. Nkurunziza Alice'
    }
];

// For backward compatibility, keeping patients as alias to clients
export const patients = clients;