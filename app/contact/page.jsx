import Image from 'next/image';
import { Send } from 'lucide-react';
import contactImg from '@/assets/contact.png';
import CustomButton from '@/components/CustomButton';

const Contact = () => {
	return (
		<div className="flex flex-col gap-10">
			<h1 className="md:text-5xl text-3xl font-semibold text-center">
				Let&apos;s keep in touch
			</h1>
			<div className="flex gap-14 items-center">
				<div className="md:max-w-sm max-w-sm">
					<Image
						src={contactImg}
						alt="Contact Me"
						className="max-w-full"
					/>
				</div>
				<div className="flex-1">
					<form className="flex flex-col max-w-lg mx-auto gap-4">
						<input
							type="text"
							className="border-2 rounded-lg border-secondary-bg dark:border-secondary-bg--dark px-4 py-3 bg-primary-bg dark:bg-primary-bg--dark"
						/>
						<input
							type="text"
							className="border-2 rounded-lg border-secondary-bg dark:border-secondary-bg--dark px-4 py-3 bg-primary-bg dark:bg-primary-bg--dark"
						/>
						<textarea
							name=""
							id=""
							cols="30"
							rows="10"
							className="border-2 rounded-lg border-secondary-bg dark:border-secondary-bg--dark px-4 py-3 bg-primary-bg dark:bg-primary-bg--dark"
						/>
						<CustomButton
							text="Send message"
							url=""
							type="primary"
							icon={<Send size={20} strokeWidth={1.5} />}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
