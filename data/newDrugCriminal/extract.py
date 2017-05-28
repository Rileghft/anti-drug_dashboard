#!/usr/bin/env python
# -*- coding: utf-8 -*-

from xlrd import open_workbook
import re
import json
import glob
import os

description = {}
with open('config.json', encoding='utf-8') as desc:
    description = json.load(desc)
filepath = max(glob.iglob('raw/*.%s' % description['dataType']), key= os.path.getctime)
wb = open_workbook(os.path.abspath(filepath))
sheet = wb.sheets()[0]
startRow = 0
endRow = 0
stat = False
for row in range(sheet.nrows):
    cell = sheet.cell(row, 0).value
    m = re.match(r'\d+年\b', cell)
    if bool(m) != stat:
        if stat:
            endRow = row - 1
            break
        else:
            startRow = row
            stat = True

data = []
for row in range(startRow, endRow + 1):
    rowData = []
    rowData.append(sheet.cell(row, 0).value[:-1])
    for col in range(1, sheet.ncols):
        rowData.append(str(int(sheet.cell(row, col).value)))
    data.append(rowData)

columnNames = []
for col in description['column']:
    columnNames.append(col['name'])

def list2json(values, cols):
    for row in values:
        yield dict(zip(columnNames, row))

with open('data.json', mode='w', encoding='utf-8') as out:
    out.write('[')
    for obj in list2json(data, columnNames):
        out.write(str(obj) + ',')
    out.write(']')
