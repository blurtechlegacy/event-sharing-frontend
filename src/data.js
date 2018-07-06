const data = [
    {
    id: 1, // Primary key
    host: 1, // id from table `users`
    name: "Party in the forest", // Event name
    description: "Party in the forest with guitar music 🎸, campfire 🔥. We might be spending the night",
    place: "54.8437876,83.0718511", // Geo coordinates
    tags: "1,5,2", // ids from table `tags`
    guests: "1,4,2,6", // ids from table `users`
    start: "2018-07-03 19:00:00", // Datetime format YYYY-MM-DD HH:MM:SS of event start
    end: "2018-07-04 12:00:00" // Datetime format YYYY-MM-DD HH:MM:SS of event end
},
    {
        id: 2, // Primary key
        host: 2,// id from table `users`
        name: "Happy funeral09", // Event name
        description: "Hello world, this is a large Tweet. This tweet has 280 characters instead of the regular and boring 140, and it's going to change everything. One more thing: you can do this yourself with a userscript in Chrome, it's really simple to do :)",
        place: "54.8437876,83.0718511", // Geo coordinates
        tags: "1,5,2", // ids from table `tags`
        guests: "1,4,2,6", // ids from table `users`
        start: "2018-07-03 19:00:00", // Datetime format YYYY-MM-DD HH:MM:SS of event start
        end: "2018-07-04 12:00:00" // Datetime format YYYY-MM-DD HH:MM:SS of event end
    },
    {
        id: 3, // Primary key
        host: 3,// id from table `users`
        name: "Welcome to the BLUREDTECH", // Event name
        description: "Party in the forest with guitar music 🎸, campfire 🔥. We might be spending the night",
        place: "54.8437876,83.0718511", // Geo coordinates
        tags: "1,5,2", // ids from table `tags`
        guests: "1,4,2,6", // ids from table `users`
        start: "2018-07-03 19:00:00", // Datetime format YYYY-MM-DD HH:MM:SS of event start
        end: "2018-07-04 12:00:00" // Datetime format YYYY-MM-DD HH:MM:SS of event end
    },
    {
        id: 4, // Primary key
        host: 4,// id from table `users`
        name: "Го куреть!))00)", // Event name
        description: "Party in the forest with guitar music 🎸, campfire 🔥. We might be spending the night",
        place: "54.8437876,83.0718511", // Geo coordinates
        tags: "1,5,2", // ids from table `tags`
        guests: "1,4,2,6", // ids from table `users`
        start: "2018-07-03 19:00:00", // Datetime format YYYY-MM-DD HH:MM:SS of event start
        end: "2018-07-04 12:00:00" // Datetime format YYYY-MM-DD HH:MM:SS of event end
    },
]

export default data;