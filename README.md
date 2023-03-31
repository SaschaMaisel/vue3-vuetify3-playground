# base

simple repro for my issues when using vue3/vuetify3

## usage

build/link library:

```
cd lib 
npm ci 
npm run build
npm link
```

run app:

```
cd app
npm ci 
npm link vue3-component-experiments 
npm run dev
```
