import BackButton from '../../Buttons/backButton';
import { Box, Button, Flex, useDisclosure } from '@chakra-ui/react';
import QuoteSummary from '../../Cards/quoteSummary';
import RegularButton from '../../Buttons/regularButton';
import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import PaymentModal from '../../Modals/paymentModal';

const PaymentDetailsLTL = ({ nextStep, prevStep }: { nextStep: () => void; prevStep: () => void }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const ltlShipmentCharges = useAppSelector((state: RootState) => state?.ltlTotalCharge);
	const insuranceDetails = useAppSelector((state: RootState) => state?.insurance);
	const total = Number(ltlShipmentCharges?.amount?.value) + Number(insuranceDetails?.insurance_amount);

	localStorage.setItem('total', JSON.stringify(total));
	localStorage.setItem('shipmentId', ltlShipmentCharges?.shipmentId);

	const handleCheckout = () => {
		// axios
		// 	.post(`${import.meta.env.VITE_BACKEND_URL}:${import.meta.env.VITE_BACKEND_PORT}/payment/create-checkout-session`, {
		// 		payment: { currency: selectedRate?.selectedRate?.shipping_amount?.currency, rate: selectedRate?.selectedRate?.shipping_amount?.amount, insurance: insuranceDetails?.insurance_amount, other_amount: selectedRate?.selectedRate?.other_amount?.amount, date: selectedRate?.selectedRate?.estimated_delivery_date },
		// 	})
		// 	.then((response) => {
		// 		if (response.data.url) {
		// 			window.location.href = response.data.url;
		// 		}
		// 	})
		// 	.catch((err) => console.log(err.message));
	};

	return (
		<Box>
			<QuoteSummary />
			<PaymentModal
				isOpen={isOpen}
				onClose={onClose}
				total={total}
				insured_amount={insuranceDetails?.product_value || 0}
			/>

			<Flex
				mt={'4rem'}
				justify={'space-between'}
				align={'center'}>
				<BackButton
					onClick={() => prevStep()}
					width="8rem"
				/>
				<Flex
					gap={'1rem'}
					justify={'flex-end'}>
					<Button onClick={onOpen}>BNPL</Button>
					<Button onClick={handleCheckout}>Pay now</Button>
				</Flex>
			</Flex>
		</Box>
	);
};

export default PaymentDetailsLTL;
