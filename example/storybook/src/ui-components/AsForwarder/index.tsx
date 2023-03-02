import { styled, AsForwarder } from '@dank-style/react';
import { H1 } from '@expo/html-elements';
import { Svg } from 'react-native-svg';

export const StyledHeading = styled(
  H1,
  {
    color: '$red900',
    letterSpacing: '$sm',
    fontWeight: 'bold',
    fontFamily: '$heading',

    variants: {
      size: {
        '5xl': {
          fontSize: '$7xl',
          lineHeight: '$7xl',
        },
        '4xl': {
          fontSize: '$5xl',
          lineHeight: '$5xl',
        },

        '3xl': {
          fontSize: '$4xl',
          lineHeight: '$5xl',
        },

        '2xl': {
          fontSize: '$3xl',
          lineHeight: '$3xl',
        },

        'xl': {
          fontSize: '$2xl',
          lineHeight: '$3xl',
        },

        'lg': {
          fontSize: '$xl',
          lineHeight: '$2xl',
        },

        'md': {
          fontSize: '$lg',
          lineHeight: '$md',
        },

        'sm': {
          fontSize: '$md',
          lineHeight: '$lg',
        },

        'xs': {
          fontSize: '$sm',
          lineHeight: '$xs',
        },
      },
    },

    defaultProps: {
      size: 'lg',
    },

    //@ts-ignore
    _dark: {
      color: '$textDark50',
    },
  },
  {}
);

export const StyledIcon = styled(
  Svg,
  {
    variants: {
      size: {
        xs: {
          props: {
            size: 14,
          },
        },
        sm: {
          props: {
            size: 16,
          },
        },
        md: {
          props: {
            size: 18,
          },
        },
        lg: {
          props: {
            size: 20,
          },
        },
        xl: {
          props: {
            size: 24,
          },
        },
      },
    },
  },
  {
    ancestorStyle: ['_icon'],
    resolveProps: ['size'],
    DEBUG: 'STYLED_ICON',
  },
  {
    propertyTokenMap: {
      size: 'space',
    },
  }
);
export default StyledHeading;
