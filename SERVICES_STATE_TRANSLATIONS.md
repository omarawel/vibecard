# VibeCard - Complete Services, State Management & Translations Guide

## 📦 ARCHITECTURE OVERVIEW

```
VibeCard (Customer App)
├── Services (API calls, static data)
├── Store (Zustand state management)
├── Locales (i18n translations)
└── Protected Routes (Auth middleware)

VibeDashboard (Admin App)
├── Routes (Protected admin routes)
└── Services (API calls)
```

---

## 🌐 SERVICES & API CONFIGURATION

### 1️⃣ request.ts - API Base URL

```typescript
export const baseUrl = "https://api.vibecard.de";
```

**Usage:** Central configuration for all API calls throughout the app.

---

### 2️⃣ faq.ts - FAQ Data

```typescript
interface FAQ {
  id: number;
  question: string;
  answer: string;
}

// Regular User FAQ (5 items)
export const faq: FAQ[] = [
  {
    id: 99,
    question: "faqQ1",
    answer: "faqA1",
  },
  {
    id: 100,
    question: "faqQ2",
    answer: "faqA2",
  },
  {
    id: 101,
    question: "faqQ3",
    answer: "faqA3",
  },
  {
    id: 102,
    question: "faqQ4",
    answer: "faqA4",
  },
  {
    id: 103,
    question: "faqQ5",
    answer: "faqA5",
  },
];

// Ambassador FAQ (12 items)
export const ambassadorFaq: FAQ[] = [
  {
    id: 3,
    question: "fQ1",
    answer: "fA1",
  },
  // ... 11 more ambassador FAQs
  {
    id: 17,
    question: "fQ15",
    answer: "fA15",
  },
];
```

**Usage:** Used in Home page and Ambassador page FAQ sections with i18n keys.

---

### 3️⃣ homeCard.ts - Homepage Feature Cards

```typescript
import { adapt, arrow, design, impression, secure, share } from "../assets";

interface HomeCard {
  image: string;
  id: number;
  title: string;
  note: string;
}

const homeCard: HomeCard[] = [
  {
    image: design,
    id: 1,
    title: "feature1",
    note: "feature1Desc",
  },
  {
    image: share,
    id: 2,
    title: "feature2",
    note: "feature2Desc",
  },
  {
    image: arrow,
    id: 3,
    title: "feature3",
    note: "feature3Desc",
  },
  {
    image: impression,
    id: 4,
    title: "feature4",
    note: "feature4Desc",
  },
  {
    image: secure,
    id: 5,
    title: "feature5",
    note: "feature5Desc",
  },
  {
    image: adapt,
    id: 6,
    title: "feature6",
    note: "feature6Desc",
  },
];

export default homeCard;
```

**Usage:** Displayed in Home.tsx feature section grid.

---

## 🎯 STATE MANAGEMENT (Zustand Stores)

### 1️⃣ useUserData.ts - Authentication State

```typescript
import { create } from "zustand";

interface AuthState {
  user: string | null;
  email: string | null;
  isAuthenticated: boolean;
  plan: string | null;
  login: (user: string, email: string, plan: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  email: null,
  isAuthenticated: false,
  plan: null,

  login: (user, email, plan) =>
    set({ user, email, plan, isAuthenticated: true }),
  logout: () =>
    set({ user: null, email: null, plan: null, isAuthenticated: false }),
}));

export default useAuthStore;
```

**States:**
- `user` - Username
- `email` - User email
- `isAuthenticated` - Login status
- `plan` - Subscription plan (free/pro/pro+)

**Actions:**
- `login(user, email, plan)` - Store user data
- `logout()` - Clear all auth data

---

### 2️⃣ useCardData.ts - Card Information

