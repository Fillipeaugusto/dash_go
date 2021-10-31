import {
	Box,
	Flex,
	Heading,
	Divider,
	VStack,
	SimpleGrid,
	HStack,
	Button,
} from '@chakra-ui/react';

import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/SideBar';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type CreateUserFormData = {
	email: string;
	password: string;
};

const createUserFormSchema = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().email().required(),
	password: yup.string().required().min(6),
	password_confirmation: yup
		.string()
		.oneOf([yup.ref('password'), null], 'passwords do not match'),
});

export default function CreateUser() {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(createUserFormSchema),
	});
	const { errors } = formState;

	const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
		await new Promise((resolve) => setTimeout(resolve, 2000));
		console.log(values);
	};

	return (
		<Box>
			{/* <Head>
				<title>DashGo | Create</title>
			</Head> */}
			<Header />
			<Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
				<Sidebar />
				<Box
					as="form"
					onSubmit={handleSubmit(handleCreateUser)}
					flex="1"
					borderRadius={8}
					bg="gray.800"
					p={['6', '8']}
				>
					<Heading size="lg" fontWeight="normal">
						Create User
					</Heading>
					<Divider my="6" borderColor="gray.700" />

					<VStack spacing="8">
						<SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
							<Input
								name="name"
								label="Full Name"
								error={errors.name}
								{...register('name')}
							/>
							<Input
								name="email"
								label="E-mail"
								type="email"
								error={errors.email}
								{...register('email')}
							/>
						</SimpleGrid>
						<SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
							<Input
								name="password"
								label="Password"
								type="password"
								error={errors.password}
								{...register('password')}
							/>
							<Input
								name="password_confirmation"
								label="Password Confirmation"
								type="password"
								error={errors.password_confirmation}
								{...register('password_confirmation')}
							/>
						</SimpleGrid>
					</VStack>
					<Flex mt="8" justify="flex-end">
						<HStack spacing="4">
							<Link href="/users" passHref>
								<Button as="a" colorScheme="whiteAlpha">
									Cancel
								</Button>
							</Link>
							<Button
								type="submit"
								colorScheme="pink"
								isLoading={formState.isSubmitting}
							>
								Create
							</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}
