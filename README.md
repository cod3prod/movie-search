# Movie Search

**omdbapi를 이용한 영화 검색 애플리케이션**

## 🎯 **프로젝트 목적**

### **핵심 목표**

- **ComponentPropsWithoutRef**: `ComponentPropsWithoutRef`를 활용해 버튼 컴포넌트에 추가적인 HTML 속성을 확장하고, 재사용성을 높입니다.
- **ComponentPropsWithRef**: `ComponentPropsWithRef`를 사용하여 Ref가 필요한 컴포넌트를 생성하며, React 19에서는 Ref 전달이 더 간편하게 개선되었습니다.

## 🔨 **기술 스택**

- **주요 기술**: Next.js 15
- **스타일링**: Tailwind CSS
- **API**: omdbapi

## 📝 **핵심 학습 내용**

### 1. ComponentPropsWithoutRef

컴포넌트를 설계할 때 다형성을 지원함으로써 다양한 사용 사례에 대응할 수 있습니다.

```tsx
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export default function Button(props: ComponentPropsWithoutRef<"button">) {
  const { children, className, ...rest } = props;

  return (
    <button
      className={twMerge(
        "px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
```

### 2. Input 컴포넌트에 Ref 전달

Ref를 사용해야 하는 컴포넌트에는 `forwardRef`와 `ComponentPropsWithRef`를 사용합니다.

```tsx
import { ComponentPropsWithRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Input = forwardRef<HTMLInputElement, ComponentPropsWithRef<"input">>(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <input
        ref={ref}
        className={twMerge(
          "w-full sm:w-2/3 p-3 border border-gray-300 rounded-lg shadow-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-hidden",
          className
        )}
        {...rest}
      />
    );
  }
);

Input.displayName = "Input";
export default Input;
```

## ⚙️ **프로젝트 설정**

```bash
# 패키지 설치
npm install

# 로컬 개발 환경 실행
npm run dev
```
