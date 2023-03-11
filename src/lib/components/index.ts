export * from './Accordion';
export * from './atoms';
export * from './Badge';
export * from './bosons';
export * from './ButtonGroup';
export * from './Card';
export * from './Carousel';
export * from './Dropdown';
export * from './Footer';
export * from './molecules';
export * from './Navbar';
export * from './Pagination';
export * from './Rating';
export * from './Sidebar';
export * from './Spinner';
export * from './Table';

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;