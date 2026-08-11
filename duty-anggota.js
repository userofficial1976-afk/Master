/* =========================================================
DUTY ANGGOTA
FPB OT SYSTEM
CORPORATE FORM INTERFACE
DESKTOP + MOBILE
========================================================= */

/* =========================================================
01. RESET
========================================================= */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }

html {
scroll-behavior: smooth;
}

body {
background: #f8f9fa;
color: #333;

```
font-family:
    "Segoe UI",
    Tahoma,
    Geneva,
    Verdana,
    sans-serif;

font-size: 14px;

min-height: 100vh;
```

}

button,
input,
select {
font-family: inherit;
}

/* =========================================================
02. APP LAYOUT
========================================================= */

.app-layout {
min-height: 100vh;
}

/* =========================================================
03. SIDEBAR DESKTOP
========================================================= */

.sidebar {
position: fixed;

```
left: 0;
top: 0;
bottom: 0;

width: 270px;

background: #343a40;

color: #fff;

display: flex;
flex-direction: column;

z-index: 100;
```

}

/* =========================================================
SIDEBAR BRAND
========================================================= */

.sidebar-brand {
min-height: 82px;

```
padding: 18px 18px;

display: flex;
align-items: center;

gap: 12px;

border-bottom: 1px solid rgba(255,255,255,.08);
```

}

.brand-logo {
width: 42px;
height: 42px;

```
flex: 0 0 42px;

display: flex;
align-items: center;
justify-content: center;

background: #ed7d22;

color: #fff;

border-radius: 6px;

font-size: 14px;
font-weight: 700;
```

}

.brand-text {
min-width: 0;

```
display: flex;
flex-direction: column;

gap: 3px;
```

}

.brand-text strong {
color: #fff;

```
font-size: 13px;
font-weight: 700;
```

}

.brand-text span {
color: #c9c9c9;

```
font-size: 9px;
line-height: 1.3;
```

}

/* =========================================================
SIDEBAR MENU
========================================================= */

.sidebar-menu {
flex: 1;

```
overflow-y: auto;

padding: 14px 10px;
```

}

.menu-title {
padding: 12px 12px 6px;

```
color: #999;

font-size: 9px;
font-weight: 700;

letter-spacing: .5px;
```

}

.menu-item {
min-height: 42px;

```
padding: 0 12px;

margin-bottom: 3px;

display: flex;
align-items: center;

gap: 10px;

color: #d8d8d8;

text-decoration: none;

border-radius: 5px;

font-size: 13px;

transition:
    background .15s,
    color .15s;
```

}

.menu-item:hover {
background: rgba(255,255,255,.07);

```
color: #fff;
```

}

.menu-item.active {
background: #ed7d22;

```
color: #fff;
```

}

.menu-icon {
width: 22px;

```
text-align: center;

font-size: 16px;

flex-shrink: 0;
```

}

.logout-item {
margin-top: 5px;
}

/* =========================================================
SIDEBAR USER
========================================================= */

.sidebar-user {
min-height: 70px;

```
padding: 12px 15px;

border-top: 1px solid rgba(255,255,255,.08);

display: flex;
align-items: center;

gap: 10px;
```

}

.user-avatar {
width: 34px;
height: 34px;

```
flex: 0 0 34px;

border-radius: 50%;

background: #ed7d22;

color: #fff;

display: flex;
align-items: center;
justify-content: center;

font-size: 11px;
font-weight: 700;
```

}

.user-info {
min-width: 0;

```
display: flex;
flex-direction: column;

gap: 2px;
```

}

.user-info strong {
color: #fff;

```
font-size: 12px;

white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
```

}

.user-info span {
color: #aaa;

```
font-size: 10px;
```

}

/* =========================================================
04. MAIN CONTENT
========================================================= */

.main-content {
margin-left: 270px;

```
min-height: 100vh;

min-width: 0;
```

}

/* =========================================================
05. TOPBAR
========================================================= */

