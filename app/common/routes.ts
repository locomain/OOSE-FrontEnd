import '@locomain/brawts'

_.navigator([
    {
        url:'/students',
        component:'<student-page></student-page>'
    },
    {
        url:'/teachers',
        component:'<h1>Test</h1>'
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