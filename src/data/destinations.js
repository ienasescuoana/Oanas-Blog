const destinations = [
    {
        id: 1, 
        name: 'Europa'
    },
    {
        id: 2, 
        name: 'Asia'
    },
    {
        id: 3, 
        name: 'Africa'
    },
    {
        id: 4, 
        name: 'America'
    }
];

export const getDestinationById = (id) => {
    console.log(destinations);
    console.log(id);
    console.log(destinations.find((destination) => destination.id === parseInt(id)));
    return destinations.find((destination) => destination.id === parseInt(id)); 
};

export default destinations;