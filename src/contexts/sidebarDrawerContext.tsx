/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { createContext, ReactNode, useContext, useEffect } from 'react';

interface SidebarDrawerProps {
	children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProps) {
	const disclosure = useDisclosure();
	const router = useRouter();

	useEffect(() => {
		disclosure.onClose();
	}, [router.asPath]);

	return (
		<SidebarDrawerContext.Provider value={disclosure}>
			{children}
		</SidebarDrawerContext.Provider>
	);
}

export const useSidebarDrawer = () => {
	return useContext(SidebarDrawerContext);
};
