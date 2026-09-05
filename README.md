# Doors Guides

Чёрно-белый справочник по текущему Roblox DOORS: сущности всех действующих локаций, предметы, Battle Mode, Daily Runs и остальные Visions. Старый удалённый The Rooms не включён.

## Разработка

```powershell
pnpm install
pnpm dev
```

## Windows `.exe`

```powershell
pnpm desktop:pack
```

Установщик появится в `release-windows`.

## Android `.apk`

Нужны Android Studio, Android SDK и JDK 21. Затем:

```powershell
npx cap add android
pnpm exec cap add android
pnpm android:apk
```

Файл появится в `android/app/build/outputs/apk/debug/`.
