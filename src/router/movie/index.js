export default{
    path : '/movie',
    component : () => import('@/views/Movie'),
    children :[
        {
            path : 'nowplaying',
            component : ()=>import('@/components/NowPlaying')
        },
        {
            path : 'comingSoon',
            component : ()=>import('@/components/ComingSoon')
        },
        {
            path : 'city',
            component : ()=>import('@/components/City')
        },
        {
            path : 'search',
            component : ()=>import('@/components/Search')
        },
        {
            path : '/movie',
            redirect : '/movie/nowPlaying'
        }
    ]
}