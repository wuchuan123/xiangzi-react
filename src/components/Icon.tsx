import React from 'react';
import cs from 'classnames';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
  name?: string
} & React.SVGAttributes<SVGElement>

export const Icon = (props: Props) => {
  const {name, children, className, ...rest} = props
  return (
    <svg className={cs('icon', className)} {...rest}>
      {name && <use xlinkHref={'#' + name}/>}
    </svg>
  );
};

