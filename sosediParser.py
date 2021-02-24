import json
from urllib.request import urlopen
from urllib.request import Request
import urllib.error

MARKET_NAME = ""

def generate_post_data(pag_item):
    return ('{"selected": "all", "selectedCategory": "all", "paginationItem": %s}' % pag_item).encode('ascii')

def get_content(url, pages, fields):
    goods = []
    for page in range(1, pages):
        data_arg = generate_post_data(page)
        req = Request(url, method="POST", data=data_arg)
        try:
            items = json.loads(urlopen(req).read().decode('unicode_escape'))["items"] #json response specification
        except urllib.error.HTTPError:
            continue
        except urllib.error.URLError:
            return goods

        for item in items:
            good = {}
            good["name"] = item[fields["name"]]
            good["market"] = MARKET_NAME
            good["price"] = item[fields["price"]]
            good["priceBack"] = item[fields["priceBack"]]
            good["sale"] = item[fields["sale"]]
            goods.append(good)
    return goods


def get_goods_pages(url):
    data_arg = generate_post_data(100)
    req = Request(url, method="POST", data=data_arg)
    answer = json.loads(urlopen(req).read().decode("unicode_escape"))
    return answer["pages"]

def load_config(config):
    config_file = open(config, 'r')
    config_json = json.load(config_file)
    config_file.close()
    return config_json["sosediOptions"]


def parse_sosedi(config):
    try:
        options = load_config(config)
    except:
        print("Couldn't get configuration. Ending.")
        return
    else:
        print(f"Got configuration from {config}.")

    MARKET_NAME = options["marketName"]
    print("Start getting data from %s" % options["marketName"])
    try:
        pages_amount = get_goods_pages(options["sosediAPI"])
    except:
        print("Couldn't get goods pages.")
        return
    else:
        print(f"Got {pages_amount} pages.")

    return get_content(options["sosediAPI"], pages_amount, options["goodFields"])

