import parser
from sosediParser import parse_sosedi

def start_parse():
    goods = []
    sosedi_goods = parse_sosedi(parser.CONFIG_PATH)
    print(f"Parsed {len(sosedi_goods)} goods from Sosedi.")
    goods.extend(sosedi_goods)

    parser.write_goods(goods)

start_parse()
