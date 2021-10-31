import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
	showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
	return (
		<Flex align="center">
			{showProfileData && (
				<Box mr="4" textAlign="right">
					<Text>Fillipe Augusto</Text>
					<Text color="gray.300" fontSize="small">
						fillipeaugusto@gmail.com
					</Text>
				</Box>
			)}
			<Avatar
				size="md"
				name="Fillipe Augusto Ribeiro"
				src="https://github.com/Fillipeaugusto.png"
			/>
		</Flex>
	);
}
