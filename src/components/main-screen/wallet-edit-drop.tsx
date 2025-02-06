import {CopyPlus} from 'lucide-react'

// Тип можно подправить под реальные данные
type Wallet = {
    id: number
    name: string
    address: string
}

interface WalletEditDropProps {
    wallet: Wallet
}

export const WalletEditDrop: React.FC<WalletEditDropProps> = ({wallet}) => {
    return (
        <div className=' w-full h-full bg-[#2A2A2A] bg-opacity-90 flex flex-col  z-50 py-6'>
            {/* Пример «контента» редактирования */}
            <div className=' rounded  text-white relative '>
                <div className='flex flex-col gap-4 wallet-edit-text'>
                    <div>
                        <p className='wallet-edit-shadow-text'>Name</p>
                        <p>{wallet.name}</p>
                    </div>

                    <div className='flex w-full justify-between items-center'>
                        <div>
                            <p className='wallet-edit-shadow-text'>Address</p>
                            <p>{wallet.address}</p>
                        </div>
                        <CopyPlus/>
                    </div>

                    <div className='flex w-full justify-between items-center'>
                        <div>
                            <p className='wallet-edit-shadow-text'>Secret phrase</p>
                            <p>YxOd4A...kdOW2q</p>
                        </div>
                        <CopyPlus/>
                    </div>
                </div>

                {/* если нужно, можно добавить кнопку для закрытия этой секции */}
            </div>
        </div>
    )
}
