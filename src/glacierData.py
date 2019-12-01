import csv
import json


def reData(filename):
    data = []
    with open(filename) as f:
        reader = csv.reader(f)
        for line in reader:
            inner = []
            for i in range(0, 2):
                inner.append(line[2])
            data.append(inner)
    return json.dumps(data)


def lineData(filename):
    data = {'x': [], 'y': []}
    with open(filename) as f:
        reader = csv.reader(f)
        for line in reader:
            data['x'].append(line[1])
            data['y'].append(line[2])
    data['x'].pop(0)
    data['y'].pop(0)
    return json.dumps(data)

