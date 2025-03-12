# 🐛 Build Command Fails to Compile

Work with a partner to resolve the following issue(s):

* As a developer of this webpage, I should be able to compile my code using the `npm run build` command without errors.

## Expected Behavior

* When a user runs the `npm run build` command, the code compiles without errors:

```bash
vite v4.5.3 building for production...
✓ 34 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/index-61cb4562.css    0.46 kB │ gzip:  0.30 kB
dist/assets/index-48979d9f.js   143.49 kB │ gzip: 46.12 kB
✓ built in 406ms
```

## Actual Behavior

* When a user runs the `npm run build` command, the code throws multiple errors and fails to compile:

```bash
src/components/MailingListForm/index.tsx:13:9 - error TS6133: 'validName' is declared but its value is never read.

13   const validName = (name: string): MailingName => {
        ~~~~~~~~~

src/components/MailingListForm/index.tsx:17:9 - error TS6133: 'validEmail' is declared but its value is never read.

17   const validEmail = (email: string): MailingEmail => {
        ~~~~~~~~~~

src/components/MailingListForm/index.tsx:41:38 - error TS2345: Argument of type '{ name: string; email: "" | MailingEmail; }' is not assignable to parameter of type 'SetStateAction<MailingFormData>'.
Types of property 'name' are incompatible.
Type 'string' is not assignable to type '"" | MailingName | undefined'.

41         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

src/components/MailingListForm/index.tsx:49:53 - error TS2322: Type 'string' is not assignable to type '"" | MailingEmail'.

49         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    ~~~~~


Found 4 errors in the same file, starting at: src/components/MailingListForm/index.tsx:13
```


## Steps to Reproduce the Problem

1. Run `npm run build` in the terminal.

---

## 💡 Hints

* What differences do we expect between the name and email fields? How could a nominal typing system help ensure those differences are maintained?

## 🏆 Bonus

If you've completed this activity, work through the following challenge with your partner to further your knowledge:

* What are some of the advantages and disadvantages of nominal and structural typing?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.