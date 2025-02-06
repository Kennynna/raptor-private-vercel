import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue,} from '@/components/ui/select'
import {TonIcon} from '@/shared/icons/ton'

export function SelectCrypto() {
    return (
        <Select>
            <SelectTrigger
                className='flex font-medium items-center gap-[4px] cursor-pointer border-none outline-none p-1'>
                <SelectValue placeholder='Select a fruit'/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem
                        value='apple'
                        className='flex font-medium items-center gap-[4px] cursor-pointer w-full'
                    >
                        <div className='flex gap-1 items-center'>
                            <TonIcon/>
                            <p>TON</p>
                        </div>
                    </SelectItem>
                    <SelectItem value='banana'>Banana</SelectItem>
                    <SelectItem value='blueberry'>Blueberry</SelectItem>
                    <SelectItem value='grapes'>Grapes</SelectItem>
                    <SelectItem value='pineapple'>Pineapple</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
