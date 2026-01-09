export const tenses = [
    {
        id: "present-simple",
        time: "present", 
        title: "Present Simple",
        definition: "The Present Simple is the most basic tense in English. Its main job is to talk about things that are generally true, things that happen over and over again, and things that are set in stone. Instead of talking about what is happening at this exact second, it focuses on facts, daily life, and permanent situations.",
        usage: [
            "Habits and Routines",
            "General Truths and Facts",
            "Permanent Situations",
            "Schedules/Timetables",
            "Common Time Signals"
        ],
        formula: {
            positive: "Subject + Verb 1 (s/es for He/She/It) + Object",
            negative: "Subject + Do/Does + Not + Verb 1 + Object",
            interrogative: "Do/Does + Subject + Verb 1 + Object?"
        }
    },

    {
        id: "present-continuous",
        time: "present", 
        title: "Present Continuous",
        definition: "The Present Continuous tense is used to talk about actions that are happening right now or around the present time. It emphasizes temporary situations and actions that are still in progress.",
        usage: [
            "Actions happening now",
            "Temporary situations",
            "Future plans (already arranged)",
            "Trends or changing situations",
            "Repeated actions with annoyance"
        ],
        formula: {
            positive: "Subject + Am/Is/Are + Verb-ing + Object",
            negative: "Subject + Am/Is/Are + Not + Verb-ing + Object",
            interrogative: "Am/Is/Are + Subject + Verb-ing + Object?"
        }
    },

    {
        id: "past-simple",
        time: "past", 
        title: "Past Simple",
        definition: "The Past Simple tense is used to talk about actions or situations that happened and finished at a specific time in the past.",
        usage: [
            "Completed actions in the past",
            "Past habits",
            "Series of completed actions",
            "Past facts or generalizations",
            "Specific time in the past"
        ],
        formula: {
            positive: "Subject + Verb 2 + Object",
            negative: "Subject + Did + Not + Verb 1 + Object",
            interrogative: "Did + Subject + Verb 1 + Object?"
        }
    },

    {
        id: "past-continuous",
        time: "past", 
        title: "Past Continuous",
        definition: "The Past Continuous tense is used to describe actions that were in progress at a specific moment in the past.",
        usage: [
            "Actions in progress in the past",
            "Interrupted actions",
            "Parallel actions in the past",
            "Setting the background of a story"
        ],
        formula: {
            positive: "Subject + Was/Were + Verb-ing + Object",
            negative: "Subject + Was/Were + Not + Verb-ing + Object",
            interrogative: "Was/Were + Subject + Verb-ing + Object?"
        }
    },

    {
        id: "present-perfect",
        time: "present", 
        title: "Present Perfect",
        definition: "The Present Perfect tense connects the past with the present. It is used to talk about experiences or actions that happened at an unspecified time before now.",
        usage: [
            "Life experiences",
            "Actions with results in the present",
            "Actions that started in the past and continue until now",
            "Unfinished time periods"
        ],
        formula: {
            positive: "Subject + Has/Have + Verb 3 + Object",
            negative: "Subject + Has/Have + Not + Verb 3 + Object",
            interrogative: "Has/Have + Subject + Verb 3 + Object?"
        }
    },

    {
        id: "present-perfect-continuous",
        time: "present", 
        title: "Present Perfect Continuous",
        definition: "The Present Perfect Continuous tense is used to emphasize the duration of an action that started in the past and is still continuing or has recently stopped.",
        usage: [
            "Actions that started in the past and continue now",
            "Emphasizing duration",
            "Recently finished actions with visible results"
        ],
        formula: {
            positive: "Subject + Has/Have + Been + Verb-ing + Object",
            negative: "Subject + Has/Have + Not + Been + Verb-ing + Object",
            interrogative: "Has/Have + Subject + Been + Verb-ing + Object?"
        }
    },

    {
        id: "past-perfect-continuous",
        time: "past", 
        title: "Past Perfect Continuous",
        definition: "The Past Perfect Continuous tense is used to show that an action was ongoing for a period of time before another action in the past occurred.",
        usage: [
            "Actions continuing up to a point in the past",
            "Showing cause of a past action",
            "Emphasizing duration before another past event"
        ],
        formula: {
            positive: "Subject + Had + Been + Verb-ing + Object",
            negative: "Subject + Had + Not + Been + Verb-ing + Object",
            interrogative: "Had + Subject + Been + Verb-ing + Object?"
        }
    }, 

    {
    id: "future-simple",
    time: "future", 
    title: "Future Simple",
    definition: "The Future Simple tense is used to talk about actions or events that will happen in the future. It is often used for decisions made at the moment of speaking, predictions, promises, and offers.",
    usage: [
        "Decisions made at the moment of speaking",
        "Predictions about the future",
        "Promises and offers",
        "Future facts"
    ],
    formula: {
        positive: "Subject + Will + Verb 1 + Object",
        negative: "Subject + Will + Not + Verb 1 + Object",
        interrogative: "Will + Subject + Verb 1 + Object?"
    }
},

{
    id: "future-going-to",
    time: "future", 
    title: "Future (Going To)",
    definition: "The Going To future tense is used to talk about plans or intentions that have already been decided before the moment of speaking, as well as predictions based on present evidence.",
    usage: [
        "Planned future actions",
        "Strong intentions",
        "Predictions based on evidence"
    ],
    formula: {
        positive: "Subject + Am/Is/Are + Going To + Verb 1 + Object",
        negative: "Subject + Am/Is/Are + Not + Going To + Verb 1 + Object",
        interrogative: "Am/Is/Are + Subject + Going To + Verb 1 + Object?"
    }
},

{
    id: "future-continuous",
    time: "future", 
    title: "Future Continuous",
    definition: "The Future Continuous tense is used to describe actions that will be in progress at a specific time in the future.",
    usage: [
        "Actions that will be happening at a specific time in the future",
        "Polite questions about future plans",
        "Parallel actions in the future"
    ],
    formula: {
        positive: "Subject + Will + Be + Verb-ing + Object",
        negative: "Subject + Will + Not + Be + Verb-ing + Object",
        interrogative: "Will + Subject + Be + Verb-ing + Object?"
    }
},

{
    id: "future-perfect",
    time: "future", 
    title: "Future Perfect",
    definition: "The Future Perfect tense is used to talk about actions that will be completed before a specific time or event in the future.",
    usage: [
        "Actions completed before a future time",
        "Deadlines in the future",
        "Future achievements"
    ],
    formula: {
        positive: "Subject + Will + Have + Verb 3 + Object",
        negative: "Subject + Will + Not + Have + Verb 3 + Object",
        interrogative: "Will + Subject + Have + Verb 3 + Object?"
    }
},

{
    id: "future-perfect-continuous",
    time: "future", 
    title: "Future Perfect Continuous",
    definition: "The Future Perfect Continuous tense is used to emphasize the duration of an action that will continue up to a certain point in the future.",
    usage: [
        "Actions continuing up to a future time",
        "Emphasizing duration",
        "Cause of a future situation"
    ],
    formula: {
        positive: "Subject + Will + Have + Been + Verb-ing + Object",
        negative: "Subject + Will + Not + Have + Been + Verb-ing + Object",
        interrogative: "Will + Subject + Have + Been + Verb-ing + Object?"
    }
}

];