```typescript
import { create } from "zustand";

export interface PreviewProps {
  profile: string | null;
  cover: string | null;
  logo: string | null;
}

interface State {
  pronounVal: string | null;
  nameVal: string | null;
  emailVal: string | null;
  phoneVal: string | null;
  tagLineVal: string | null;
  jobTitleVal: string | null;
  locationVal: string | null;
  companyVal: string | null;
  preview: PreviewProps;
}

interface Actions {
  setCardName: (name: string | null) => void;
  setCardPhone: (phone: string | null) => void;
  setCardEmail: (email: string | null) => void;
  setCardPronoun: (pronoun: string | null) => void;
  setCardJob: (jobTitle: string | null) => void;
  setCardTagLine: (tagLine: string | null) => void;
  setCardCompany: (company: string | null) => void;
  setCardLocation: (location: string | null) => void;
  setPreview: (type: keyof PreviewProps, value: string | null) => void;
}

export const useCardData = create<State & Actions>((set) => ({
  nameVal: "",
  phoneVal: null,
  emailVal: null,
  tagLineVal: null,
  jobTitleVal: null,
  companyVal: null,
  locationVal: null,
  pronounVal: null,
  preview: {
    cover: null,
    logo: null,
    profile: null,
  },

  setCardName: (nameVal) => set({ nameVal }),
  setCardPhone: (phoneVal) => set({ phoneVal }),
  setCardEmail: (emailVal) => set({ emailVal }),
  setCardPronoun: (pronounVal) => set({ pronounVal }),
  setCardJob: (jobTitleVal) => set({ jobTitleVal }),
  setCardTagLine: (tagLineVal) => set({ tagLineVal }),
  setCardCompany: (companyVal) => set({ companyVal }),
  setCardLocation: (locationVal) => set({ locationVal }),

  setPreview: (type, value) =>
    set((state) => ({
      preview: {
        ...state.preview,
        [type]: value,
      },
    })),
}));
```

**States:**
- User card information (name, email, phone, etc.)
- Preview images (profile, cover, logo)

**Actions:**
- `setCard*` - Update individual card fields
- `setPreview` - Update preview images

---

### 3️⃣ useCoverColorStore.ts - Cover Background Color

```typescript
import { create } from "zustand";

type State = {
  coverColorBg: string;
};

type Action = {
  updateCoverColor: (coverColorBg: string) => void;
};

export const useCoverColorStore = create<State & Action>((set) => ({
  coverColorBg: "gradient-cover",
  updateCoverColor: (coverColorBg) => set(() => ({ coverColorBg })),
}));
```

**Default:** `"gradient-cover"` (gradient background)

**Actions:**
- `updateCoverColor(color)` - Set cover background color or gradient

---

### 4️⃣ useCardColorStore.ts - Card Background Color

```typescript
import { create } from "zustand";

type State = {
  cardColorBg: string;
};

type Action = {
  updateCardColor: (cardColorBg: string) => void;
};

export const useCardColorStore = create<State & Action>((set) => ({
  cardColorBg: "#222222",
  updateCardColor: (cardColorBg) => set(() => ({ cardColorBg })),
}));
```

**Default:** `"#222222"` (dark gray)

**Actions:**
- `updateCardColor(color)` - Set card background color (hex)

---

### 5️⃣ useTextColorStore.ts - Text Styling

```typescript
import { create } from "zustand";

interface Props {
  font: string;
  color: string;
  size: string;
}

export type State = {
  pronoun: Props;
  name: Props;
  tagLine: Props;
  jobTitle: Props;
  company: Props;
  location: Props;
  button: Props;
};

type Action = {
  updateFont: (key: keyof State, font: string) => void;
  updateColor: (key: keyof State, color: string) => void;
  updateSize: (key: keyof State, size: string) => void;
};

export const useTextColorStore = create<State & Action>((set) => ({
  pronoun: { font: "font-monospace", color: "#9ca3af", size: "text-sm" },
  name: { font: "font-poppins", color: "#ffffff", size: "text-xl" },
  tagLine: { font: "ubuntu", color: "#9ca3af", size: "text-sm" },
  jobTitle: { font: "syne", color: "#2dd4bf", size: "text-lg" },
  company: { font: "metamorphous", color: "#9ca3af", size: "text-sm" },
  location: { font: "roboto", color: "#9ca3af", size: "text-sm" },
  button: { font: "#000000", color: "#14b8a6", size: "" },

  updateFont: (key: keyof State, font: string) =>
    set((state) => ({
      [key]: { ...state[key], font },
    })),

  updateColor: (key: keyof State, color: string) =>
    set((state) => ({
      [key]: { ...state[key], color },
    })),

  updateSize: (key: keyof State, size: string) =>
    set((state) => ({
      [key]: { ...state[key], size },
    })),
}));
```

