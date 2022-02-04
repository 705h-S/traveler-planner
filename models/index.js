const Traveller = require('./traveller');
const Location = require('./location');
const Trips = require('./trips');

Traveller.hasMany(Trips,{
    foreignKey:'traveller_id',
    onDelete: 'CASCADE',
});

Trips.hasMany(Location,{
    foreignKey:'Location_id',
});

module.exports = { Traveller, Location, Trips };
