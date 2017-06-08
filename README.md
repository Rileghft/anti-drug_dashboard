# 反毒儀表板

![snapshot lost](https://raw.github.com/Rileghft/anti-drug_dashboard/master/snapshot/首頁.png)

## 簡介

毒品防治開放資料的品質欠佳，提供的資料格式並不適合程式解析，若需要分析這些數據及清理這些資料往往需要耗費大量時間，另一方面，政府開放的資料解析度不足，通常資料都是全國或縣市統計，分區資料較少且各自獨立，即使有開放資料，也使得應用難上加難，不能發揮資料的價值。因此針對毒品這個議題，為了使資料快速發揮價值，元智資訊工程系學生設計毒品資料整合暨呈現平台-反毒儀表板，整合資料爬蟲、資料清理、資料市集、視覺化設定、儀表板於一身，使用者可選取有興趣的資料及欄位，”反毒儀表板”可快速的將資料已圖表的方式呈現。透過”個人儀表板”功能，政府相關部門能夠持續監看特定的主題，將相關資料放在一起觀察，結合視覺化圖表與相關業務知識，加快了解現狀與輔助決策，最終降低毒品造成的社會問題。 

元智資工系學生同時也是該團隊的領導楊舜宇表示，反毒儀表板這個平台與政府開放資料平台的差異在於資料平台的整合與資料視覺化，同時資料是經過整理，使得資料能夠輕易的使用，讓非資訊人員也能利用這個平台，探索資料與自身業務的應用與洞見，反毒儀表板改善資料平台的可親近性，讓更多人能夠使用。

## 儀表板
![snapshot lost](https://raw.github.com/Rileghft/anti-drug_dashboard/master/snapshot/儀表板.png)

## 資料市集

![snapshot lost](https://raw.github.com/Rileghft/anti-drug_dashboard/master/snapshot/資料市集.png)

## 資料詳細內容

![snapshot lost](https://raw.github.com/Rileghft/anti-drug_dashboard/master/snapshot/資料詳細內容.png)



## 資料視覺化設定

![snapshot lost](https://raw.github.com/Rileghft/anti-drug_dashboard/master/snapshot/視覺化設定.png)

## 執行環境

- NodeJS 7.x以上
- MySQL 5.7以上
- yarn

## 啟動Server

```bash
# 初始化node套件
yarn install
# 開啟server
node --harmony index.js
```
## 貢獻者

- 楊舜宇
  專案規劃、資料爬蟲、資料整理抽取、資料後端API、前後端串接
- 吳逸軒
  前端元件動態產生、網頁後端、前後端串接
- 洪鈺敏
  前端套版