**Configurable Elements:**
- `pronoun` - Pronoun styling
- `name` - Full name styling
- `tagLine` - Career tagline styling
- `jobTitle` - Job title styling
- `company` - Company name styling
- `location` - Location styling
- `button` - Button text styling

**Actions:**
- `updateFont(key, font)` - Update font family
- `updateColor(key, color)` - Update text color
- `updateSize(key, size)` - Update font size

---

### 6️⃣ useContentStore.ts - Card Content

```typescript
import { create } from "zustand";

interface Props {
  link: string;
  icon: string;
  color: string;
  label?: string;
}

type State = {
  companyLogo: boolean;
  socialMedia: Props[];
  contact: Props[];
};

type Actions = {
  updateCoverLogo: (companyLogo: boolean) => void;
  updateSocialMedia: (socialMedia: Props[]) => void;
  updateContacts: (contact: Props[]) => void;
};

export const useContentStore = create<State & Actions>((set) => ({
  companyLogo: false,
  socialMedia: [],
  contact: [
    {
      link: "",
      icon: "bi-envelope-fill",
      color: "#ffffff",
    },
    {
      link: "",
      icon: "bi-telephone-fill",
      color: "#22c55e",
    },
  ],
  updateCoverLogo: (companyLogo: boolean) => set(() => ({ companyLogo })),
  updateSocialMedia: (socialMedia: Props[]) => set(() => ({ socialMedia })),
  updateContacts: (contact: Props[]) => set(() => ({ contact })),
}));
```

**States:**
- `companyLogo` - Show/hide company logo
- `socialMedia` - Array of social media links
- `contact` - Array of contact methods

**Default Contacts:**
- Email (bi-envelope-fill)
- Phone (bi-telephone-fill)

---

## 🔐 PROTECTED ROUTES & AUTHENTICATION

### Protected.tsx - Route Protection HOC

```typescript
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/useUserData";
import axios from "axios";
import { baseUrl } from "../../services/request";
import Loading from "../Loading/Loading";

interface ProtectedProps {
  children: React.ReactNode;
}

const Protected = ({ children }: ProtectedProps) => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/auth/me`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        login(response.data.username, response.data.email, response.data.plan);
        setLoading(false);
      })
      .catch(() => {
        navigate("/login");
      });
  }, []);

  return <>{loading ? <Loading /> : children}</>;
};

export default Protected;
```

**How It Works:**

1. Component checks user authentication on mount
2. Makes API call to `/api/v1/auth/me`
3. If authenticated:
   - Stores user data in useAuthStore
   - Renders protected content
4. If not authenticated:
   - Redirects to `/login`
5. Shows loading component during verification

**Protected Routes (VibeCard):**
- `/create` - Card creation page
- `/dashboard` - User dashboard
- `/profile` - User profile settings
- `/my-cards` - User's saved cards

**Protected Routes (VibeDashboard):**
- `/` - Admin home
- `/ambassadors` - Ambassador management
- `/forms` - Form submissions
- `/orders/cards` - Card orders
- `/orders/wallets` - Wallet orders

---

### Authentication Flow

```
User Login
    ↓
Submit credentials via /login form
    ↓
API validates credentials
    ↓
Sets session/cookie
    ↓
User redirected to dashboard
    ↓
Protected wrapper makes /auth/me call
    ↓
Stores user data in useAuthStore
    ↓
Page renders protected content
```

---

## 🌍 INTERNATIONALIZATION (i18n)

### i18n Configuration (i18n.ts)

```typescript
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations
import enTranslation from "./locales/en/translation.json";
import deTranslation from "./locales/de/translation.json";

