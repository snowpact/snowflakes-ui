import type { DeepPartial } from '../..';
import type { AlertTheme } from '../../atoms/Alert/Alert.theme';
import type { BreadcrumbTheme } from '../../atoms/Breadcrumb/Breadcrumb.theme';
import type { ButtonTheme } from '../../atoms/Button/Button.theme';
import type { DarkThemeToggleTheme } from '../../atoms/DarkThemeToggle/DarkThemeToggle.theme';
import type { MainContainerTheme } from '../../atoms/MainContainer/MainContainer.theme';
import type { ProgressColors, ProgressSizes } from '../../atoms/Progress';
import type { ToastTheme } from '../../atoms/Toast/Toast.theme';
import type { TooltipTheme } from '../../atoms/Tooltip/Tooltip.theme';
import type { BadgeColors, BadgeSizes } from '../../Badge';
import type { FlowbiteDropdownTheme } from '../../Dropdown';
import type {
  HelperColors,
  LabelColors,
  SelectColors,
  SelectSizes,
  TextareaColors,
  TextInputColors,
  TextInputSizes
} from '../../FormControls';

import type { AvatarTheme } from '../../atoms/Avatar/Avatar.theme';
import type { CameraRollTheme } from '../../molecules/CameraRoll/CameraRoll.theme';
import type { HeroTheme } from '../../molecules/Hero/Hero.theme';
import type { ModalTheme } from '../../molecules/Modal/Modal.theme';
import type { TabsTheme } from '../../molecules/Tab/Tabs.theme';
import type { StarSizes } from '../../Rating';
import type { SidebarCTAColors } from '../../Sidebar/SidebarCTA';
import type { SpinnerColors, SpinnerSizes } from '../../Spinner';

export type CustomHelloInternetTheme = DeepPartial<HelloInternetTheme>;

