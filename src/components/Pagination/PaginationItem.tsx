import { Stack, Button, Box } from '@chakra-ui/react';

interface PaginatioItemProps {
	number: number;
	isCurrent?: boolean;
}

export function PaginationItem({
	isCurrent = false,
	number,
}: PaginatioItemProps) {
	if (isCurrent) {
		return (
			<Button
				size="sm"
				fontSize="xs"
				width="4"
				colorScheme="pink"
				disabled
				_disabled={{ bg: 'pink.500' }}
				cursor="default"
			>
				{number}
			</Button>
		);
	}

	return (
		<Button
			size="sm"
			fontSize="xs"
			width="4"
			bgColor="gray.700"
			_hover={{ bg: 'gray.500' }}
		>
			{number}
		</Button>
	);
}
