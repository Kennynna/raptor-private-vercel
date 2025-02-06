import {WalletListItem} from './wallet-list-item'
import {CryptoListItem} from './crypto-list-item'

export const Head = () => {
    return (
        <div className='flex w-full justify-between mb-8'>
            {/* left */}
            <CryptoListItem/>

            {/* right */}
            <WalletListItem/>
        </div>
    )
}