export interface HelloInternetTheme extends Record<string, unknown> {
  accordion: {
    base: string;
    content: {
      base: string;
    };
    flush: FlowbiteBoolean;
    title: {
      arrow: {
        base: string;
        open: {
          off: string;
          on: string;
        };
      };
      base: string;
      flush: FlowbiteBoolean;
      heading: string;
      open: FlowbiteBoolean;
    };
  };
  alert: AlertTheme;
  avatar: AvatarTheme;
  badge: {
    base: string;
    color: BadgeColors;
    href: string;
    icon: {
      off: string;
      on: string;
      size: BadgeSizes;
    };
    size: BadgeSizes;
  };
  breadcrumb: BreadcrumbTheme;
  button: ButtonTheme;
  buttonGroup: {
    base: string;
  };
  cameraRoll: CameraRollTheme;
  card: {
    base: string;
    children: string;
    horizontal: {
      off: string;
      on: string;
    };
    href: string;
    img: {
      base: string;
      horizontal: {
        off: string;
        on: string;
      };
    };
  };
  carousel: {
    base: string;
    indicators: {
      active: {
        off: string;
        on: string;
      };
      base: string;
      wrapper: string;
    };
    item: {
      base: string;
      wrapper: string;
    };
    control: {
      base: string;
      icon: string;
    };
    leftControl: string;
    rightControl: string;
    scrollContainer: {
      base: string;
      snap: string;
    };
  };
  darkThemeToggle: DarkThemeToggleTheme;
  footer: {
    base: string;
    container: string;
    bgDark: string;
    groupLink: {
      base: string;
      link: {
        base: string;
        href: string;
      };
      col: string;
    };
    icon: {
      base: string;
      size: string;
    };
    title: {
      base: string;
    };
    divider: {
      base: string;
    };
    copyright: {
      base: string;
      href: string;
      span: string;
    };
    brand: {
      base: string;
      img: string;
      span: string;
    };
  };
  formControls: {
    helperText: {
      base: string;
      colors: HelperColors;
    };
    label: {
      base: string;
      colors: LabelColors;
      disabled: string;
    };
    radio: {
      base: string;
    };
    checkbox: {
      base: string;
    };
    textInput: {
      base: string;
      addon: string;
      field: {
        base: string;
        icon: {
          base: string;
          svg: string;
        };
        input: {
          base: string;
          sizes: TextInputSizes;
          colors: TextInputColors;
          withIcon: FlowbiteBoolean;
          withAddon: FlowbiteBoolean;
          withShadow: FlowbiteBoolean;
        };
      };
    };
    fileInput: {
      base: string;
      field: {
        base: string;
        input: {
          base: string;
          sizes: TextInputSizes;
          colors: TextInputColors;
        };
      };
    };
    toggleSwitch: {
      base: string;
      active: FlowbiteBoolean;
      toggle: {
        base: string;
        checked: FlowbiteBoolean;
      };
      label: string;
    };
    textarea: {
      base: string;
      colors: TextareaColors;
      withShadow: FlowbiteBoolean;
    };
    select: {
      base: string;
      addon: string;
      field: {
        base: string;
        icon: {
          base: string;
          svg: string;
        };
        select: {
          base: string;
          withIcon: FlowbiteBoolean;
          withAddon: FlowbiteBoolean;
          withShadow: FlowbiteBoolean;
          sizes: SelectSizes;
          colors: SelectColors;
        };
      };
    };
  };
  hero: HeroTheme;
  listGroup: {
    base: string;
    item: {
      active: FlowbiteBoolean;
      base: string;
      href: FlowbiteBoolean;
      icon: string;
    };
  };
  modal: ModalTheme;
  navbar: {
    base: string;
    rounded: FlowbiteBoolean;
    bordered: FlowbiteBoolean;
    inner: {
      base: string;
      fluid: FlowbiteBoolean;
    };
    brand: string;
    collapse: {
      base: string;
      list: string;
      hidden: FlowbiteBoolean;
    };
    link: {
      base: string;
      active: FlowbiteBoolean;
      disabled: FlowbiteBoolean;
    };
    toggle: {
      base: string;
      icon: string;
    };
  };
  rating: {
    base: string;
    star: {
      sizes: StarSizes;
      filled: string;
      empty: string;
    };
    advanced: {
      base: string;
      label: string;
      progress: {
        base: string;
        fill: string;
        label: string;
      };
    };
  };
  pagination: {
    base: string;
    layout: {
      table: {
        base: string;
        span: string;
      };
    };
    pages: {
      base: string;
      showIcon: string;
      previous: {
        base: string;
        icon: string;
      };
      next: {
        base: string;
        icon: string;
      };
      selector: {
        base: string;
        active: string;
      };
    };
  };
  presentational: {
    base: string;
    icon: string;
    header: string;
    description: string;
  };
  sidebar: {
    base: string;
    collapsed: FlowbiteBoolean;
    inner: string;
    collapse: {
      button: string;
      icon: {
        base: string;
        open: FlowbiteBoolean;
      };
      label: {
        base: string;
        icon: string;
      };
      list: string;
    };
    cta: {
      base: string;
      color: SidebarCTAColors;
    };
    item: {
      active: string;
      base: string;
      collapsed: {
        insideCollapse: string;
        noIcon: string;
      };
      content: {
        base: string;
      };
      icon: {
        base: string;
        active: string;
      };
    };
    items: string;
    itemGroup: string;
    logo: {
      base: string;
      collapsed: FlowbiteBoolean;
      img: string;
    };
  };
  progress: {
    base: string;
    label: string;
    bar: string;
    color: ProgressColors;
    size: ProgressSizes;
  };
  mainContainer: MainContainerTheme;
  spinner: {
    base: string;
    color: SpinnerColors;
    light: {
      off: {
        base: string;
        color: SpinnerColors;
      };
      on: {
        base: string;
        color: SpinnerColors;
      };
    };
    size: SpinnerSizes;
  };
  tab: TabsTheme;
  toast: ToastTheme;
  tooltip: TooltipTheme;
  dropdown: {
    floating: FlowbiteDropdownTheme;
    content: string;
    inlineWrapper: string;
    arrowIcon: string;
  };
}

export interface FlowbiteBoolean {
  off: string;
  on: string;
}

export interface HIStateColors {
  info: string;
  failure: string;
  success: string;
  warning: string;
}

export interface HIThemeColors {
  primary: string;
  secondary: string;
  tertiary: string;
}

export interface HIColors extends HIStateColors, HIThemeColors {
  [key: string]: string;
  blue: string;
  cyan: string;
  dark: string;
  gray: string;
  green: string;
  indigo: string;
  light: string;
  lime: string;
  orange: string;
  pink: string;
  purple: string;
  red: string;
  teal: string;
  yellow: string;
}

export type HIHeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HIPositions {
  'bottom-left': string;
  'bottom-right': string;
  'bottom-center': string;
  'top-left': string;
  'top-center': string;
  'top-right': string;
  'center-left': string;
  center: string;
  'center-right': string;
}

export interface HISizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  '6xl': string;
  '7xl': string;
}

export interface HIButtonWidth extends HISizes {
  compact: string;
  full: string;
}