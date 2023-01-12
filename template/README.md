# POS-SI 

內容包含:
1. 大樹門市POS機網頁 pos-client-A
1. 大樹門市平板 pos-client-B

## 打包腳本
```
sh build.sh
```
打包後會分為pos-client-A、pos-client-B資料夾。

## gitlab page
[Client A](http://gt.gtcode.com/pos-si/pos-client-A/)
[Client B](http://gt.gtcode.com/pos-si/pos-client-B/)

> ClientA 的複製功能必須在https或localhost下可正常使用。
> CientA、CientB 在gitlab page子層路由重整會404，解決方式在production要在Nginx做路由指向。

## production
[Client A](https://possi.greattree.com.tw/pos-client-A?mdm_id=MDM_DEV)
[Client B](https://possi.greattree.com.tw/pos-client-B?mdm_id=MDM_DEV)

## 歸戶流程
[Figma文件](https://reurl.cc/LXlZrL)

- 20221205 init
- 20221228 補充