
from bs4 import BeautifulSoup

with open('data/cached_data.json', 'r') as f:
    html_doc = f.read()

soup = BeautifulSoup(html_doc, 'html.parser')
# print(soup.prettify())

print(soup.find_all('p'))