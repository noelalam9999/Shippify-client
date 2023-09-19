import { Flex } from '@chakra-ui/react';
import BackgroundImage from '../../components/Background image/backgroundImage';
import MultistepRegistration from '../../components/Registration & Setup/Multi stepper for registration/multiStepperFormRegistration';

const RegisterPage = () => {
	return (
		<Flex h={'100vh'}>
			<MultistepRegistration />
			<BackgroundImage />
		</Flex>
	);
};

export default RegisterPage;
