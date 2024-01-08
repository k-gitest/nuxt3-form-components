## 目的
nuxt.jsのver.3を使用してフォーム要素をコンポーネント使用する際の検証である。nuxt3機能の動作確認も兼ねる。

## app概要
npx nuxiで構築されたNuxt.jsを利用した検証プロジェクトです。

## 要件
* コンポーネントにするフォーム要素はtextfield、radio、select、checkbox、textarea、button
* Nuxt Bridgeでの移行検証ではない
* nuxt3とvue3の動作検証も兼ねているので必要最小限の構成
* Option APIではなくComposition APIを使用する
* 値は親→子→親の流れとする
* 検証のため入力内容を表示
* スタイリングは必要最低限しか行わない
* レイアウト切替、共通関数、ミドルウェア／プラグイン読み込み順確認

## 開発環境

* nuxt 3.4.1
* vue 3.4.5

## ディレクトリ構成

<pre>
myapp...プロジェクトディレクトリ
  ├── components ...コンポーネントディレクトリ
  │     └── FormParts ...フォームコンポーネント
  ├── composables ...再利用可能関数
  ├── layouts ...レイアウト
  ├── middleware ...ミドルウェア
  ├── pages ...アプリケーションディレクトリ
  │     └── index ...トップ画面
  ├── plugins ...プラグイン
  ├── server ...apiディレクトリ
  └── nuxt.config.ts ...設定ファイル
</pre>

## 注意点
親から子への単方向バインディングは親がv-model、子はdefinePorpsで受け取り。双方向バインディングはdefineEmitsで親へ送る。

vue3の新機能であるdefineModelを使用するとdefinePorpsとdefineEmitsは書かなくても双方向バインディングが可能となっている。簡潔に書けるぶん、値の流れが一層分かりにくくなっている。

リアクティブはref()以外にreactiveがあるが使い勝手が悪い。

checkboxなど複数値のバインディングは親子でv-modelを使用するので、そのままだと初期値は親、子の順で変わってしまう。get／setで連動させる必要がある。こういった場合にdefineModelは使える。

## 結論
nuxt2と比較してかなり変化があった。特に書き方が大きく変わった印象。

refとv-modelのおかげでリアクティブは直ぐに理解できたが、nuxt2を使った事があったからであり、最初にnuxt3を使う人はv-on／v-bindの流れが分かり難いと思われる。

フォームパーツのコンポーネント化は問題なく、今後はバリデーションも含めていきたいと思う。

defineModelに関しては新しい機能という事で、実装するには少し時間が必要と思われる。

storeがないぶんミドルウェア／プラグインなどとrefによって状態管理がしやすいかもしれないが、選定が難しそうな印象。

動作はviteのおかげか開発段階から軽快に動作しており、nuxt3単体でも色々な機能が使えるのは良さそう。

[nuxt2での検証はコチラ](https://github.com/k-gitest/nuxt-express-sequelize-mysql)
