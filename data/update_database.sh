#!/bin/bash

# Define variables
DATABASE="database.db"
CSV_FILE="transformed.csv"
SCHEMA_FILE="schema.sql"

# Remove the existing database if it exists
if [ -f "$DATABASE" ]; then
    rm "$DATABASE"
fi

# Create a new SQLite database and table using schema.sql
sqlite3 "$DATABASE" < "$SCHEMA_FILE"

# Import the data from transformed.csv into the jobs table
sqlite3 "$DATABASE" <<EOF
.mode csv
.import $CSV_FILE jobs
EOF

echo "Database update complete. Data imported from $CSV_FILE."