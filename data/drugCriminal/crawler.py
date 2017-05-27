#!/usr/bin/env python3
#-*- coding: utf-8 -*-

import requests
from bs4 import BeautifulSoup
import json
import time
import wget
import urllib
import re
import os

#read data description
description = {}
with open('config.json', encoding='utf-8') as desc:
    description = json.load(desc)
#read crawler history
crawlInfo = {}
with open('crawler.json', encoding='utf-8') as crawlerFile:
    crawlInfo = json.load(crawlerFile)

with open('crawler.log', mode = 'a', encoding='utf-8') as log:
    indexPage = {}
    try:
        indexPage = requests.get(description['source'])
    except ConnectionError as err:
        now = time.strftime('%Y-%m-%d %H:%M:%S\t')
        log.write('%s\tfailed\t%s\n' % (now, str(err)))
    indexSoup = BeautifulSoup(indexPage.text, 'lxml')
    baseUrl = re.match(r'(http.*/)\b', description['source']).group(1)
    newestResUrl = urllib.request.urljoin(baseUrl, indexSoup.select_one('#ctl00_cphMain_grdBook td a').get('href'))
    resPage = requests.get(newestResUrl)
    resPageSoup = BeautifulSoup(resPage.text, 'lxml')
    dataUrl = resPageSoup.select_one('#ctl00_cphMain_repChapter_ctl09_dtlFile_ctl00_lnkFile').get('href')
    dataUrl = urllib.request.urljoin(baseUrl, dataUrl)
    now = time.strftime('%Y-%m-%d %H:%M:%S')
    if dataUrl == crawlInfo['lastCrawlUrl']:
        exit()
    else:
        crawlInfo['lastCrawlTime'] = now
        crawlInfo['lastCrawlUrl'] = dataUrl
        crawlerFile = open('crawler.json', mode='w', encoding='utf-8')
        json.dump(crawlInfo, crawlerFile)
        crawlerFile.close()
    downloadFileName = wget.download(dataUrl, out=os.path.abspath('raw/'), bar=None)
    log.write('%s\tsuccess\tdownload %s\n' % (now, downloadFileName))
