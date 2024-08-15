# Setting Up the Project
## Installing and Running `tor`

### On Mac
1. Install [homebrew](https://brew.sh/)
    ```sh
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
2. Install and Start Tor
    ````sh
    brew install tor
    brew services start tor
    ````

### On Windows
1. Download Tor Browser:
   * Go to the [Tor Project website](https://www.torproject.org/download/).
   * Download the Tor Browser for Windows.

2. Install Tor Browser:
   * Run the downloaded installer and follow the installation instructions.

3. Start Tor:
   * Open the Tor Browser. This will automatically start the Tor service.


## Run scripts

After you have tor up and running follow the below to run scripts

1. **Create a virtual environment** (optional but recommended):
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

2. Install dependencies:
    ```sh
    pip install -r requirements.txt
    ```

3. Run scrapper
    ```sh
    python src/scraper/scraper.py 
    ```

