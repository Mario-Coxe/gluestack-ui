import React from 'react';
import { createStyled, FontResolver } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';
import { Text } from 'react-native';
import { AnimationResolver } from '@dank-style/animation-plugin';

export const styled = createStyled([
  // new AnimationResolver({}),
  new FontResolver({
    // mapFonts: fontMapper,
  }),
]) as any;

const StyledText = styled(Text, {
  // fontFamily: 'Nunito Sans',
  // fontWeight: 800,
  // fontStyle: 'italic',
  // fontSize: '$md',
});

export function FontsPlugin() {
  return (
    <Wrapper>
      <StyledText
        placeholder={`Select `}
        fontSize="$sm"
        fontWeight="$normal"
        // // value={value}
        // color="$textLight900"
        sx={{
          _dark: {
            color: '$textLight900',
          },
        }}
      >
        Hello
      </StyledText>

      {/* <StyledText sx={{ _dark: { color: '$red200' } }}>
        Hello world sdfsdf
      </StyledText> */}
    </Wrapper>
  );
}

export default FontsPlugin;
