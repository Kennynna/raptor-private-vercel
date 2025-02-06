// @ts-nocheck
export const MenuItem = ({Icon, title}) => {
    return (
        <div className='menu-item text-[var(--text-gray)] min-w-[116px]'>
            <Icon/>
            <p>{title}</p>
        </div>
    )
}
