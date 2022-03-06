let courseTypes={1:'Live', 2:'Self Paced'}
let courseCategories={1:'Certfication', 2:'Trainings', 3:'Internships'}
let course_status={1:'Pending', 2:'Approved', 3:'Rejected'}

// ----------TABLES
let Course_Master={

    // Default Columns
    course_id:'',
    course_code:'CRO_1233456789',

    // Intr 
    coruse_title:'',
    coruse_description:'',
    coruse_thumbnail:'',
    coruse_price:'',
    coruse_type:1,
    coruse_category:1,
    coruse_duration:'INT - to be considered in weeks like 8 for 8 weeks',

    // Schedule
    course_schedule:'JSON',

    // Data Related Columns
    course_syllabus:' NESTED JSON -Refer to Course JSON',
    course_projects:'NESTED JASON-  Refer to Project JSON',
    course_targetted_skills:'ARRAY -Stringify- Refer to Skills JSON',
    course_prerequisites:'ARRAY -Stringify - Refer to Skills JSON',
    course_features:'ARRAY-Stringify- Refer to Skills JSON',

    // Instructor
    course_instructor:'Instructor Code',

    // Status
    course_status:'INT- Refer to the possible values of starus object',
    course_rejected_comments:'',
    
    // Updated on
    course_updated_on:'DATA'

}

// Course Rating Mapping

let courseRatingMapping={
    course_rating_id:'Int',
    course_rating:[1,2,3,4,5],
    course_comments:['comment -1', "commnet-1"],
    course_code:'CRO_1234567889'
}

// Course Slider Mapping
let courseSliderMapping={
    course_slider_id:'INT -AUTO',
    course_slider_code:'ORGINAL COURSE CODE',
    course_slider_serial_no:'INT-[1,2,...10]',
}

// -----------------JSONS TO BE SAVED IN DB

// Schedule Droppned
let course_schedule={

    days:['Mon', 'Tues'],
    duration:' INT- no. of hours',
    startingHours:'TYPE DATA- Value hours eg. 1:00pm', endingHours:'TYPE DATA- Value hours eg. 1:00pm2:00pm'
    // monday:{isactive:'t/f', duration:' INT- no. of hours', startingHours:'TYPE DATA- Value hours eg. 1:00pm', endingHours:'TYPE DATA- Value hours eg. 1:00pm2:00pm' },
    // tuesday:{isactive:'t/f', duration:' INT- no. of hours', startingHours:'TYPE DATA- Value hours eg. 1:00pm', endingHours:'TYPE DATA- Value hours eg. 1:00pm2:00pm' },
    // wednesday:{isactive:'t/f', duration:' INT- no. of hours', startingHours:'TYPE DATA- Value hours eg. 1:00pm', endingHours:'TYPE DATA- Value hours eg. 1:00pm2:00pm' },
    // thu:{isactive:'t/f', duration:' INT- no. of hours', startingHours:'TYPE DATA- Value hours eg. 1:00pm', endingHours:'TYPE DATA- Value hours eg. 1:00pm2:00pm' },
    // fri:{isactive:'t/f', duration:' INT- no. of hours', startingHours:'TYPE DATA- Value hours eg. 1:00pm', endingHours:'TYPE DATA- Value hours eg. 1:00pm2:00pm' },
    // sat:{isactive:'t/f', duration:' INT- no. of hours', startingHours:'TYPE DATA- Value hours eg. 1:00pm', endingHours:'TYPE DATA- Value hours eg. 1:00pm2:00pm' },
    // sun:{isactive:'t/f', duration:' INT- no. of hours', startingHours:'TYPE DATA- Value hours eg. 1:00pm', endingHours:'TYPE DATA- Value hours eg. 1:00pm2:00pm' },
}

// Course Syllbus
let courseSyllabus=[
    
    // Section -01
    {

    sectionHeading:'WHat is React JS',
    sectionData:[
        'Value-1', 'Valuse-2'
    ]

},
// Section -01
{

    sectionHeading:'WHat is React JS',
    sectionData:[
        'Value-1', 'Valuse-2'
    ]

},
// Section -01
{

    sectionHeading:'WHat is React JS',
    sectionData:[
        'Value-1', 'Valuse-2'
    ]

}
]

// Project JSON
let projectJASON=[
    // Project -01
    {

    projectHeading:'WHat is React JS',
    ProjectData:[
        'Value-1', 'Valuse-2'
    ]
},
 // Project -02
 {
    projectHeading:'WHat is React JS',
    ProjectData:[
        'Value-1', 'Valuse-2'
    ]
},
]

// Targetted SKills/ Pre-requisites and Features
let TargettedSkills = ['Skill1', 'Skill2', 'Skill3']

