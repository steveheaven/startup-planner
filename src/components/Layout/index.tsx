import React, { FC } from "react";

import { Wrapper } from "./styled";

interface Props {
	children?: JSX.Element;
}

const Layout: FC<Props> = ({ children }) => (
	<>
		<Wrapper>{children}</Wrapper>
	</>
);

export default Layout;
