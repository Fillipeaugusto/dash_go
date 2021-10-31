import { Flex, Button, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';

type SignInFormData = {
	email: string;
	password: string;
};

const signInFormSchema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required(),
});

export default function SignIn() {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(signInFormSchema),
	});

	const { errors } = formState;
	const route = useRouter();
	const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
		await new Promise((resolve) => setTimeout(resolve, 2000));
		route.push('/dashboard');
	};

	return (
		<Flex w="100vw" h="100vh" align="center" justify="center">
			{/* <Head>
				<title>DashGo</title>
			</Head> */}
			<Flex
				as="form"
				width="100%"
				maxWidth={360}
				bg="gray.800"
				p="8"
				borderRadius="8"
				flexDirection="column"
				onSubmit={handleSubmit(handleSignIn)}
			>
				<Stack spacing="4">
					<Input
						name="email"
						type="email"
						label="Email"
						error={errors.email}
						{...register('email')}
					/>
					<Input
						name="password"
						type="password"
						label="Senha"
						error={errors.password}
						{...register('password')}
					/>
				</Stack>

				<Button
					type="submit"
					mt="6"
					colorScheme="pink"
					size="lg"
					isLoading={formState.isSubmitting}
				>
					Login
				</Button>
			</Flex>
		</Flex>
	);
}
