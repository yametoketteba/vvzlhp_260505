# ブブゼラ / Vuvuzela オフィシャルサイト

GitHub Pages で公開する静的サイト一式です。HTML / CSS / JavaScript のみで動きます。

## ファイル構成

```
vuvuzela-site/
├─ index.html              … トップページ
├─ portfolio.html          … 作品集と実績（foriio 埋め込み済み）
├─ request-personal.html   … ご依頼の詳細 » 個人の方
├─ request-corporate.html  … ご依頼の詳細 » 法人の方
├─ contact.html            … お問い合わせ（Google フォーム枠）
├─ css/style.css           … 全ページ共通のデザイン
├─ js/main.js              … メニュー開閉・メール表示
├─ assets/avatar.png       … プロフィール画像
├─ favicon.png             … ファビコン（32×32）
├─ apple-touch-icon.png    … スマホ用アイコン（180×180）
└─ CNAME                   … 独自ドメイン設定（vuvuzela.io）
```

## 反映済みの項目

- プロフィール画像（assets/avatar.png）
- SNSリンク（X / YouTube / Spotify）※全ページのフッター
- foriio 埋め込み（portfolio.html）
- ファビコン・スマホ用アイコン
- 独自ドメイン vuvuzela.io（CNAME）
- メールアドレスのスパム対策（contact.html）

## 公開前に1つだけ必要な作業：Google フォーム

contact.html のフォームは「枠」だけ用意してあります。次の手順で接続してください。

1. Google フォームでお問い合わせ用フォームを作成（名前・メール・詳細 など）。
2. 編集画面 右上の「送信」→「&lt; &gt;（HTMLを埋め込む）」を開く。
3. 表示される `<iframe src="https://docs.google.com/forms/d/e/..../viewform?embedded=true" ...>`
   の **src の値** をコピー。
4. contact.html の `src="GOOGLE_FORM_EMBED_URL"` をその値に置き換える。
5. 案内文（gform-note の段落）は削除してOK。

## GitHub Pages＋独自ドメインの公開手順

1. GitHub でリポジトリを作成し、この中身をアップロード（CNAME も含める）。
2. Settings → Pages → Source を「Deploy from a branch」、Branch を `main`/`(root)`。
3. Settings → Pages → Custom domain に `vuvuzela.io` を入力して保存
   （リポジトリ直下の CNAME ファイルがあれば自動入力されます）。
4. ドメイン側（取得元の管理画面）で DNS を設定：
   - Apex（vuvuzela.io）に **A レコード**：
     185.199.108.153 / 185.199.109.153 / 185.199.110.153 / 185.199.111.153
   - もしくは www を使うなら **CNAME** で `（ユーザー名）.github.io`。
5. DNS 反映後、Pages 設定の「Enforce HTTPS」を有効化。

## デザインの色を変えるには

css/style.css 冒頭の `:root { ... }`（--bg 背景色など）を書き換えると全体に反映されます。

## メールアドレスについて

スパム対策のため、メールアドレスは HTML ソースには平文で書かず、
JavaScript（js/main.js）で表示時に組み立てています（画面上は通常のアドレスとして表示）。
アドレスを変更する場合は js/main.js 内の base64 値を差し替えてください。
