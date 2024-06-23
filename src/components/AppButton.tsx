"use client";

import tw, { styled } from "twin.macro";
import { Button as AntButton } from "antd";

// Modify the Ant Design Button with Tailwind CSS styles (ft) tw
export const AppButton = styled(AntButton)`
	${tw`bg-blue-500 
		text-white
		font-semibold
		px-4
		py-2
		rounded-lg
		hover:bg-blue-600
		focus:outline-none
		focus:ring-2
		focus:ring-blue-300
		transition
		duration-300`}
`;