.topbar {
min-height: 82px;

```
padding: 16px 28px;

background: #fff;

border-bottom: 1px solid #e5e5e5;

display: flex;
align-items: center;
justify-content: space-between;

gap: 20px;
```

}

.topbar-left {
min-width: 0;
}

.page-heading h1 {
margin: 0;

```
color: #1a1a1a;

font-size: 22px;
font-weight: 700;

line-height: 1.2;
```

}

.page-heading p {
margin-top: 4px;

```
color: #777;

font-size: 12px;
```

}

.mobile-brand {
display: none;
}

/* =========================================================
TOPBAR USER
========================================================= */

.topbar-user {
display: flex;
align-items: center;

```
gap: 9px;
```

}

.topbar-avatar {
width: 34px;
height: 34px;

```
border-radius: 50%;

background: #343a40;

color: #fff;

display: flex;
align-items: center;
justify-content: center;

font-size: 10px;
font-weight: 700;
```

}

.topbar-user strong {
display: block;

```
color: #333;

font-size: 12px;
```

}

.topbar-user span {
display: block;

```
margin-top: 2px;

color: #888;

font-size: 10px;
```

}

/* =========================================================
06. PAGE CONTAINER
========================================================= */

.page-container {
width: 100%;

```
max-width: 1250px;

margin: 0 auto;

padding: 24px 28px 40px;
```

}

/* =========================================================
07. FORM CARD
========================================================= */

.form-card {
background: #fff;

```
border: 1px solid #e0e0e0;

border-radius: 8px;

padding: 22px;

margin-bottom: 18px;

box-shadow:
    0 4px 12px rgba(0,0,0,.04);
```

}

/* =========================================================
08. SECTION HEADER
========================================================= */

.section-header {
display: flex;
align-items: center;

```
gap: 12px;

padding-bottom: 15px;

margin-bottom: 18px;

border-bottom: 1px solid #eeeeee;
```

}

.section-number {
width: 34px;
height: 34px;

```
flex: 0 0 34px;

display: flex;
align-items: center;
justify-content: center;

background: #ed7d22;

color: #fff;

border-radius: 5px;

font-size: 11px;
font-weight: 700;
```

}

.section-header h2 {
color: #222;

```
font-size: 16px;
font-weight: 700;
```

}

.section-header p {
margin-top: 3px;

```
color: #777;

font-size: 11px;
```

}

/* =========================================================
09. FORM GRID
========================================================= */

.form-grid {
display: grid;

```
gap: 15px;
```

}

.grid-3 {
grid-template-columns:
repeat(3, minmax(0, 1fr));
}

.grid-4 {
grid-template-columns:
1.3fr
1fr
1fr
1fr;
}

/* =========================================================
10. FORM GROUP
========================================================= */

.form-group {
min-width: 0;

```
display: flex;
flex-direction: column;

margin-bottom: 0;
```

}

.form-group label {
margin-bottom: 7px;

```
color: #333;

font-size: 12px;
font-weight: 600;
```

}

/* =========================================================
11. INPUT & SELECT
========================================================= */

input,
select {
width: 100%;

```
height: 40px;

padding: 9px 11px;

background: #fff;

border: 1px solid #dcdcdc;

border-radius: 6px;

color: #333;

font-size: 13px;

transition:
    border-color .15s,
    box-shadow .15s;
```

}

input:focus,
select:focus {
outline: none;

```
border-color: #ed7d22;

box-shadow:
    0 0 0 2px rgba(237,125,34,.10);
```

}

input::placeholder {
color: #aaa;
}

select:disabled {
background: #f2f2f2;

```
color: #999;

cursor: not-allowed;
```

}

input[type="number"] {
text-align: left;
}

/* =========================================================
DATE INPUT
========================================================= */

input[type="date"] {
cursor: pointer;
}

/* =========================================================
12. AUTO FIELD
========================================================= */

.auto-field {
min-width: 0;

```
display: flex;
flex-direction: column;
```

}