const resources = {
  en: { translation: enTranslation },
  de: { translation: deTranslation },
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
```

**Supported Languages:**
- English (en)
- German (de)

**Language Detection:**
- Browser language preference
- Fallback to English

---

### English Translations (en/translation.json) - Key Sections

```json
{
  "email": "Email",
  "password": "Password",
  "conPass": "Confirm Password",
  "username": "Username",
  "already": "Already have an account?",
  "phone": "Phone",
  "bio": "Bio",
  "company": "Company",
  "jobTitle": "Job Title",
  "location": "Location",
  "name": "Name",
  "image": "Select image or drag and drop one here",
  "pronoun": "Pronoun",
  "update": "Update",
  "profilePic": "Profile Picture",
  "coverPic": "Cover Picture",
  "logo": "Company Logo",
  "cardPreview": "Card Preview",

  "layout": "Layout",
  "colors": "Colors",
  "text": "Text",
  "content": "Content",

  "cardLayout": "Card Layout",
  "default": "Default",
  "right": "Right",
  "center": "Center",

  "coverBg": "Cover Background Color",
  "cardBg": "Card Background Color",
  "btnBg": "Card Background Color",
  "trend": "Trend Colors",
  "btnTextC": "Button Text Color",
  "btnBgC": "Button Background Color",
  "pick": "Pick your color here",
  "chooseC": "Choose Colors",
  "chooseT": "Choose Text",
  "color": "Color",

  "textStyles": "Text Styles",
  "fontStyle": "Font Styles",
  "fontSize": "Font Size",

  "text-xl": "Extra Large",
  "text-lg": "Large",
  "text-base": "Normal",
  "text-sm": "Small",
  "text-xs": "Extra Small"
}
```

### German Translations (de/translation.json) - Key Sections

```json
{
  "email": "E-Mail",
  "password": "Passwort",
  "conPass": "Passwort bestätigen",
  "username": "Benutzername",
  "already": "Sie haben bereits ein Konto?",
  "phone": "Telefon",
  "bio": "Bio",
  "company": "Unternehmen",
  "jobTitle": "Berufsbezeichnung",
  "location": "Standort",
  "name": "Name",
  "image": "Bild auswählen oder per Drag & Drop hierher ziehen",
  "pronoun": "Pronomen",
  "update": "Aktualisieren",
  "profilePic": "Profilbild",
  "coverPic": "Titelbild",
  "logo": "Firmenlogo",
  "cardPreview": "Kartenvorschau",
  "card": "Karte",

  "layout": "Layout",
  "colors": "Farben",
  "text": "Text",
  "content": "Inhalt",

  "cardLayout": "Kartenlayouts",
  "default": "Standard",
  "right": "Rechts",
  "center": "Mitte",

  "coverBg": "Hintergrundfarbe des Covers",
  "cardBg": "Hintergrundfarbe der Karte",
  "trend": "Trendfarben",
  "btnTextC": "Textfarbe der Schaltfläche",
  "btnBgC": "Hintergrundfarbe der Schaltfläche",
  "chooseT": "Text auswählen",
  "chooseC": "Farben auswählen"
}
```

---

### Usage in Components

```typescript
import { useTranslation } from "react-i18next";

const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("layout")}</h1>
      <p>{t("cardLayout")}</p>
      <button>{t("update")}</button>
    </div>
  );
};
```

---

## 📱 PAGE STRUCTURES

### VibeCard (Customer App) - Complete Flow

```
Homepage (/)
├── Hero Section
├── Video Section
├── How to Create Steps (3 steps)
├── Card Preview (Interactive)
├── Features Grid (6 features)
├── Product Showcase (Metal, Paper, Bamboo)
├── Companies Slider
├── How to Design Steps (4 steps)
├── Product Carousel
├── Video Section
├── Testimonials
└── FAQ

Login Page (/login)
├── Login Form
├── Sign-up Options
└── Link to Register

Register Page (/register)
├── Registration Form
├── Sign-up Options
└── Link to Login

Create Page (/create) - PROTECTED
├── Card Layout Selection (Default/Center/Right)
├── Color Customization
│   ├── Cover Background Color
│   ├── Card Background Color
│   └── Text Color Picker
├── Text Styling
│   ├── Font Selection
│   ├── Font Size
│   └── Text Color
├── Card Content
│   ├── Profile Image Upload
│   ├── Cover Image Upload
│   ├── Company Logo Upload
│   ├── Contact Information
│   └── Social Media Links
├── Card Preview (Real-time)
└── Save/Publish Button

Dashboard Page (/dashboard) - PROTECTED
├── Analytics Overview
├── User Statistics
├── Card Management
└── Order History

