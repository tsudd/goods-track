from urllib.request import urlopen
from bs4 import BeautifulSoup
import json

DIST_PATH = "dist.json"
CONFIG_PATH = "config.json"

def get_html(url):
    html = urlopen(url)
    soup = BeautifulSoup(html, features="html.parser")
    return soup

def write_goods(goods):
    fs = open(DIST_PATH, 'w')
    json.dump(goods, fs, ensure_ascii=False)
    fs.close()
