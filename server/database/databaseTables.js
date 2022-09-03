const createSchema = {
    name: 'create-schema',
    text: `CREATE SCHEMA IF NOT EXISTS eventappdata`,
};

const createEventTable = {
    name: 'create-event-table',
    text: `CREATE TABLE IF NOT EXISTS event_table
            (
                event_id     SERIAL PRIMARY KEY,
                name         varchar(255) NOT NULL,
                description  varchar(255),
                location_id  INTEGER,
                image        varchar(255),
                price        DECIMAL,
                artist_id    INTEGER,
                CONSTRAINT fk_artist_id FOREIGN KEY(artist_id) REFERENCES artist_table(artist_id) ON DELETE CASCADE,
                CONSTRAINT fk_location_id FOREIGN KEY(location_id) REFERENCES location_table(location_id) ON DELETE CASCADE
            )`
}

const createArtistTable = {
    name: 'create-artist-table',
    text: `CREATE TABLE IF NOT EXISTS artist_table
            (
                artist_id       SERIAL PRIMARY KEY,
                name            varchar(255) NOT NULL,
                description     varchar(255),
                top_song        varchar(255)
            )`
}

const createLocationTable = {
    name: 'create-location-table',
    text: `CREATE TABLE IF NOT EXISTS location_table
            (
                location_id     SERIAL PRIMARY KEY,
                name            varchar(255) NOT NULL,
                address         varchar(255) NOT NULL,
                image           varchar(255)
            )`
}



module.exports = {
    createSchema,
    createEventTable,
    createArtistTable,
    createLocationTable
};