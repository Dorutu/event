'use-strict'

const getAllEvents = {
        name: 'get-all-events',
        text: `SELECT *
               FROM event_table`,
};

const getAllArtist = {
        name: 'get-all-artist',
        text: `SELECT *
               FROM artist_table`,
};

const getAllLocation = {
        name: 'get-all-location',
        text: `SELECT *
               FROM location_table`,
};


// CRUD


const insertArtistTable = {
    name: 'create-artist',
    text: `INSERT INTO artist_table(artist_id, name, description, top_song)
           VALUES($1, $2, $3, $4)`,
};

const inertLocationTable = {
    name: 'create-location',
    text: `INSERT INTO location_table(location_id, name, address, image)
           VALUES($1, $2, $3, $4)`,
};

const insertEventTable = {
    name: 'create-event',
    text: `INSERT INTO event_table(event_id, name, description, location_id, image, price, artist_id)
           VALUES($1, $2, $3, $4, $5, $6, $7)`,
};



const getArtist = {
    name: 'get-artist',
    text: `SELECT *
           FROM artist_table
           WHERE id = $1`,
};

const getEvent = {
    name: 'get-artist',
    text: `SELECT *
           FROM event_table
           WHERE id = $1`,
};

const getLocation = {
    name: 'get-artist',
    text: `SELECT *
           FROM location_table
           WHERE id = $1`,
};



const deleteArtist = {
       name: 'delete-artist',
       text: `DELETE *
              FROM artist_table
              WHERE artist_id = $1`,
};

const deleteEvent = {
       name: 'delete-event',
       text: `DELETE *
              FROM event_table
              WHERE event_id = $1`,
};

const deleteLocation = {
       name: 'delete-location',
       text: `DELETE *
              FROM location_table
              WHERE location_id = $1`,
};


module.exports = {
  getAllEvents,
  getAllArtist,
  getAllLocation,
  insertArtistTable,
  inertLocationTable,
  insertEventTable,
  getArtist,
  getEvent,
  getLocation
}