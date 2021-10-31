import {
	Box,
	Flex,
	Heading,
	Button,
	Icon,
	Table,
	Thead,
	Tr,
	Th,
	Td,
	Tbody,
	Checkbox,
	Text,
	useBreakpointValue,
} from '@chakra-ui/react';

import { RiAddLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/SideBar';
import Link from 'next/link';
export default function UserList() {
	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	return (
		<Box>
			{/* <Head>
				<title>DashGo | Users</title>
			</Head> */}
			<Header />
			<Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
				<Sidebar />
				<Box flex="1" borderRadius={8} bg="gray.800" p="8">
					<Flex mb="8" justify="space-between" align="center">
						<Heading size="lg" fontWeight="normal">
							Users
						</Heading>
						<Link href="users/create" passHref>
							<Button
								as="a"
								size="sm"
								fontSize="small"
								colorScheme="pink"
								leftIcon={<Icon as={RiAddLine} fontSize="20" />}
							>
								Add new user
							</Button>
						</Link>
					</Flex>
					<Table colorScheme="whiteAlpha">
						<Thead>
							<Tr>
								<Th px={['4', '4', '6']} color="gray.300" width="8">
									<Checkbox colorScheme="pink" />
								</Th>
								<Th>User</Th>
								{isWideVersion && <Th>Subscribe date</Th>}
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td px={['4', '4', '6']}>
									<Checkbox colorScheme="pink" />
								</Td>
								<Td px={['4', '4', '6']}>
									<Box>
										<Text fontWeight="bold">Fillipe Augusto</Text>
										<Text fontSize="small" color="gray.300" fontWeight="bold">
											fillipeaugusto@gmail.com
										</Text>
									</Box>
								</Td>
								{isWideVersion && <Td>Jun 03 - 2021</Td>}
							</Tr>
							<Tr>
								<Td px={['4', '4', '6']}>
									<Checkbox colorScheme="pink" />
								</Td>
								<Td px={['4', '4', '6']}>
									<Box>
										<Text fontWeight="bold">Jhon Doe</Text>
										<Text fontSize="small" color="gray.300" fontWeight="bold">
											jhon.doe@jondoe.com
										</Text>
									</Box>
								</Td>
								{isWideVersion && <Td>Aug 15 - 2021</Td>}
							</Tr>
							<Tr>
								<Td px={['4', '4', '6']}>
									<Checkbox colorScheme="pink" />
								</Td>
								<Td px={['4', '4', '6']}>
									<Box>
										<Text fontWeight="bold">Josh Pack</Text>
										<Text fontSize="small" color="gray.300" fontWeight="bold">
											josh.pack@support.com
										</Text>
									</Box>
								</Td>
								{isWideVersion && <Td>Mar 22 - 2021</Td>}
							</Tr>
							<Tr>
								<Td px={['4', '4', '6']}>
									<Checkbox colorScheme="pink" />
								</Td>
								<Td px={['4', '4', '6']}>
									<Box>
										<Text fontWeight="bold">Sarah Uchoa</Text>
										<Text fontSize="small" color="gray.300" fontWeight="bold">
											sarah@ui.com
										</Text>
									</Box>
								</Td>
								{isWideVersion && <Td>Jun 04 - 2021</Td>}
							</Tr>
						</Tbody>
					</Table>
					<Pagination />
				</Box>
			</Flex>
		</Box>
	);
}
