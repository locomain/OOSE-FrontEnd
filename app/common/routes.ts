import '@locomain/brawts'

_.navigator([
    {
        url:'/students',
        component:'<h1>Test</h1>'
    },
    {
        url:'/teachers',
        component:'<h1>Test</h1>'
    },
    {
        url:'/educations',
        component:'<education-page></education-page>'
    }
]);