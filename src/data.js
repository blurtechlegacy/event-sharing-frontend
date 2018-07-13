const data = {
    events: [
        {
            id: 1, // Primary key
            host: 1, // id from table `users`
            name: "House party", // Event name
            description:
                "Party in the forest with guitar music 🎸, campfire 🔥. We might be spending the night in tents ⛺.", // Event description
            place: "54.8437876,83.0718511", // Geo coordinates
            tags: [1, 5, 2], // ids from table `tags`
            guests: [1, 4, 2, 6], // ids from table `users`
            start: "2018-07-03 19:00:00", // Datetime format YYYY-MM-DD HH:MM:SS of event start
            end: "2018-07-04 12:00:00" // Datetime format YYYY-MM-DD HH:MM:SS of event end
        },
        {
            id: 2, // Primary key
            host: 2, // id from table `users`
            name: "AlcoParty", // Event name
            description:
                "Party in the forest with guitar music 🎸, campfire 🔥. We might be spending the night in tents ⛺.", // Event description
            place: "54.8437876,83.0718511", // Geo coordinates
            tags: [1, 3, 4], // ids from table `tags`
            guests: [1, 4, 2, 6], // ids from table `users`
            start: "2018-07-03 19:00:00", // Datetime format YYYY-MM-DD HH:MM:SS of event start
            end: "2018-07-04 12:00:00" // Datetime format YYYY-MM-DD HH:MM:SS of event end
        },
        {
            id: 3, // Primary key
            host: 3, // id from table `users`
            name: "Blurred Tech presentation", // Event name
            description:
                "new product ", // Event description
            place: "54.8437876,83.0718511", // Geo coordinates
            tags: [1, 3, 4], // ids from table `tags`
            guests: [1, 4, 2, 6], // ids from table `users`
            start: "2018-07-03 19:00:00", // Datetime format YYYY-MM-DD HH:MM:SS of event start
            end: "2018-07-04 12:00:00" // Datetime format YYYY-MM-DD HH:MM:SS of event end
        },
        {
            id: 4, // Primary key
            host: 4, // id from table `users`
            name: "Party in the forest", // Event name
            description:
                "Party in the forest with guitar music 🎸, campfire 🔥. We might be spending the night in tents ⛺.", // Event description
            place: "54.8437876,83.0718511", // Geo coordinates
            tags: [1, 3, 4], // ids from table `tags`
            guests: [1, 4, 2, 6], // ids from table `users`
            start: "2018-07-03 19:00:00", // Datetime format YYYY-MM-DD HH:MM:SS of event start
            end: "2018-07-04 12:00:00" // Datetime format YYYY-MM-DD HH:MM:SS of event end
        },
        {
            id: 5, // Primary key
            host: 5, // id from table `users`
            name: "Party in the forest", // Event name
            description:
                "Party in the forest with guitar music 🎸, campfire 🔥. We might be spending the night in tents ⛺.", // Event description
            place: "54.8437876,83.0718511", // Geo coordinates
            tags: [1, 3, 4], // ids from table `tags`
            guests: [1, 4, 2, 6], // ids from table `users`
            start: "2018-07-03 19:00:00", // Datetime format YYYY-MM-DD HH:MM:SS of event start
            end: "2018-07-04 12:00:00" // Datetime format YYYY-MM-DD HH:MM:SS of event end
        },
    ],
    tags: [
        {
            id: 1, // Primary key
            name: "forest", // tag name
            event_count: 12 // how many events used this tag. DEFAULT IS ZERO, FUCK!!!
        },

        {
            id: 2, // Primary key
            name: "movie", // tag name
            event_count: 12 // how many events used this tag. DEFAULT IS ZERO, FUCK!!!
        },
        {
            id: 3, // Primary key
            name: "music", // tag name
            event_count: 12 // how many events used this tag. DEFAULT IS ZERO, FUCK!!!
        },
        {
            id: 4, // Primary key
            name: "music", // tag name
            event_count: 12 // how many events used this tag. DEFAULT IS ZERO, FUCK!!!
        },
        {
            id: 5, // Primary key
            name: "music", // tag name
            event_count: 12 // how many events used this tag. DEFAULT IS ZERO, FUCK!!!
        },
        {
            id: 6, // Primary key
            name: "music", // tag name
            event_count: 12 // how many events used this tag. DEFAULT IS ZERO, FUCK!!!
        }
    ]
};

export default data;
