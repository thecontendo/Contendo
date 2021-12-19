import * as React from 'react';
import LogoSvg from 'assets/svgs/clogo.svg';

type Props = {
  style?: object;
};

export default function Logo(style: Props) {
  return <LogoSvg width={'100'} height={'100'} style={style} />;
}
