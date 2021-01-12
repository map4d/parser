import sys
import getopt
import json
import unicodedata


def normalize(value: str) -> str:
    result = value.lower().replace('đ', 'd')
    result = unicodedata.normalize('NFKD', result).encode('ascii', 'ignore')

    return result.decode('ascii')


def generate_level1_names():
    print('Generating level1_names.txt...')
    with open('dvhcvn.json') as f:
        data = json.load(f)['data']

    level1_names = []
    for level1_data in data:
        name = normalize(level1_data['name'])
        if name.startswith('tinh '):
            name = name[len('tinh '):]
        elif name.startswith('thanh pho '):
            name = name[len('thanh pho '):]

        if name == 'ba ria - vung tau':
            name = name + '|ba ria vung tau|ba ria'
        elif name == 'thua thien hue':
            name = name + '|hue'
        elif name == 'ho chi minh':
            name = name + '|hcm'

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
                if name.isnumeric():
                    # quan 1, quan 2
                    name = name.lstrip('0')
                    name = level2_type + ' ' + name + '|' + name

            level2_names.append(name.strip())

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
                    if name.isnumeric():
                        # phuong 1, phuong 2
                        name = name.lstrip('0')
                        name = level3_type + ' ' + name + '|' + name

                level3_names.append(name.strip())

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
        elif arg == 'all':
            generate_level1_names()
            generate_level2_names()
            generate_level3_names()


if __name__ == '__main__':
    main(sys.argv[1:])
