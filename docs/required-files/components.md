---
sidebar_position: 3
---

# 2.3 Components
Catalogo de componentes reutilizables en toda la aplicación. En constante desarrollo

Puede descargar la carpeta completa o archivo por archivo segun le convenga. [Descargar carpeta completa](https://reactnative.dev/docs/speeding-ci-builds)
- ./src/components
  - [index.ts](https://reactnative.dev/docs/speeding-ci-builds)
  - ./src/components/core
    - [index.ts](https://reactnative.dev)
    - [responsive.ts](https://reactnative.dev)


## Core
Componentes base que no requieren dependencias adicionales

### Button
```tsx
<Button title="Aceptar" onPress={() => {}} />
```
Props. Las props que tienen el signo **_(?)_** son opcionales
```ts title="src/components/core/Button.tsx"
interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  type?: keyof ButtonType;
  underline?: boolean;
  font?: keyof FontStyle;
  fontColor?: keyof FontColors;
  icon?: Icons;
  iconPosition?: 'left' | 'right';
}
```
### Icon
```tsx
<Icon name={Icons.Search} />
```
Props. Las props que tienen el signo **_(?)_** son opcionales
```ts
interface IconProps {
  name: Icons;
  size?: IconSizes;
}
```

### Margin
```tsx
<Margin top={4} bottom={8} />
```
Props. Las props que tienen el signo **_(?)_** son opcionales
```ts
interface MarginComponentProps {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  flex?: boolean;
}

```

### SearchInput

### Text
```jsx
<Text title="Hello world" font="body16Regular" />
```
Props. Las props que tienen el signo **_(?)_** son opcionales
```ts
export interface TextProps extends RNTextProps {
  title: string;
  font: keyof FontStyle;
  color?: keyof FontColors;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  underline?: boolean;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined;
}
```

### TextInput

## Layout