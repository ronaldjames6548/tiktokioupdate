---
title: "تعرّف على Decap CMS: الحل الأمثل لإدارة المحتوى"
draft: false
author: Jon Doe
tags:
  - Apps
image:
  src: /images/decapcms.png
  alt: Decap CMS
snippet: Decap CMS, formerly known as Netlify CMS, is an open-source content
  management system offering developers a seamless way to manage content for
  static site generators.
publishDate: 2023-07-01 23:14
category: Tech
---

Decap CMS، المعروف سابقًا باسم Netlify CMS، هو نظام إدارة محتوى مفتوح المصدر يوفّر للمطورين وسيلة سلسة لإدارة المحتوى لمولدات المواقع الثابتة.

## ما هو Decap CMS؟

Decap CMS هو نظام إدارة محتوى يعتمد على Git، يتيح للمطورين ومنشئي المحتوى إضافة وتحديث وحذف المحتوى مباشرة من مستودع Git الخاص بالموقع. ويوفر هذا مزايا المحتوى القابل للإصدار مثل التراجع السهل، والتفرعات، وغيرها من عمليات Git.

## الميزات الرئيسية لـ Decap CMS

### مفتوح المصدر

كونه مفتوح المصدر يعني أنه بإمكانك الوصول إلى الشيفرة المصدرية وتعديلها وتخصيصها بما يتوافق مع متطلبات مشروعك. يتيح ذلك مرونة عالية في تكييف النظام حسب احتياجاتك.

### يعتمد على Git

يستخدم Decap CMS سير عمل Git لإدارة المحتوى. كل تعديل يصبح commit، وكل مجموعة تعديلات تصبح pull request، وكل مسودة محفوظة هي فرع مستقل.

### سهل الاستخدام

يوفّر Decap CMS واجهة تحرير سهلة الاستخدام لمحرري المحتوى، دون الحاجة لفهم Git أو كتابة الشيفرات.

## كيفية البدء باستخدام Decap CMS

البداية مع Decap CMS سهلة، ما عليك سوى إضافة ملفين إلى مشروعك: `admin/index.html` و `admin/config.yml`.

```html
<!-- admin/index.html -->
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>مدير المحتوى</title>
</head>
<body>
  <!-- تضمين السكربت الذي يبني الصفحة ويشغّل Decap CMS -->
  <script src="https://unpkg.com/decap-cms@^2.0.0/dist/decap-cms.js"></script>
</body>
</html>


```

```yaml
# admin/config.yml
backend:
  name: github
  repo: owner/repo
media_folder: "img/uploads"
public_folder: "/img/uploads"
collections:
  - name: "post"
    label: "Post"
    folder: "_posts"
    create: true
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Body", name: "body", widget: "markdown"}
```


"في عصر Jamstack، يُمهّد Decap CMS الطريق نحو إدارة محتوى حديثة قائمة على Git. وبفضل بساطته ومرونته، فإنه يُعد خيارًا ممتازًا لكل من المطورين ومنشئي المحتوى."

