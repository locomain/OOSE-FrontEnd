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
        url:'/education/1',
        component:'<module-page></module-page>'
    }
]);