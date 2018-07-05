const data = [{
    id:1, // Primary key
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
    id:2, // Primary key
    host: 1, // id from table `users`
    name: "Party in the forest", // Event name
    description: "Party in the forest with guitar music 🎸, campfire 🔥. We might be spending the night",
    place: "54.8437876,83.0718511", // Geo coordinates
    tags: "1,5,2", // ids from table `tags`
    guests: "1,4,2,6", // ids from table `users`
    start: "2018-07-03 19:00:00", // Datetime format YYYY-MM-DD HH:MM:SS of event start
    end: "2018-07-04 12:00:00" // Datetime format YYYY-MM-DD HH:MM:SS of event end
},
]

export default data;