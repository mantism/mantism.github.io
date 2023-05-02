declare module 'navigation' {
  export interface INavProps {
    children?: any;
    darkMode?: DarkMode;
    display: boolean;
    section: string;
    handleClick: (any) => any;
  }
}
