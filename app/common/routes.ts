import '@locomain/brawts'

_.navigator([
    {
        url:'',
        component:'<student-page></student-page>'
    },
    {
        url:'/students',
        component:'<student-page></student-page>'
    },
    {
        url:'/teachers',
        component:'<teacher-page></teacher-page>'
    },
    {
        url:'/educations',
        component:'<education-page></education-page>'
    },
    {
        url:'/education/:id',
        component:'<module-page></module-page>'
    },
    {
        url:'/education/:educationid/module/:id',
        component:'<lesson-page></lesson-page>'
    }
]);