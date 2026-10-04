# サイト掲載用の実写写真

施術写真2枚・お客様の声8枚。元のJPGは変更していません。

- `*-640.webp`: 一覧表示用。横幅640px。
- `*-1280.webp`: 施術写真・拡大表示用。横幅1280pxを上限に、元画像以上に拡大せず書き出し。
- `manifest.json`: 元ファイルとの対応、実際の寸法と容量。
- 変換: Sharpで向きの反映・縮小・WebP圧縮（品質88）。人物・文字・背景の生成、修復、削除は行っていません。
- 色調補正: `photo-styles.css` の `.real-photo` による表示時の明るさ1.055、コントラスト1.025、彩度0.92。画像本体の色調は維持しています。
- カードと拡大表示は写真全体を表示。メインビジュアルのみ表示枠に合わせたCSSのトリミングがあります。
- 元写真合計2,852,224バイトに対し、拡大用10枚は1,300,402バイト（約54%削減）。通常表示用の組み合わせは557,248バイト（約80%削減、拡大表示分を除く）。

再書き出しは、`%LOCALAPPDATA%/ResetsSiteTools` にSharpを導入した環境で、プロジェクト直下から `node scripts/prepare-photos.cjs` を実行します。入力元は `%USERPROFILE%/Downloads/IMG_8014.JPG` 〜 `IMG_8023.JPG` です。

## 補正案の比較記録

組み込みimagegenでIMG_8014.JPGの補正案を1枚試作しましたが、細部の変化を避けるためサイトには採用していません。掲載画像はすべて提供された元写真から書き出しています。API/CLIによる画像生成は使用していません。

試作時のプロンプト:

> Use case: lighting-weather. Edit target: the attached actual treatment photograph IMG_8014.JPG for the existing Resets salon website with cream #f8f7f2 and forest green #284c40. Perform only restrained photographic exposure, white balance and clarity correction: slightly lift dark shadows, neutralize excess orange warmth, retain natural warm wooden room and realistic skin texture. Preserve the exact people, facial features, anatomy, pose, hands and hand contact location, clothing, objects, room, framing and 4:3 aspect ratio. Do not beautify or recreate faces, do not add or remove anything. No added text. This is documentary evidence of an actual service, so fidelity takes priority over aesthetics. Return the single lightly corrected photograph.
