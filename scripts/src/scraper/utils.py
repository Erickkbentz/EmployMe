import requests

def get_tor_session():
    session = requests.session()
    # Tor uses the 9050 port as the default socks port
    session.proxies = {'http':  'socks5://localhost:9050',
                       'https': 'socks5://localhost:9050'}
    return session