.auto-field label {
margin-bottom: 7px;

```
color: #666;

font-size: 10px;

font-weight: 700;

text-transform: uppercase;

letter-spacing: .2px;
```

}

.auto-field > span {
width: 100%;

```
min-width: 0;

min-height: 40px;

padding: 9px 11px;

display: flex;
align-items: center;

background: #f7f7f7;

color: #333;

border: 1px solid #d4d4d4;

border-radius: 6px;

font-size: 13px;

font-weight: 600;

white-space: nowrap;

overflow: hidden;

text-overflow: ellipsis;
```

}

/* =========================================================
13. INFO GRID
========================================================= */

.info-grid {
display: grid;

```
grid-template-columns:
    repeat(4, minmax(0, 1fr));

gap: 14px;

margin-top: 16px;
```

}

/* =========================================================
14. SUB SECTION
========================================================= */

.sub-section {
margin-top: 18px;

```
padding-top: 16px;

border-top: 1px solid #eeeeee;
```

}

.sub-title {
margin-bottom: 12px;

```
color: #333;

font-size: 12px;
font-weight: 700;

text-transform: uppercase;

letter-spacing: .2px;
```

}

/* =========================================================
15. SPECIAL DUTY CARD
========================================================= */

.special-duty-card {
padding: 16px;

```
margin-bottom: 14px;

background: #fff;

border: 1px solid #dedede;

border-radius: 7px;
```

}

.special-duty-card:last-child {
margin-bottom: 0;
}

/* =========================================================
SPECIAL DUTY HEADER
========================================================= */

.special-duty-header {
display: flex;

```
align-items: center;
justify-content: space-between;

gap: 15px;

margin-bottom: 15px;

padding-bottom: 12px;

border-bottom: 1px solid #eeeeee;
```

}

.special-duty-header strong {
display: block;

```
color: #333;

font-size: 12px;
```

}

.special-duty-header span {
display: block;

```
margin-top: 3px;

color: #888;

font-size: 10px;
```

}

/* =========================================================
16. RADIO
========================================================= */

.radio-group {
display: flex;

```
align-items: center;

gap: 15px;

flex-shrink: 0;
```

}

.radio-option {
display: flex;

```
align-items: center;

gap: 5px;

margin: 0;

color: #444;

font-size: 12px;

font-weight: 600;

cursor: pointer;
```

}

.radio-option input {
width: auto;

```
height: auto;

accent-color: #ed7d22;

cursor: pointer;
```

}

/* =========================================================
17. KLM GRID
========================================================= */

.klm-grid {
display: flex;

```
flex-direction: column;

border: 1px solid #e1e1e1;

border-radius: 6px;

overflow: hidden;
```

}

.klm-row {
min-height: 54px;

```
padding: 8px 12px;

display: grid;

grid-template-columns:
    minmax(180px, 1fr)
    130px
    140px;

align-items: center;

gap: 12px;

border-bottom: 1px solid #eeeeee;
```

}

.klm-row:last-child {
border-bottom: none;
}

/* =========================================================
KLM CHECKBOX
========================================================= */

.klm-check {
display: flex;

```
align-items: center;

gap: 8px;
```

}

.klm-check input {
width: 16px;
height: 16px;

```
accent-color: #ed7d22;

cursor: pointer;
```

}

.klm-check label {
margin: 0;

```
color: #333;

font-size: 12px;

font-weight: 600;

cursor: pointer;
```

}

/* =========================================================
KLM INPUT
========================================================= */

.klm-row > input {
height: 36px;

```
font-size: 12px;
```

}

/* =========================================================
KLM RM
========================================================= */

.klm-rm {
min-height: 36px;

```
padding: 8px 10px;

display: flex;

align-items: center;

background: #f7f7f7;

border: 1px solid #dcdcdc;

border-radius: 5px;

color: #333;

font-size: 12px;

font-weight: 600;
```

}

/* =========================================================
18. TOTAL CARD
========================================================= */

