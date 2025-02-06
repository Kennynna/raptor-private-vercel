import { useState } from 'react'

export const useCryptoDropListBoolean = () => {
	const [isOpen, setIsOpen] = useState(false)

	return {
		isOpen,
		setIsOpen,
	}
}


export const useWalletDropListBoolean = () => {
	const [isWalletOpen, setIsWalletOpen] = useState(false)

	return {
		isWalletOpen,
		setIsWalletOpen,
	}
}