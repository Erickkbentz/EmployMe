## Data Folder

This folder contains all the data files used in the project:

- `raw.csv`: The raw data file.
- `transformed.csv`: The transformed data file.
- `schema.sql`: The SQL schema file for creating the database.
- `database.db`: The SQLite database file.

## Installing SQLite3

### On Mac
1. Install [Homebrew](https://brew.sh/) (if not already installed)
    ```sh
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

2. Install SQLite3
    ```sh
    brew install sqlite3
    ```

3. Verify the Installation
    ```sh
    sqlite3 --version
    ```


### On Windows

1. Install [Chocolatey](https://chocolatey.org/install#individual) (if not already installed).
     ```sh
     Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
     ```

2. Install SQLite3
    ```sh
    choco install sqlite
    ```

3. Verify the Installation
    ```sh
    sqlite3 --version
    ```