Profile Page (/profile) - PROTECTED
├── User Information
├── Edit Profile
└── Account Settings
```

### VibeDashboard (Admin App) - Complete Flow

```
Dashboard (/dashboard) - PROTECTED
├── Analytics
│   ├── Total Users
│   ├── Total Generated Cards
│   ├── Total Approved Ambassadors
│   ├── Total Pending Ambassadors
│   ├── Free Subscribers
│   ├── Pro Subscribers
│   └── Pro+ Subscribers
├── Subscription Plans
├── Materials Management
│   ├── Available Card Materials
│   └── Add New Material
└── Wallets

Ambassadors (/ambassadors) - PROTECTED
├── Approved Ambassadors List
├── Pending Ambassadors List
└── Ambassador Management

Forms (/forms) - PROTECTED
├── Form Submissions List
└── Form Response Details

Card Orders (/orders/cards) - PROTECTED
├── Order List
├── Order Details
└── Order Status

Wallet Orders (/orders/wallets) - PROTECTED
├── Wallet Order List
├── Order Details
└── Order Status

Login (/login)
├── Admin Login Form
└── Authentication
```

---

## 📊 DATA FLOW DIAGRAM

```
┌─────────────────────────────────────────────┐
│         VibeCard Application                │
├─────────────────────────────────────────────┤
│                                             │
│  Components:                                │
│  ├── HomePage (Public)                     │
│  ├── LoginPage (Public)                    │
│  ├── CreatePage (Protected)                │
│  └── Dashboard (Protected)                 │
│                                             │
│  ↓                                          │
│                                             │
│  Zustand Stores:                            │
│  ├── useAuthStore                          │
│  ├── useCardData                           │
│  ├── useCoverColorStore                    │
│  ├── useCardColorStore                     │
│  ├── useTextColorStore                     │
│  └── useContentStore                       │
│                                             │
│  ↓                                          │
│                                             │
│  Services:                                  │
│  ├── request.ts (API base URL)             │
│  ├── faq.ts (Static FAQ data)              │
│  └── homeCard.ts (Static home cards)       │
│                                             │
│  ↓                                          │
│                                             │
│  i18n (Localization):                       │
│  ├── English (en)                          │
│  ├── German (de)                           │
│  └── Language Detection                    │
│                                             │
│  ↓                                          │
│                                             │
│  API Server:                                │
│  └── https://api.vibecard.de               │
│      ├── /api/v1/auth/*                    │
│      ├── /api/v1/card/*                    │
│      ├── /api/v1/dashboard/*               │
│      └── /api/v1/products/*                │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 🔗 API ENDPOINTS REFERENCE

### Authentication Endpoints
```
GET  /api/v1/auth/me              - Get current user
POST /api/v1/auth/login           - User login
POST /api/v1/auth/register        - User registration
POST /api/v1/auth/logout          - User logout
```

### Card Endpoints
```
GET  /api/v1/card                 - Get user's cards
POST /api/v1/card                 - Create new card
GET  /api/v1/card/:id             - Get card details
PUT  /api/v1/card/:id             - Update card
DELETE /api/v1/card/:id           - Delete card
```

### Dashboard Endpoints
```
GET  /api/v1/dashboard/general    - Get dashboard stats
GET  /api/v1/dashboard/analytics  - Get analytics data
```

### Product Endpoints
```
GET  /api/v1/products             - Get all products
GET  /api/v1/products/:id         - Get product details
GET  /api/v1/products/available-materials - Get available materials
POST /api/v1/products/add-material    - Add material
DELETE /api/v1/products/remove-material - Remove material
```

---

## ⚙️ AXIOS CONFIGURATION

All API calls include:
```javascript
{
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,  // Include cookies for session auth
}
```

---

## 📋 SUMMARY TABLE

| Component | Purpose | State Management |
|-----------|---------|-----------------|
| **useAuthStore** | User authentication | user, email, plan |
| **useCardData** | Card information | name, email, phone, etc. |
| **useCoverColorStore** | Cover BG color | single color value |
| **useCardColorStore** | Card BG color | single color value |
| **useTextColorStore** | Text styling | font, color, size |
| **useContentStore** | Card content | logo, contacts, socials |

---

Generated on: 2026-06-02
Commit: 37fe369bc632cfd8fce5b82850e3aab32dbadd89
Repository: omarawel/vibecard