.total-card {
margin-bottom: 18px;

```
padding: 18px 22px;

background: #343a40;

border-radius: 8px;

color: #fff;

display: flex;

align-items: center;
justify-content: flex-end;

gap: 50px;
```

}

.total-card > div {
min-width: 160px;

```
display: flex;
flex-direction: column;

gap: 4px;
```

}

.total-card span {
color: #bdbdbd;

```
font-size: 9px;

font-weight: 700;

letter-spacing: .3px;
```

}

.total-card strong {
color: #fff;

```
font-size: 18px;

font-weight: 700;
```

}

/* =========================================================
19. FORM ACTIONS
========================================================= */

.form-actions {
display: flex;

```
justify-content: flex-end;

gap: 10px;
```

}

.btn {
min-width: 120px;

```
height: 40px;

padding: 0 18px;

border: none;

border-radius: 6px;

font-size: 13px;

font-weight: 600;

cursor: pointer;

transition:
    background .15s,
    transform .1s;
```

}

.btn:active {
transform: translateY(1px);
}

.btn-primary {
background: #ed7d22;

```
color: #fff;
```

}

.btn-primary:hover {
background: #d96d16;
}

.btn-secondary {
background: #fff;

```
color: #444;

border: 1px solid #d5d5d5;
```

}

.btn-secondary:hover {
background: #f3f3f3;
}

/* =========================================================
20. MOBILE BOTTOM NAV
========================================================= */

.mobile-bottom-nav {
display: none;
}

/* =========================================================
21. SCROLLBAR
========================================================= */

.sidebar-menu::-webkit-scrollbar {
width: 5px;
}

.sidebar-menu::-webkit-scrollbar-track {
background: transparent;
}

.sidebar-menu::-webkit-scrollbar-thumb {
background: rgba(255,255,255,.15);

```
border-radius: 5px;
```

}

/* =========================================================
22. TABLET
========================================================= */

@media (max-width: 1100px) {

```
.sidebar {
    width: 230px;
}


.main-content {
    margin-left: 230px;
}


.page-container {
    padding-left: 20px;
    padding-right: 20px;
}


.info-grid {
    grid-template-columns:
        repeat(3, minmax(0, 1fr));
}


.grid-4 {
    grid-template-columns:
        repeat(2, minmax(0, 1fr));
}
```

}

/* =========================================================
23. MOBILE
========================================================= */

