import { Header } from '../components/Header';
import dynamic from 'next/dynamic';
import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react';
import { Sidebar } from '../components/SideBar';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { ApexOptions } from 'apexcharts';

const options: ApexOptions = {
	chart: {
		toolbar: {
			show: false,
		},
		zoom: {
			enabled: false,
		},
		foreColor: theme.colors.gray[500],
	},

	grid: {
		show: false,
	},
	dataLabels: {
		enabled: false,
	},
	tooltip: {
		enabled: false,
	},
	xaxis: {
		type: 'datetime',

		axisBorder: {
			color: theme.colors.gray[600],
		},
		axisTicks: {
			color: theme.colors.gray[600],
		},
		categories: [
			'2021-03-18T00:00:00.000Z',
			'2021-03-19T00:00:00.000Z',
			'2021-03-20T00:00:00.000Z',
			'2021-03-21T00:00:00.000Z',
			'2021-03-22T00:00:00.000Z',
			'2021-03-23T00:00:00.000Z',
			'2021-03-24T00:00:00.000Z',
			'2021-03-25T00:00:00.000Z',
		],
	},

	fill: {
		opacity: 0.3,
		type: 'gradient',

		gradient: {
			shade: 'dark',
			opacityFrom: 0.6,
			opacityTo: 0.3,
		},
	},
};
const options2: ApexOptions = {
	chart: {
		toolbar: {
			show: false,
		},
		zoom: {
			enabled: false,
		},
		foreColor: theme.colors.gray[500],
		animations: {
			enabled: true,
			easing: 'easeinout',
			speed: 900,
			animateGradually: {
				enabled: true,
				delay: 150,
			},
			dynamicAnimation: {
				enabled: true,
				speed: 350,
			},
		},
	},

	grid: {
		show: false,
	},
	dataLabels: {
		enabled: false,
	},
	tooltip: {
		enabled: false,
	},
	xaxis: {
		type: 'datetime',

		axisBorder: {
			color: theme.colors.gray[600],
		},
		axisTicks: {
			color: theme.colors.gray[600],
		},
		categories: [
			'2021-03-18T00:00:00.000Z',
			'2021-03-19T00:00:00.000Z',
			'2021-03-20T00:00:00.000Z',
			'2021-03-21T00:00:00.000Z',
			'2021-03-22T00:00:00.000Z',
			'2021-03-23T00:00:00.000Z',
			'2021-03-24T00:00:00.000Z',
			'2021-03-25T00:00:00.000Z',
		],
	},

	fill: {
		opacity: 0.3,
		type: 'gradient',
		colors: [theme.colors.pink[600]],
		gradient: {
			shade: 'dark',
			opacityFrom: 0.6,
			opacityTo: 0.3,
		},
	},
};

const series1 = [
	{
		name: 'series1',
		data: [50, 10, 45, 120, 49, 50, 70, 91],
	},
];
const series2 = [
	{
		name: 'series1',
		data: [12, 40, 25, 120, 22, 23, 190, 240],
	},
];

export default function Dashboard() {
	return (
		<Flex direction="column" h="100vh">
			{/* <Head>
				<title>DashGo | Dashboard</title>
			</Head> */}
			<Header />
			<Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
				<Sidebar />
				<SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
					<Box p={['6', '8']} bg="gray.800" borderRadius="8" pb={4}>
						<Text fontSize="lg" mb="4">
							New Subscriptions
						</Text>
						<Chart options={options} series={series1} type="area" height={160} />
					</Box>
					<Box p="8" bg="gray.800" borderRadius="8" pb={4}>
						<Text fontSize="lg" mb="4">
							Users
						</Text>
						<Chart options={options2} series={series2} type="area" height={160} />
					</Box>
				</SimpleGrid>
			</Flex>
		</Flex>
	);
}
