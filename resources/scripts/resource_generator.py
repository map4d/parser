import sys
import getopt
import urllib.request
import json
import unicodedata
import re

def normalize(value: str) -> str:
    result = value.lower().replace('đ', 'd')
    result = unicodedata.normalize('NFKD', result).encode('ascii', 'ignore').decode('ascii')
    result = re.sub(' +', ' ', result)
    result = result.strip()

    return result

def get_content_from_url(url: str) -> str:
    response = urllib.request.urlopen(url).read()
    return json.loads(response.decode('utf-8'))
        

def generate_street_names():
    print('Generating street_names.txt...')
    country_data = get_content_from_url('https://cdn.jsdelivr.net/gh/thien0291/vietnam_dataset@1.0.0/Index.json')
    street_names = []
    for city in country_data.keys():
        city_code = country_data[city]['code']
        city_data = get_content_from_url('https://cdn.jsdelivr.net/gh/thien0291/vietnam_dataset@1.0.0/data/{code}.json'.format(code=city_code))
        dictricts = city_data['district']
        for dictrict in dictricts:
            streets = dictrict['street']
            for street in streets:
                street = normalize(street)
                if ' ' in street and not street.startswith('so '):
                    street_names.append(street)
                else:
                    street_names.append('duong ' + street)

    street_names = list(set(street_names))
    street_names.sort()
    with open('street_names.txt', 'w') as street_names_file:
        for street_name in street_names:
            street_names_file.write(street_name)
            street_names_file.write('\n')

    print('Done!!!')
    
def generate_level1_names():
    print('Generating level1_names.txt...')
    with open('dvhcvn.json') as f:
        data = json.load(f)['data']

    level1_names = []
    for level1_data in data:
        name = normalize(level1_data['name'])
        level1_type = ''

        if name.startswith('tinh '):
            level1_type = 'tinh'
            name = name[len('tinh '):]
        elif name.startswith('thanh pho '):
            level1_type = 'thanh pho'
            name = name[len('thanh pho '):]

        if name == 'ba ria - vung tau':
            name = 'ba ria vung tau|ba ria|tinh ba ria vung tau|tinh ba ria'
        elif name == 'ho chi minh':
            name = 'ho chi minh|tp ho chi minh|tp. ho chi minh|thanh pho ho chi minh|hcm|tp hcm|tp. hcm|thanh pho hcm'
        elif name == 'ha noi':
            name = 'ha noi|tp ha noi|tp. ha noi|thanh pho ha noi|hn|tp hn|tp. hn|thanh pho hn'
        else:
            if level1_type == 'thanh pho':
                name = name + '|thanh pho ' + name + '|tp ' + name + '|tp. ' + name
            else:
                name = name + '|' + level1_type + ' ' + name

        level1_names.append(name)

    level1_names.sort()

    with open('level1_names.txt', 'w') as level1_names_file:
        for level1_name in level1_names:
            level1_names_file.write(level1_name)
            level1_names_file.write('\n')

    print('Done!!!')


def generate_level2_names():
    print('Generating level2_names.txt...')
    with open('dvhcvn.json') as f:
        data = json.load(f)['data']

    level2_names = []
    for level1_data in data:
        level2_datas = level1_data['level2s']
        for level2_data in level2_datas:
            name = normalize(level2_data['name'])
            level2_type = normalize(level2_data['type'])

            if name.startswith(level2_type):
                name = name[len(level2_type) + 1:]

            if name == 'ia h\' drai':
                name = 'ia h\'drai|ia hdrai'
            elif '\'' in name:
                name = name + '|' + name.replace('\'', '')

            if name == 'phan rang-thap cham':
                name = 'phan rang thap cham|thanh pho phan rang thap cham|tp phan rang thap cham|tp. phan rang thap cham|phan rang|thanh pho phan rang|tp phan rang|tp.phan rang'
            else:
                if level2_type == 'thanh pho':
                    name = name + '|thanh pho ' + name + '|tp ' + name + '|tp. ' + name
                elif name.isnumeric():
                    name = name.lstrip('0')
                    name = level2_type + ' ' + name
                elif ' ' in name:
                    name = name + '|' + level2_type + ' ' + name
                else:
                    # one word only
                    name = level2_type + ' ' + name

            level2_names.append(name)

    level2_names = list(set(level2_names))
    level2_names.sort()

    with open('level2_names.txt', 'w') as level2_names_file:
        for level2_name in level2_names:
            level2_names_file.write(level2_name)
            level2_names_file.write('\n')

    print('Done!!!')


def generate_level3_names():
    print('Generating level3_names.txt...')
    with open('dvhcvn.json') as f:
        data = json.load(f)['data']

    level3_names = []
    for level1_data in data:
        level2_datas = level1_data['level2s']
        for level2_data in level2_datas:
            level3_datas = level2_data['level3s']
            for level3_data in level3_datas:
                name = normalize(level3_data['name'])
                level3_type = normalize(level3_data['type'])

                if name.startswith(level3_type):
                    name = name[len(level3_type) + 1:]

                if name == 'b\' la':
                    name = 'b\'la|bla'
                elif name == 'da k\' nang':
                    name = 'da k\'nang|da knang'
                elif name == 'da m\' rong':
                    name = 'da m\'rong|da mrong'
                elif name == 'ea m\' doal':
                    name = 'ea m\'doal|ea mdoal'
                elif name == 'h\' neng':
                    name = 'h\'neng|hneng'
                elif name == 'k\' dang':
                    name = 'k\'dang|kdang'
                elif '\'' in name:
                    name = name + '|' + name.replace('\'', '')

                if name.isnumeric():
                    name = name.lstrip('0')
                    name = level3_type + ' ' + name
                elif ' ' in name:
                    name = name + '|' + level3_type + ' ' + name
                else:
                    # one word only
                    name = level3_type + ' ' + name

                level3_names.append(name)

    level3_names = list(set(level3_names))
    level3_names.sort()

    with open('level3_names.txt', 'w') as level3_names_file:
        for level3_name in level3_names:
            level3_names_file.write(level3_name)
            level3_names_file.write('\n')

    print('Done!!!')


def main(argv):
    try:
        opts, args = getopt.getopt(argv, 'l:', [])
    except getopt.GetoptError:
        print('Invalid options')
        print('Usage: resource_generator.py -level <level>')
        sys.exit()

    if len(opts) == 0:
        print('Usage: resource_generator.py -l <level>')
        sys.exit()

    for opt, arg in opts:
        if arg == '1':
            generate_level1_names()
        elif arg == '2':
            generate_level2_names()
        elif arg == '3':
            generate_level3_names()
        elif arg == 'street':
            generate_street_names()
        elif arg == 'all':
            generate_level1_names()
            generate_level2_names()
            generate_level3_names()
            generate_street_names()


if __name__ == '__main__':
    main(sys.argv[1:])
