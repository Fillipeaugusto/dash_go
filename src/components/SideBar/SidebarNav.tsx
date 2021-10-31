import { RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';
import { NavSection } from './NavSection';
import { RiDashboardLine, RiContactsLine } from 'react-icons/ri';
import { NavLink } from './NavLink';
import { Stack } from '@chakra-ui/react';

export function SidebarNav() {
	return (
		<Stack spacing="12" align="flex-start">
			<NavSection title="GENERAL">
				<NavLink icon={RiDashboardLine} href="/dashboard">
					Dashboard
				</NavLink>
				<NavLink icon={RiContactsLine} href="/users">
					Users
				</NavLink>
			</NavSection>
			{/* <NavSection title="AUTOMAÇÃO">
				<NavLink icon={RiInputMethodLine} href="/forms">
					Formulários
				</NavLink>
				<NavLink icon={RiGitMergeLine} href="/automation">
					Automação
				</NavLink>
			</NavSection> */}
		</Stack>
	);
}
