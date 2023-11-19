import requests
import re
from bs4 import BeautifulSoup
import urllib3
from collections import defaultdict
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
from urllib.parse import unquote, urlparse, parse_qs

def get_faculty_research_interests(author_name,university_name):
    query = author_name + ' ' + university_name + ' ' + 'google scholar'
    url = 'https://www.google.com/search?q=' + query.replace(' ', '+').replace('–', '')
    response = requests.get(url, verify=False)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, 'html.parser')
    links = []
    for a in soup.find_all('a', href=True):
        href = a['href']
        if href.startswith('/url?q='):
            url_parts = urlparse(href)
            query = parse_qs(url_parts.query)
            actual_url = query.get('q', [''])[0]
            if actual_url:
                links.append(unquote(actual_url))
    url = links[0]
    response = requests.get(url, verify=False)
    soup = BeautifulSoup(response.text, 'html.parser')
    interests = soup.find_all('a',{'class':'gsc_prf_inta gs_ibl'})
    r = []
    for interest in interests:
        r.append(interest.text)
    research_list = ([author_name, r])
    return research_list
research_interests = get_faculty_research_interests("Kevin Chen-Chuan Chang","UIUC")
print(research_interests)