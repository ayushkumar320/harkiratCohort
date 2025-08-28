## Context API:
- The problem with context API is: 
  For a given tree structure, the context API can lead to unnecessary re-renders of components that do not depend on the changed context, impacting performance.
- **Why do you use the context API?**
  - To avoid prop drilling and make it easier to share values between components without having to pass props down manually at every level.
  - To manage global state in a more efficient way, especially for themes, user authentication, and other shared data.
  - It is never used to make rendering more performant.
  - The parent component will still re render if any of its child has the context which provides it the state variable.
## Recoil
- We use Recoil to manage state more effectively in complex applications. Recoil is a state management library for React that provides a more flexible and efficient way to manage global state.
  - Other popular state management libraries for React include Redux, MobX, and Zustand.

- Recoil has a concept of an `atom` to store the state.
- An atom can be defined outside the component
- Can be teleported to any component
- An atom is similar to `useState` which allows us to create state variables.
- The biggest advantage of recoil is, we can design component tree more flexibly and avoid unnecessary re-renders.


- Any good codebase will have a separate folder store where we will manage our Recoil atoms and selectors.

## Steps

1. **Inside store/atoms:**
  - We will create a file count.jsx which will contain our count atom
  ```jsx
    import { atom } from "recoil";
    export const countAtom = atom({
      key: "countAtom",
      default: 0
    });
  ```
2. **Setting up state:**
  - Recoil gives us three hooks:
    1. `useRecoilState`: This hook is used to read and write the state of an atom. It is similar to `useState`, but it works with Recoil atoms.
    2. `useRecoilValue`: This hook is used to read the state of an atom without subscribing to updates. It gives just the value like `const count = useRecoilValue(countAtom);` will return the current count value.
    3. `useSetRecoilState`: This hook is used to update the state of an atom without reading it. It will only update the state and not re-render the component like `const setCount = useSetRecoilState(countAtom);` will only update the count value without re-rendering the component.
  - `RecoilRoot` is a component that must wrap your application in order to use Recoil state management. It provides the necessary context for Recoil to function. Just like `CounterContext.Provider` wraps the component which consumes the context.
  