@media (max-width: 768px) {

```
body {
    padding-bottom: 65px;

    background: #f8f9fa;
}


/* SIDEBAR HILANG */

.sidebar {
    display: none;
}


/* MAIN FULL WIDTH */

.main-content {
    margin-left: 0;

    width: 100%;
}


/* =====================================================
   TOPBAR MOBILE
   ===================================================== */

.topbar {
    min-height: 64px;

    padding: 10px 15px;

    gap: 10px;
}


.mobile-brand {
    display: block;

    margin-bottom: 2px;

    color: #ed7d22;

    font-size: 11px;

    font-weight: 700;
}


.page-heading h1 {
    font-size: 16px;
}


.page-heading p {
    display: none;
}


.topbar-user {
    display: none;
}


/* =====================================================
   PAGE
   ===================================================== */

.page-container {
    padding: 14px 12px 20px;
}


/* =====================================================
   CARD
   ===================================================== */

.form-card {
    padding: 15px;

    margin-bottom: 12px;

    border-radius: 7px;
}


/* =====================================================
   SECTION HEADER
   ===================================================== */

.section-header {
    gap: 9px;

    padding-bottom: 12px;

    margin-bottom: 14px;
}


.section-number {
    width: 30px;
    height: 30px;

    flex: 0 0 30px;

    font-size: 10px;
}


.section-header h2 {
    font-size: 14px;
}


.section-header p {
    font-size: 10px;
}


/* =====================================================
   GRID
   ===================================================== */

.grid-3,
.grid-4 {
    grid-template-columns: 1fr;
}


.info-grid {
    grid-template-columns:
        repeat(2, minmax(0, 1fr));

    gap: 10px;
}


/* =====================================================
   INPUT
   ===================================================== */

input,
select {
    height: 38px;

    font-size: 12px;
}


.form-group label {
    font-size: 11px;

    margin-bottom: 5px;
}


/* =====================================================
   AUTO FIELD
   ===================================================== */

.auto-field label {
    font-size: 9px;

    margin-bottom: 5px;
}


.auto-field > span {
    min-height: 38px;

    padding: 8px 9px;

    font-size: 11px;
}


/* =====================================================
   SPECIAL DUTY
   ===================================================== */

.special-duty-card {
    padding: 12px;

    margin-bottom: 10px;
}


.special-duty-header {
    align-items: flex-start;

    flex-direction: column;

    gap: 10px;
}


.special-duty-header span {
    font-size: 9px;
}


.radio-group {
    width: 100%;

    justify-content: flex-start;
}


/* =====================================================
   KLM
   ===================================================== */

.klm-row {
    grid-template-columns:
        1fr 75px 100px;

    gap: 7px;

    min-height: 48px;

    padding: 7px 8px;
}


.klm-check {
    gap: 5px;
}


.klm-check label {
    font-size: 10px;
}


.klm-check input {
    width: 14px;
    height: 14px;
}


.klm-row > input {
    height: 34px;

    padding: 7px;

    font-size: 10px;
}


.klm-rm {
    min-height: 34px;

    padding: 7px;

    font-size: 10px;
}


/* =====================================================
   TOTAL
   ===================================================== */

.total-card {
    padding: 15px;

    gap: 20px;

    justify-content: space-between;
}


.total-card > div {
    min-width: 0;
}


.total-card strong {
    font-size: 15px;
}


.total-card span {
    font-size: 8px;
}


/* =====================================================
   BUTTON
   ===================================================== */

.form-actions {
    display: grid;

    grid-template-columns: 1fr 1.5fr;

    gap: 8px;
}


.btn {
    width: 100%;

    min-width: 0;

    height: 40px;

    font-size: 12px;
}


/* =====================================================
   BOTTOM NAV
   ===================================================== */

.mobile-bottom-nav {
    position: fixed;

    left: 0;
    right: 0;
    bottom: 0;

    height: 62px;

    background: #fff;

    border-top: 1px solid #ddd;

    display: grid;

    grid-template-columns:
        repeat(5, 1fr);

    z-index: 500;

    box-shadow:
        0 -2px 8px rgba(0,0,0,.05);
}


.mobile-nav-item {
    display: flex;

    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 3px;

    color: #777;

    text-decoration: none;

    font-size: 9px;
}


.mobile-nav-item span {
    font-size: 16px;

    line-height: 1;
}


.mobile-nav-item small {
    font-size: 9px;
}


.mobile-nav-item.active {
    color: #ed7d22;

    font-weight: 700;
}
```

}

/* =========================================================
24. SMALL MOBILE
========================================================= */

@media (max-width: 420px) {

```
.page-container {
    padding-left: 8px;
    padding-right: 8px;
}


.form-card {
    padding: 12px;
}


.info-grid {
    grid-template-columns: 1fr;
}


.klm-row {
    grid-template-columns:
        1fr 65px 90px;
}


.klm-check label {
    font-size: 9px;
}


.total-card {
    gap: 10px;
}


.total-card strong {
    font-size: 13px;
}


.total-card span {
    font-size: 7px;
}
```

}

/* =========================================================
25. PRINT
========================================================= */

@media print {

```
body {
    background: #fff;

    padding: 0;
}


.sidebar,
.topbar,
.mobile-bottom-nav,
.form-actions {
    display: none !important;
}


.main-content {
    margin-left: 0;
}


.page-container {
    max-width: none;

    padding: 0;
}


.form-card {
    box-shadow: none;

    page-break-inside: avoid;
}
```

}
